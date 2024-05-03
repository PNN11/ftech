'use client'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { faq } from './data'
import FaqItem from './FaqItem'

type FaqData = {
    subtitle: string
    title: string
    description: string
}

const Faq: FC = () => {
    const { t, i18n } = useTranslation()
    const { description, subtitle, title } = t('homepage:faq', { returnObjects: true }) as FaqData

    const _faq = faq[i18n.language]

    return (
        <SectionWrapper>
            <Container>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-2.5">
                    <TitleWithDescription
                        classes={{ wrapper: 'text-start lg:max-w-[29.625rem]' }}
                        subtitle={subtitle}
                        title={title}
                        description={description}
                    />
                    <div
                        className="flex flex-col gap-4.5 divide-y-2 divide-dark-blue-300 rounded-8 border
                       border-dark-blue-200 bg-white-10 p-4.5 shadow-button lg:p-6 xl:p-8"
                    >
                        {_faq.map(item => (
                            <FaqItem classes={{ wrapper: 'pt-4.5 first:pt-0' }} key={item.question} {...item} />
                        ))}
                    </div>
                </div>
            </Container>
        </SectionWrapper>
    )
}

export default Faq
