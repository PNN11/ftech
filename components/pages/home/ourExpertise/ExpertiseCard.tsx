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
    isActive?: boolean
    wrapperStyle?: CSSProperties
    onMouseEnter?: () => void
    image: {
        src: string
        width: number
        height: number
    }
}

const ExpertiseCard: FC<ExpertiseCardProps> = ({
    description,
    href,
    isActive,
    number,
    title,
    onMouseEnter,
    wrapperStyle,
    image,
}) => {
    const { t } = useTranslation()

    return (
        <div
            className="group relative w-56 overflow-hidden rounded-8 border border-gray-300 bg-white-300 
                                p-5.5 shadow-button transition-all duration-500"
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

            <Link
                className={cn('mt-4 hidden w-full animate-fade-in-up lg:hidden lg:group-hover:block', {
                    block: isActive,
                })}
                href={{ pathname: '/cases', query: { category: href.replace('/', '') } }}
            >
                <Button className="w-full" size="s">
                    {t('homepage:our-expertise.find-more')}
                </Button>
            </Link>

            <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt=""
                style={{ width: image.width, height: image.height }}
                className={cn(
                    `absolute bottom-2.5 left-5.5 max-w-max transition-all duration-500 lg:group-hover:bottom-0`,
                    { 'bottom-0 lg:bottom-2.5': isActive }
                )}
            />
        </div>
    )
}

export default ExpertiseCard
