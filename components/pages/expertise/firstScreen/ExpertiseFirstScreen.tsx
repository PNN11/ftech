'use client'
import { expertise } from '@/components/layout/Header/expertise/ExpertiseSubmenu'
import Button from '@/components/ui/buttons/defaultButton/button'
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

    const { title, description, explore } = t('expertise:first_screen', { returnObjects: true }) as {
        title: string
        description: string
        explore: string
    }
    return (
        <section className="mb-3 grid grid-cols-1 gap-2 md:mb-4 lg:grid-cols-[58%_1fr]">
            <div
                className="relative overflow-hidden rounded-3xl border border-gray-200 p-4.5 pt-82 md:rounded-8 md:p-12
             lg:rounded-[1rem_3rem_1rem_3rem] xl:rounded-[1rem_4rem_1rem_4rem] xl:px-16 xl:py-15"
            >
                <div className="relative z-[1] md:max-w-80">
                    <Heading className="mb-9" variant="h1">
                        {title}
                    </Heading>
                    <Paragraph variant="p1">{description}</Paragraph>
                </div>
                <Image
                    src="/images/expertise/lines.svg"
                    alt=""
                    width={447}
                    height={447}
                    quality={100}
                    className="absolute -top-5 left-1/2 max-w-max -translate-x-1/4 md:left-auto md:right-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-1/2"
                />
                <Image
                    src="/images/expertise/house.png"
                    alt=""
                    width={309}
                    height={242}
                    quality={100}
                    className="absolute left-1/2 top-17.5 -translate-x-1/2 md:-right-4 md:left-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0 lg:-right-12 xl:-right-4"
                />
            </div>
            <div className="hidden overflow-hidden rounded-[1rem_3rem_1rem_3rem] border border-gray-200 lg:block xl:rounded-[1rem_4rem_1rem_4rem]">
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
                                <div className="relative z-[1] h-full p-12 pt-29 xl:p-16 xl:pt-33">
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
        </section>
    )
}

export default ExpertiseFirstScreen
