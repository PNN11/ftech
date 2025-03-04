'use client'
import DoubleDownArrow from '@/components/svg/DoubleDownArrow'
import FirstScreenEllipses from '@/components/svg/firstScreenEllipses'
import Button from '@/components/ui/buttons/defaultButton/button'
import ClutchInfo from '@/components/ui/ClutchInfo'
import Heading from '@/components/ui/typography/heading'
import Container from '@/components/ui/wrappers/container'
import MouseParallaxWrapper from '@/components/ui/wrappers/mouseParallaxWrapper'
import { useChangeTheme } from '@/stores/theme'
import Link from 'next/link'
import { FC, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import PowerButton from './powerButton'
import FirstScreenCircles from './FirstScreenEllipses'
import BackgroundBlur from '@/components/ui/wrappers/BackgroundBlur'
import { CLUTCH_LINK } from '@/lib/constants'

const HomePageFirstScreen: FC = () => {
    const { t } = useTranslation()
    const changeTheme = useChangeTheme()

    const sectionRef = useRef<HTMLDivElement>(null)
    const [serviceTitleWidth, setServiceTitleWidth] = useState(0)

    const titleServices = t('first-screen.title-services', { returnObjects: true }) as string[]

    const [currentService, setCurrentService] = useState(titleServices[0])

    const { ref, inView } = useInView()

    useEffect(() => {
        const elem = document.createElement('h1')
        const root = sectionRef.current
        elem.classList.add(
            'text-9xl',
            'font-medium',
            'leading-none',
            'tracking-h2',
            'absolute',
            'uppercase',
            'invisible'
        )

        root?.appendChild(elem)

        let highestWidth = 0

        titleServices.forEach(title => {
            elem.textContent = title

            if (elem.clientWidth > highestWidth) {
                highestWidth = elem.clientWidth
            }
        })

        setServiceTitleWidth(highestWidth)

        root?.removeChild(elem)
    }, [titleServices])

    useEffect(() => {
        if (!inView) return
        const timeout = setTimeout(() => {
            const currentIndex = titleServices.indexOf(currentService)
            const nextIndex = currentIndex === titleServices.length - 1 ? 0 : currentIndex + 1
            setCurrentService(titleServices[nextIndex])
        }, 3000)

        return () => clearTimeout(timeout)
    }, [currentService, titleServices, inView])

    return (
        <section ref={sectionRef} className="relative -mt-20.5 min-h-[100dvh] overflow-hidden lg:-mt-21 xl:-mt-22">
            <Container className="min-h-[100dvh] pb-18 pt-84 lg:pt-112 3xl:pt-125 4xl:pt-184">
                <MouseParallaxWrapper isAbsolutelyPositioned strength={0.2} enableOnTouchDevice={false}>
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 lg:top-0 3xl:top-14 4xl:top-40">
                        {/* <FirstScreenEllipses /> */}
                        <FirstScreenCircles />
                        <button
                            onClick={changeTheme}
                            type="button"
                            className="absolute left-1/2 top-81 -translate-x-1/2"
                        >
                            <PowerButton className="relative z-[2] animate-pulse dark:animate-none" />
                        </button>
                    </div>
                </MouseParallaxWrapper>
                <div className="relative z-[2] mx-auto w-fit">
                    <BackgroundBlur>
                        <Heading ref={ref} variant="h1" className="mx-auto mb-15 max-w-156.75 text-center">
                            {t('first-screen.turn-on-your-project')}{' '}
                            <span
                                key={currentService}
                                style={{ width: serviceTitleWidth ? `${serviceTitleWidth}px` : 'auto' }}
                                className="inline-block animate-fade-in-up-bounce uppercase text-gray-600 transition-colors duration-500 dark:text-blue-900"
                            >
                                {currentService}
                            </span>{' '}
                            {t('first-screen.with-us')}
                        </Heading>
                    </BackgroundBlur>
                    <div className="mb-5.5 flex flex-col justify-center gap-3 2sm:flex-row">
                        <Link className="w-full 2sm:w-fit" href="/contacts">
                            <Button className="w-full">{t('first-screen.start-project')}</Button>
                        </Link>
                        <Link className="w-full 2sm:w-fit" href="/cases">
                            <BackgroundBlur>
                                <Button className="w-full" variant="outlined">
                                    {t('first-screen.see-portfolio')}
                                </Button>
                            </BackgroundBlur>
                        </Link>
                    </div>
                    <div className="mb-4 flex flex-col items-center justify-center">
                        <BackgroundBlur>
                            <Link href={CLUTCH_LINK} target="_blank" rel="noopener noreferrer">
                                <ClutchInfo />
                            </Link>
                        </BackgroundBlur>
                    </div>
                </div>
            </Container>
            <button
                type="button"
                className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block 3xl:bottom-10"
                onClick={() => {
                    const element = document.getElementById('home-page-about-us')
                    element?.scrollIntoView({ behavior: 'smooth' })
                }}
            >
                <DoubleDownArrow className="animate-pulse text-gray-900 transition-colors duration-500 dark:animate-none dark:text-blue-900" />
            </button>
        </section>
    )
}

export default HomePageFirstScreen
