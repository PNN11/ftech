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
                            <PowerButton />
                        </button>
                    </div>
                </MouseParallaxWrapper>
                <div className="relative z-[2] self-end">
                    <Heading ref={ref} variant="h1" className="mx-auto mb-15 max-w-2xl  text-center">
                        {t('first-screen.turn-on-your-project')}{' '}
                        <span
                            key={currentService}
                            style={{ width: serviceTitleWidth ? `${serviceTitleWidth}px` : 'auto' }}
                            className="animate-fade-in-up-bounce inline-block uppercase text-gray-600 dark:text-blue-900"
                        >
                            {currentService}
                        </span>{' '}
                        {t('first-screen.with-us')}
                    </Heading>
                    <div className="mx-auto mb-13.5 flex flex-col items-center justify-between gap-3.5 md:mb-7.5 md:max-w-fit md:flex-row lg:mb-12 lg:max-w-171">
                        <ReviewWrapper className="w-full justify-center md:w-fit">
                            <p className="mr-4 text-sm font-medium leading-none">20+</p>
                            <Image src="/images/review_avatars.png" width={95} height={26} alt="" className="mr-7" />
                            <p className="text-lg font-light leading-none">{t('first-screen.client-reviews')}</p>
                        </ReviewWrapper>
                        <ReviewWrapper className="w-full justify-center py-2.25 md:w-fit">
                            <div className="mr-4.5 flex items-center gap-1 text-lg leading-none">
                                <Star className="text-clutch-star" />
                                5.0
                            </div>
                            <Clutch className="mr-3.5" />
                            <p className="text-sm font-light uppercase leading-none">10 {t('first-screen.reviews')}</p>
                        </ReviewWrapper>
                    </div>
                    <div className="flex justify-center">
                        <Button className="w-full md:w-fit">{t('first-screen.start-project')}</Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HomePageFirstScreen
