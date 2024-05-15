'use client'
import { cn } from '@/lib/classNames'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Clutch from '../svg/Clutch'
import Star from '../svg/Star'

type ClutchInfoProps = {
    classes?: {
        wrapper?: string
        ratingWrapper?: string
        reviewsWrapper?: string
        reviews?: string
    }
}

const ClutchInfo: FC<ClutchInfoProps> = ({ classes }) => {
    const { t } = useTranslation()

    return (
        <div className={cn('flex items-center gap-4.5', classes?.wrapper)}>
            <div className={cn('flex items-center gap-1 text-lg leading-none', classes?.ratingWrapper)}>
                <Star className="text-clutch-star" />
                5.0
            </div>
            <div className={cn('flex items-center gap-3.5', classes?.reviewsWrapper)}>
                <Clutch />
                <p className={cn('text-sm font-light uppercase leading-none', classes?.reviews)}>
                    10 {t('common:footer.reviews')}
                </p>
            </div>
        </div>
    )
}

export default ClutchInfo
