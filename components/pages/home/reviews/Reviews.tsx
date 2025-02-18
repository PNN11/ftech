'use client'
import Quotes from '@/components/svg/Quotes'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import Button from '@/components/ui/buttons/defaultButton/button'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import MouseParallaxWrapper from '@/components/ui/wrappers/mouseParallaxWrapper'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { reviews } from './data'
import Clutch from '@/components/svg/Clutch'
import ButtonWithIcon from '@/components/ui/buttons/withIcon/ButtonWithIcon'
import ReviewWrapper from '../firstScreen/ReviewWrapper'
import Star from '@/components/svg/Star'
import { CLUTCH_LINK, CLUTCH_RATING } from '@/lib/constants'

type ReviewData = {
    subtitle: string
    title: string
    description: string
    action_button: string
}

const Reviews: FC = () => {
    const { t, i18n } = useTranslation()

    const { action_button, description, subtitle, title } = t('client-reviews', { returnObjects: true }) as ReviewData

    const _reviews = reviews[i18n.language]

    return (
        <SectionWrapper className="overflow-hidden">
            <Container>
                <TitleWithDescription
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    classes={{ wrapper: 'mb-5 md:mb-12 xl:mb-21.5' }}
                />

                <div className="relative mx-auto mb-3.5 max-w-117 md:mb-7 lg:mb-17 xl:mb-23">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{
                            dynamicBullets: true,
                            bulletActiveClass: 'review-slider-bullet-active',
                            bulletClass: 'review-slider-bullet',
                            dynamicMainBullets: 3,
                            clickable: true,
                        }}
                        className="mb-7 !pb-15"
                    >
                        {_reviews.map(({ image, name, text }) => (
                            <SwiperSlide key={name} className="text-center">
                                <Image src={image} alt={name} width={100} height={100} className="mx-auto mb-5" />
                                <Heading className="mb-2" variant="h5">
                                    {name}
                                </Heading>
                                <ReviewWrapper className="mx-auto mb-5 flex w-fit gap-2">
                                    <Star className="text-clutch-star" />{' '}
                                    <span className="text-lg font-medium leading-none text-gray-900 dark:text-dark-blue-900">
                                        {CLUTCH_RATING}
                                    </span>
                                </ReviewWrapper>
                                <div className="grid grid-cols-review-with-quotes gap-6 md:gap-9">
                                    <Quotes />
                                    <Paragraph variant="p2">{text}</Paragraph>
                                    <Quotes className="rotate-180 self-end" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <Link
                        href={CLUTCH_LINK}
                        target="_blank"
                        rel="noreferrer"
                        className="relative z-[2] mx-auto block w-fit"
                    >
                        <ButtonWithIcon variant="outlined" className="w-full">
                            {action_button}
                            <Clutch className="h-5" />
                        </ButtonWithIcon>
                    </Link>
                    <MouseParallaxWrapper enableOnTouchDevice={false} isAbsolutelyPositioned strength={0.2}>
                        <Image
                            src="/images/home/people_review_1.png"
                            alt=""
                            width={403}
                            height={349}
                            className="absolute left-[-481px] top-1/2 hidden -translate-y-1/2 md:block"
                        />
                        <Image
                            src="/images/home/people_review_2.png"
                            alt=""
                            width={394}
                            height={396}
                            className="absolute right-[-433px] top-1/2 hidden -translate-y-1/2 md:block"
                        />
                    </MouseParallaxWrapper>
                </div>
            </Container>
        </SectionWrapper>
    )
}

export default Reviews
