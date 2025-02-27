'use client'
import { cn } from '@/lib/classNames'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Clutch from '../svg/Clutch'
import Star from '../svg/Star'
import { CLUTCH_LINK, CLUTCH_RATING } from '@/lib/constants'
import Link from 'next/link'

type ClutchInfoProps = {
    classes?: {
        wrapper?: string
        ratingWrapper?: string
        reviewsWrapper?: string
        reviews?: string
        clutchIcon?: string
    }
}

const ClutchInfo: FC<ClutchInfoProps> = ({ classes }) => {
    const { t } = useTranslation()
    const [isLinkVisible, setIsLinkVisible] = useState(false)

    useEffect(() => {
        setIsLinkVisible(true)
    }, [])

    if (!isLinkVisible) return null

    return (
        <div className={cn('flex items-center gap-4.5', classes?.wrapper)}>
            <div className={cn('flex items-end gap-3.5', classes?.reviewsWrapper)}>
                <Link href={CLUTCH_LINK} target="_blank" rel="noopener noreferrer">
                    <Clutch className={classes?.clutchIcon} />
                </Link>
                <p className={cn('text-sm font-light uppercase leading-none', classes?.reviews)}>
                    15+ {t('common:footer.reviews')}
                </p>
            </div>
            <div className={cn('flex items-center gap-1 text-lg leading-none', classes?.ratingWrapper)}>
                <Star className="text-clutch-star" />
                {CLUTCH_RATING}
            </div>
        </div>
    )
}

export default ClutchInfo
