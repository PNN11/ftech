'use client'
import { expertise } from '@/components/layout/Header/expertise/ExpertiseSubmenu'
import Button from '@/components/ui/buttons/defaultButton/button'
import ButtonWithIcon from '@/components/ui/buttons/withIcon/ButtonWithIcon'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { formatNumber } from '@/lib/formatNumber'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const ExpertiseFirstScreen: FC = () => {
    const { t } = useTranslation()

    const { title, description, explore, consultation_button } = t('expertise:first_screen', {
        returnObjects: true,
    }) as {
        title: string
        description: string
        explore: string
        consultation_button: string
    }
    return (
        <section className="mb-3 grid grid-cols-1 gap-2 overflow-hidden rounded-8 border border-gray-200 bg-white-10 md:mb-4 lg:grid-cols-[58%_1fr]">
            <div className="relative">
                <div className="relative p-4.5 md:p-12 xl:px-16 xl:py-15">
                    <div className="relative z-[1] space-y-9 md:max-w-80">
                        <Heading variant="h1">{title}</Heading>
                        <Paragraph variant="p1">{description}</Paragraph>
                        <Link className="block" href="/contacts">
                            <ButtonWithIcon>{consultation_button}</ButtonWithIcon>
                        </Link>
                    </div>
                </div>
                <Image
                    src="/images/expertise/lines.svg"
                    alt=""
                    width={571}
                    height={363}
                    quality={100}
                    className="absolute -top-5 left-1/2 hidden max-w-max -translate-x-1/4 md:bottom-0 md:left-auto
                     md:right-0 md:top-auto md:block md:translate-x-1/2 lg:translate-x-2/3"
                />
            </div>
            <div className="h-full lg:p-4">
                <div className="hidden h-full overflow-hidden rounded-2xl border border-dark-blue-100 bg-gray-350 lg:block">
                    <div className="grid h-full grid-cols-1">
                        <Swiper
                            modules={[Pagination]}
                            pagination={{
                                bulletActiveClass: 'review-slider-bullet-active',
                                bulletClass: 'review-slider-bullet',
                                clickable: true,
                                horizontalClass: 'expertise-slider-pagination-horizontal',
                            }}
                            className="expertise-slider-pagination h-full w-full"
                        >
                            {expertise.map(({ longDescription, href, number, title, image }) => (
                                <SwiperSlide key={title} className="relative overflow-hidden">
                                    <div className="relative z-[1] flex h-full flex-col justify-end p-11 pt-16">
                                        <p className="mb-4 text-gray-900 dark:text-blue-900">
                                            {formatNumber(number, { minimumIntegerDigits: 2 })}
                                        </p>
                                        <Heading className="mb-8" variant="h2">
                                            {t(title)}
                                        </Heading>
                                        <Paragraph className="mb-7" variant="p1">
                                            {t(longDescription)}
                                        </Paragraph>
                                        <Link href={`/expertise${href}`}>
                                            <Button className="w-37" size="s">
                                                {explore}
                                            </Button>
                                        </Link>
                                    </div>

                                    <Image
                                        src={image.src}
                                        alt=""
                                        width={image.width}
                                        height={image.height}
                                        quality={100}
                                        className="absolute bottom-[-15%] right-[-40%] w-137.5"
                                    />
                                    <div className="absolute inset-0 bg-expertise-first-screen" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExpertiseFirstScreen
