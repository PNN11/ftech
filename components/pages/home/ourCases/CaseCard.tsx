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

const CaseCard: FC<CaseCardProps> = ({
    description,
    features,
    href,
    tags,
    title,
    bgColor = '#1F1F1F',
    bgTone = 'dark',
    image,
    variant = 'homePage',
    shortTitle,
}) => {
    const { t } = useTranslation()

    return (
        <div
            className={cn(
                'grid grid-cols-1 justify-between gap-6 rounded-8 p-4.5 shadow-button md:grid-cols-[1fr_20.125rem] md:p-6 lg:grid-cols-[1fr_22.125rem] xl:p-8',
                { 'lg:block': variant === 'homePage' }
            )}
            style={{ backgroundColor: bgColor }}
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
                                    '!text-gray-400': bgTone === 'light',
                                    '!text-white-300': bgTone === 'dark',
                                })}
                                variant="h3"
                            >
                                {shortTitle}
                            </Heading>
                            <Paragraph
                                className={cn('mb-5.5 line-clamp-3', {
                                    '!text-[#545454]': bgTone === 'light',
                                    '!text-[#F6F6F6]': bgTone === 'dark',
                                })}
                                variant="p2"
                            >
                                {description}
                            </Paragraph>
                            <Link className="hidden md:block" href={`/cases/${href}`}>
                                <CaseButton colorTone={bgTone}>{t('homepage:our-cases.discover-case')}</CaseButton>
                            </Link>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            {tags.slice(0, 5).map((tag, i) => (
                                <div
                                    className={cn(
                                        'h-7.5 rounded-lg px-3 py-2 text-sm leading-none tracking-h2 text-white-300',
                                        {
                                            'bg-gray-100 bg-opacity-[0.33]': bgTone === 'dark',
                                            'bg-[#6C6C6C] bg-opacity-[0.66]': bgTone === 'light',
                                        }
                                    )}
                                    key={`${tag}${i}`}
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                    <Image
                        src={image}
                        alt={title}
                        width={190}
                        height={380}
                        className={cn('mr-5 hidden w-47.5', { 'lg:block': variant === 'homePage' })}
                        quality={100}
                    />
                </div>
                <div className={cn('grid grid-cols-3 gap-3.5 md:grid-cols-1 lg:grid-cols-3 lg:gap-5.5')}>
                    {features.map(({ text, value }, i) => (
                        <div key={`${text}${i}`} className="">
                            <Heading
                                className={cn('mb-3.5', {
                                    '!text-gray-400': bgTone === 'light',
                                    '!text-white-300': bgTone === 'dark',
                                })}
                                variant="h3"
                            >
                                {value}
                            </Heading>
                            <Paragraph
                                className={cn('', {
                                    '!text-[#545454]': bgTone === 'light',
                                    '!text-[#F6F6F6]': bgTone === 'dark',
                                })}
                                variant="p2"
                            >
                                {text}
                            </Paragraph>
                        </div>
                    ))}
                </div>
                <Link className="w-full md:hidden" href={`/cases/${href}`}>
                    <CaseButton className="w-full" colorTone={bgTone}>
                        {t('homepage:our-cases.discover-case')}
                    </CaseButton>
                </Link>
            </div>
            <div
                className={cn('self-end rounded-xl bg-white-10 bg-opacity-[0.12] md:bg-transparent', {
                    'lg:hidden': variant === 'homePage',
                })}
            >
                <Image
                    src={image}
                    alt={title}
                    width={290}
                    height={340}
                    quality={100}
                    className="mx-auto h-85 object-cover object-top md:-mb-6 xl:-mb-8"
                />
            </div>
        </div>
    )
}

export default CaseCard
