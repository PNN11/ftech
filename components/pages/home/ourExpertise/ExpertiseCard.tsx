import Button from '@/components/ui/buttons/defaultButton'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { formatNumber } from '@/lib/formatNumber'
import React, { CSSProperties, FC } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/classNames'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

type ExpertiseCardProps = {
    title: string
    description: string
    href: string
    number: number
    isActive: boolean
    wrapperStyle?: CSSProperties
    onMouseEnter?: () => void
}

const ExpertiseCard: FC<ExpertiseCardProps> = ({
    description,
    href,
    isActive,
    number,
    title,
    onMouseEnter,
    wrapperStyle,
}) => {
    const { t } = useTranslation()

    return (
        <Link href={`/expertise${href}`}>
            <div
                className="w-47.25 relative overflow-hidden rounded-8 border border-gray-300 bg-white-300 
                                p-5.5 shadow-button transition-all duration-500 lg:w-48"
                style={wrapperStyle}
                onMouseEnter={onMouseEnter}
            >
                <Paragraph className={cn('mb-2 transition-all duration-500', { 'pt-5': isActive })} variant="subt">
                    {formatNumber(number, { minimumIntegerDigits: 2 })}
                </Paragraph>
                <Heading className="mb-4" variant="h5">
                    {t(title)}
                </Heading>
                <Paragraph variant="p2">{t(description)}</Paragraph>
                {isActive && (
                    <Button className="mt-4 w-full animate-fade-in-up" size="s">
                        {t('our-expertise.find-more')}
                    </Button>
                )}
                <Image
                    src="/images/home/expertise_house.png"
                    width={171}
                    height={187}
                    alt=""
                    className={`absolute right-0 transition-all duration-500 ${isActive ? 'top-51.5' : 'top-46.5'}`}
                />
            </div>
        </Link>
    )
}

export default ExpertiseCard
