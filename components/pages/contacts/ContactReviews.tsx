'use client'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { reviews } from '../home/reviews/data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import Heading from '@/components/ui/typography/heading'
import Quotes from '@/components/svg/Quotes'
import Paragraph from '@/components/ui/typography/paragraph'
import { cn } from '@/lib/classNames'

type ContactReviewsProps = {
    classes?: { wrapper?: string }
}

const ContactReviews: FC<ContactReviewsProps> = ({ classes }) => {
    const { i18n } = useTranslation()

    const _reviews = reviews[i18n.language]

    return (
        <div className={cn('', classes?.wrapper)}>
            <Swiper
                modules={[Pagination]}
                pagination={{
                    dynamicBullets: true,
                    bulletActiveClass: 'review-slider-bullet-active',
                    bulletClass: 'review-slider-bullet',
                    dynamicMainBullets: 3,
                    clickable: true,
                }}
                className="mb-7 pb-15"
            >
                {_reviews.map(({ name, text }) => (
                    <SwiperSlide key={name} className="">
                        <Heading className="mb-6.5" variant="h5">
                            {name}
                        </Heading>
                        <div className="grid-cols-review-with-quotes grid gap-3.75 rounded-xl bg-gray-50 p-4 md:gap-9 dark:bg-blue-200">
                            <Quotes className="text-dark-blue-600" />
                            <Paragraph variant="p2">{text}</Paragraph>
                            <Quotes className="rotate-180 self-end text-dark-blue-600" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ContactReviews
