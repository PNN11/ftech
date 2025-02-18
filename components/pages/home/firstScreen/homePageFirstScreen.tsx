'use client'
import FirstScreenEllipses from '@/components/svg/firstScreenEllipses'
import Container from '@/components/ui/wrappers/container'
import React, { FC, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PowerButton from './powerButton'
import { useChangeTheme } from '@/stores/theme'
import Heading from '@/components/ui/typography/heading'
import Image from 'next/image'
import ReviewWrapper from './ReviewWrapper'
import Star from '@/components/svg/Star'
import Clutch from '@/components/svg/Clutch'
import Button from '@/components/ui/buttons/defaultButton/button'
import MouseParallaxWrapper from '@/components/ui/wrappers/mouseParallaxWrapper'
import { useInView } from 'react-intersection-observer'
import ClutchInfo from '@/components/ui/ClutchInfo'
import Link from 'next/link'

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
            <Container className="pt-112">
                <MouseParallaxWrapper isAbsolutelyPositioned strength={0.2} enableOnTouchDevice={false}>
                    <div className="absolute left-1/2 top-0 -translate-x-1/2">
                        <FirstScreenEllipses />
                        <button
                            onClick={changeTheme}
                            type="button"
                            className="absolute left-1/2 top-81 -translate-x-1/2"
                        >
                            <PowerButton className="animate-pulse dark:animate-none" />
                        </button>
                    </div>
                </MouseParallaxWrapper>
                <div className="relative z-[2] self-end">
                    <Heading ref={ref} variant="h1" className="mx-auto mb-15 max-w-156.75 text-center">
                        {t('first-screen.turn-on-your-project')}{' '}
                        <span
                            key={currentService}
                            style={{ width: serviceTitleWidth ? `${serviceTitleWidth}px` : 'auto' }}
                            className="inline-block animate-fade-in-up-bounce uppercase text-gray-600 dark:text-blue-900"
                        >
                            {currentService}
                        </span>{' '}
                        {t('first-screen.with-us')}
                    </Heading>
                    <div className="mb-5.5 flex flex-col justify-center gap-3 2sm:flex-row">
                        <Link className="w-full 2sm:w-fit" href="/contacts">
                            <Button className="w-full">{t('first-screen.start-project')}</Button>
                        </Link>
                        <Link className="w-full 2sm:w-fit" href="/cases">
                            <Button className="w-full" variant="outlined">
                                {t('first-screen.see-portfolio')}
                            </Button>
                        </Link>
                    </div>
                    <div className="flex justify-center">
                        <ClutchInfo />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HomePageFirstScreen
