'use client'
import { allCases } from '@/app/[locale]/cases/data'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import Button from '@/components/ui/buttons/defaultButton/button'
import Heading from '@/components/ui/typography/heading'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import Link from 'next/link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import CaseCard from './CaseCard'

const OurCases: FC = () => {
    const { t, i18n } = useTranslation()

    const _cases = allCases[i18n.language]

    return (
        <SectionWrapper>
            <Container>
                <div className="grid grid-cols-1 items-end gap-2 lg:grid-cols-2">
                    <div>
                        <TitleWithDescription
                            title={t('homepage:our-cases.title')}
                            description={t('homepage:our-cases.description')}
                            subtitle={t('homepage:our-cases.subtitle')}
                            classes={{ wrapper: 'text-start' }}
                        />
                        <Link href="/cases">
                            <Button className="mb-10 mt-7" size="m">
                                {t('homepage:our-cases.all-cases')}
                            </Button>
                        </Link>
                        <div className="space-y-2">
                            {_cases.slice(0, 2).map((item, index) => (
                                <CaseCard key={`${item.card.title}${index}`} {...item.card} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="space-y-2">
                            {_cases.slice(2, 4).map((item, index) => (
                                <CaseCard key={`${item.card.title}${index}`} {...item.card} />
                            ))}
                            <div
                                className="flex flex-col items-center gap-6 rounded-8 border border-[#E5E5E5] bg-white-300 p-4.5 
                            md:gap-4.5 md:p-5.25 lg:items-start lg:py-11.5 xl:px-8"
                            >
                                <Heading className="text-center" variant="h4">
                                    {t('homepage:our-cases.explore-all-cases-in-portfolio')}
                                </Heading>
                                <Link href="/cases" className="w-full md:w-fit">
                                    <Button className="w-full">
                                        {t('homepage:our-cases.explore-all-cases', { casesCount: `${_cases.length}+` })}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </SectionWrapper>
    )
}

export default OurCases
