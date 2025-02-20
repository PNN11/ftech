import React, { FC } from 'react'

import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import CaseButton from '@/components/ui/buttons/caseButton'
import { cn } from '@/lib/classNames'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { Case } from '@/types/cases'
import CaseCardTags from './CaseCardTags'

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
                'grid grid-cols-1 justify-between gap-6 overflow-hidden rounded-8 md:min-h-[27.5rem]',
                'p-4.5 shadow-button md:grid-cols-[1fr_20.125rem] md:p-6 md:pb-0 lg:grid-cols-[1fr_23.125rem] xl:grid-cols-[1fr_28.125rem] xl:p-8 xl:pb-0',
                {
                    'lg:min-h-[33.75rem] lg:grid-cols-2 lg:gap-0 lg:pr-2 xl:grid-cols-2 xl:pr-0':
                        variant === 'homePage',
                    'lg:pr-0 xl:pr-0': variant === 'homePage' && mockup === 'laptop',
                    'gap-0 lg:gap-0 xl:gap-0': !mockup,
                    'lg:flex lg:flex-col': !mockup && variant === 'homePage',
                    'lg:min-h-[24.375rem] xl:min-h-[23.25rem]': variant === 'casesPage',
                }
            )}
            style={{ background: bgImage }}
        >
            <div
                className={cn(
                    'order-1 flex flex-col justify-between gap-6 md:order-none md:justify-start md:gap-7 md:pb-6 xl:pb-8',
                    { 'max-w-[calc(100%-9rem)]': !mockup && variant === 'homePage' }
                )}
            >
                <div
                    className={cn('flex h-full flex-col justify-between md:gap-2', {
                        'lg:justify-start lg:gap-0': variant === 'homePage',
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
                    </div>
                    <div className={cn('space-y-6', { 'lg:space-y-0': variant === 'homePage' })}>
                        <CaseCardTags
                            tags={tags}
                            tone={tone}
                            classes={{ wrapper: cn({ 'lg:hidden': variant === 'homePage' }) }}
                        />
                        <Link className="block w-full md:w-fit" href={`/cases/${href}`}>
                            <CaseButton className="w-full" colorTone={tone}>
                                {t('homepage:our-cases.discover-case')}
                            </CaseButton>
                        </Link>
                    </div>
                </div>
            </div>
            <div
                className={cn('h-85 self-end overflow-hidden rounded-xl md:h-auto md:w-88.5 md:bg-transparent', {
                    'bg-white-10 bg-opacity-[0.12] md:h-101 lg:h-90 xl:h-86': mockup === 'mobile',
                    'lg:w-[24.625rem] xl:w-[30.625rem]': variant === 'casesPage',
                    'lg:h-auto lg:w-auto lg:self-start xl:h-auto': variant === 'homePage',
                })}
            >
                {mockup && image && (
                    <Image
                        src={image}
                        alt={title}
                        width={imageSizes[mockup].width}
                        height={imageSizes[mockup].height}
                        quality={100}
                        className={cn('mx-auto max-w-max object-cover object-top md:-mb-4 lg:-mb-14 xl:-mb-18', {
                            'lg:mb-0 lg:h-[26.6875rem] lg:w-[14.3125rem] xl:mb-0':
                                variant === 'homePage' && mockup === 'mobile',
                            'lg:-mt-6 lg:mb-0 xl:mb-0': variant === 'homePage' && mockup === 'laptop',
                            'h-[27.75rem] w-[37.275rem]': mockup === 'laptop',
                            'h-[36.4375rem] w-[19.5625rem]': mockup === 'mobile',
                        })}
                    />
                )}
            </div>
            <CaseCardTags
                tags={tags}
                tone={tone}
                classes={{
                    wrapper: cn('hidden', {
                        'lg:flex col-span-2 pb-6 xl:pb-8 lg:pr-6 xl:pr-8': variant === 'homePage',
                    }),
                }}
            />
        </div>
    )
}

export default CaseCard
