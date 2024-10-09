import React, { FC } from 'react'

import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import CaseButton from '@/components/ui/buttons/caseButton'
import { cn } from '@/lib/classNames'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { Case } from '@/types/cases'

type CaseCardProps = Case & {
    variant?: 'casesPage' | 'homePage'
}

const imageSizes: Record<NonNullable<Case['mockup']>, { width: number; height: number }> = {
    laptop: { height: 444, width: 598 },
    mobile: { height: 583, width: 313 },
}

const CaseCard: FC<CaseCardProps> = ({
    description,
    href,
    tags,
    title,
    bgImage = '#1F1F1F',
    tone = 'dark',
    image,
    variant = 'homePage',
    mockup,
}) => {
    const { t } = useTranslation()

    return (
        <div
            className={cn(
                'grid grid-cols-1 justify-between gap-6 overflow-hidden rounded-8',
                'p-4.5 shadow-button md:grid-cols-[1fr_20.125rem] md:p-6 lg:grid-cols-[1fr_22.125rem] xl:p-8'
            )}
            style={{ background: bgImage }}
        >
            <div
                className={cn(
                    'order-1 grid grid-cols-1 justify-between gap-6 md:order-none md:grid md:grid-cols-[1fr_5.5rem] md:flex-row md:justify-start md:gap-7 lg:grid-cols-1',
                    { 'max-w-[35.375rem]': variant === 'casesPage' }
                )}
            >
                <div className="flex items-start justify-between gap-2">
                    <div
                        className={cn('flex h-full flex-col justify-between md:flex-col-reverse md:gap-2', {
                            'lg:flex-col': variant === 'homePage',
                        })}
                    >
                        <div>
                            <Heading
                                className={cn('mb-3.5', {
                                    '!text-gray-400': tone === 'dark',
                                    '!text-white-300': tone === 'light',
                                })}
                                variant="h3"
                            >
                                {title}
                            </Heading>
                            <Paragraph
                                className={cn('mb-5.5 line-clamp-3', {
                                    '!text-[#545454]': tone === 'dark',
                                    '!text-[#F6F6F6]': tone === 'light',
                                })}
                                variant="p2"
                            >
                                {description}
                            </Paragraph>
                            <Link className="hidden md:block" href={`/cases/${href}`}>
                                <CaseButton colorTone={tone}>{t('homepage:our-cases.discover-case')}</CaseButton>
                            </Link>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            {tags.slice(0, 5).map((tag, i) => (
                                <div
                                    className={cn(
                                        'h-7.5 rounded-lg px-3 py-2 text-sm leading-none tracking-h2 text-white-300',
                                        {
                                            'bg-gray-100 bg-opacity-[0.33]': tone === 'light',
                                            'bg-[#6C6C6C] bg-opacity-[0.66]': tone === 'dark',
                                        }
                                    )}
                                    key={`${tag}${i}`}
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <Link className="w-full md:hidden" href={`/cases/${href}`}>
                    <CaseButton className="w-full" colorTone={tone}>
                        {t('homepage:our-cases.discover-case')}
                    </CaseButton>
                </Link>
            </div>
            <div
                className={cn('h-85 self-end overflow-hidden rounded-xl md:h-auto md:w-88.5 md:bg-transparent', {
                    'bg-white-10 bg-opacity-[0.12]': mockup === 'mobile',
                })}
            >
                {mockup && (
                    <Image
                        src={image}
                        alt={title}
                        width={imageSizes[mockup].width}
                        height={imageSizes[mockup].width}
                        quality={100}
                        className="mx-auto max-w-max object-cover object-top md:-mb-6 xl:-mb-8"
                    />
                )}
            </div>
        </div>
    )
}

export default CaseCard
