'use client'
import FeatureCard from '@/components/ui/FeatureCard'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import ButtonWithIcon from '@/components/ui/buttons/withIcon'
import FeatureCardWrapper from '@/components/ui/wrappers/FeatureCardWrapper'
import Paragraph from '@/components/ui/typography/paragraph'
import Quotes from '@/components/svg/Quotes'
import CasesStar from '@/components/svg/cases/CasesStar'

type ServicesReasonsData = {
    title: string
    subtitle: string
    description: string
    items: { value: string; text: string }[]
    owner: {
        name: string
        position: string
        message: string
    }
}

const ServicesReasons: FC = () => {
    const { t } = useTranslation()

    const { description, subtitle, title, items, owner } = t('services:reasons', {
        returnObjects: true,
    }) as ServicesReasonsData

    return (
        <section className="grid grid-cols-1 items-center gap-6 py-12.5 md:grid-cols-[1fr_max-content] md:gap-3 lg:py-25 xl:items-end">
            <TitleWithDescription
                classes={{ wrapper: 'text-start md:max-w-100 xl:max-w-123 md:ml-0' }}
                subtitle={subtitle}
                title={title}
                description={description}
            />
            <div className="relative grid grid-cols-[repeat(2,minmax(0,12rem))] items-center justify-center gap-2 py-6 xl:grid-cols-[2fr_1fr] xl:items-end">
                <div className="grid grid-cols-1 items-end gap-2 xl:grid-cols-2">
                    <FeatureCard classes={{ description: 'mb-17' }} title={items[0].value} description={items[0].text}>
                        <Image
                            src="/images/services/people.png"
                            width={95}
                            height={50}
                            alt=""
                            className="absolute -top-7 left-5"
                            quality={100}
                        />
                        <ButtonWithIcon className="w-full" size="s">
                            {t('services:reasons.hire-team')}
                        </ButtonWithIcon>
                    </FeatureCard>
                    <FeatureCardWrapper className="px-0 pb-0 pt-4.5 sm:px-0">
                        <div className="mb-4 flex items-start gap-5 px-4.5">
                            <Image
                                src={'/images/services/owner.png'}
                                width={38}
                                height={38}
                                alt={owner.name}
                                quality={100}
                            />
                            <div>
                                <Paragraph className="mb-1" variant="p2">
                                    {owner.name}
                                </Paragraph>
                                <Paragraph variant="p3">{owner.position}</Paragraph>
                            </div>
                        </div>

                        <div className="top-17.5 rounded-8 bg-gray-900 px-6 pb-9.5 pt-5 outline outline-1 outline-gray-200">
                            <Quotes className="mb-5.5 w-2.5 text-bg-page" />
                            <Paragraph className="text-gray-100 dark:text-white-200" variant="p3">
                                {owner.message}
                            </Paragraph>
                        </div>
                    </FeatureCardWrapper>
                </div>
                <div className="space-y-2">
                    <FeatureCard title={items[1].value} description={items[1].text}></FeatureCard>
                    <FeatureCard title={items[2].value} description={items[2].text} />
                </div>
                <CasesStar className="absolute right-30 top-1 h-10 w-10 md:-left-18 md:right-auto md:top-5 lg:top-2 xl:top-12.5" />
            </div>
        </section>
    )
}

export default ServicesReasons
