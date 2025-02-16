'use client'
import { expertise } from '@/components/layout/Header/expertise/ExpertiseSubmenu'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import Button from '@/components/ui/buttons/defaultButton/button'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import { formatNumber } from '@/lib/formatNumber'
import { ScreenWidths } from '@/types/common'

import Link from 'next/link'
import { FC, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ExpertiseCard from './ExpertiseCard'
import ExpertiseSlider from './ExpertiseSlider'

type ExpertiseData = {
    title: string
    description: string
    subtitle: string
}

const EXPERTISE_CARD_HEIGHT = 400

const getCardStyles = (index: number, activeIndex: number) => {
    if (index === activeIndex) return { height: EXPERTISE_CARD_HEIGHT }
    if (activeIndex - 1 === index || index === activeIndex + 1) return { height: EXPERTISE_CARD_HEIGHT * 0.95 }
    if (activeIndex - 2 === index || index === activeIndex + 2) return { height: EXPERTISE_CARD_HEIGHT * 0.95 }
    if (activeIndex - 3 === index || index === activeIndex + 3)
        return { height: EXPERTISE_CARD_HEIGHT * 0.9, opacity: 0.66 }
    if (activeIndex - 4 === index || index === activeIndex + 4)
        return { height: EXPERTISE_CARD_HEIGHT * 0.7, opacity: 0.33 }
    if (activeIndex - 5 === index || index === activeIndex + 5)
        return { height: EXPERTISE_CARD_HEIGHT * 0.5, opacity: 0.33 }
    if (activeIndex - 6 === index || index === activeIndex + 6)
        return { height: EXPERTISE_CARD_HEIGHT * 0.5, opacity: 0.2 }
    if (activeIndex - 7 === index || index === activeIndex + 7)
        return { height: EXPERTISE_CARD_HEIGHT * 0.5, opacity: 0.15 }
    if (activeIndex - 8 === index || index === activeIndex + 8)
        return { height: EXPERTISE_CARD_HEIGHT * 0.5, opacity: 0.1 }

    return { height: EXPERTISE_CARD_HEIGHT * 0.5, opacity: 0 }
}

const getPositionOffset = (width: number, position: number) => {
    if (width <= 0) return 0

    if (position > 0.5) return width / 2 - width * position - 80
    if (position < 0.5) return width / 2 - width * position + 80
    return width / 2 - width * position
}

const MULTIPLAYER = 5
const MIDDLE_INDEX = Math.floor((expertise.length * MULTIPLAYER) / 2)

const OurExpertise: FC = () => {
    const { t } = useTranslation()
    const [mousePosition, setMousePosition] = useState(0.5)
    const [activeCard, setActiveCard] = useState<number>(MIDDLE_INDEX)
    const [widthDifference, setWidthDifference] = useState({ difference: 0, differenceBetweenOneSection: 0 })

    const ref = useRef<HTMLDivElement>(null)
    const expertiseWrapperRef = useRef<HTMLDivElement>(null)

    const { description, subtitle, title } = t('homepage:our-expertise', { returnObjects: true }) as ExpertiseData

    useEffect(() => {
        if (!ref.current) return

        const element = ref.current

        const mouseMoveHandler = (e: MouseEvent) => {
            const value = +formatNumber(e.clientX / element.clientWidth, { maximumFractionDigits: 1 })

            setMousePosition(value)
        }

        element.addEventListener('mousemove', mouseMoveHandler)

        return () => {
            element.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])

    useEffect(() => {
        if (!expertiseWrapperRef.current) return
        const element = expertiseWrapperRef.current

        const handler = () => {
            if (window.innerWidth < ScreenWidths.lg) return

            setWidthDifference({
                difference: element.clientWidth - window.innerWidth,
                differenceBetweenOneSection: element.clientWidth / 3 - window.innerWidth,
            })
        }

        handler()

        window.addEventListener('resize', handler)

        return () => {
            window.removeEventListener('resize', handler)
        }
    }, [])

    return (
        <SectionWrapper>
            <Container>
                <TitleWithDescription
                    classes={{ wrapper: 'mb-8 xl:mb-16' }}
                    title={title}
                    description={description}
                    subtitle={subtitle}
                />
            </Container>
            <div
                onMouseLeave={() => {
                    setActiveCard(MIDDLE_INDEX)
                    setMousePosition(0.5)
                }}
                className="relative hidden h-100 overflow-hidden lg:block"
                ref={ref}
            >
                <div
                    ref={expertiseWrapperRef}
                    className="absolute flex h-100 items-end gap-2 transition-all duration-500"
                    style={{
                        left: `${-widthDifference.difference / 2 + getPositionOffset(widthDifference.differenceBetweenOneSection, mousePosition)}px`,
                    }}
                >
                    {/* multiply original array for displaying cards on both sides on screens with width more than 1900 */}
                    {(new Array(MULTIPLAYER).fill(expertise).flat() as typeof expertise).map(
                        ({ description, href, title, number, image }, i) => (
                            <ExpertiseCard
                                description={description}
                                href={href}
                                isActive={i === activeCard}
                                key={`${href}${i}`}
                                number={number}
                                onMouseEnter={() => setActiveCard(i)}
                                title={title}
                                wrapperStyle={getCardStyles(i, activeCard)}
                                image={image}
                            />
                        )
                    )}
                </div>
            </div>
            <Container className="lg:hidden">
                <ExpertiseSlider />
                <div className="mt-8 flex w-full justify-center">
                    <Link href="/cases" className="w-full md:w-fit">
                        <Button className="w-full" size="m">
                            {t('homepage:our-expertise.full-expertise-domains')}
                        </Button>
                    </Link>
                </div>
            </Container>
        </SectionWrapper>
    )
}

export default OurExpertise
