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
import Link from 'next/link'

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
        <section className="grid grid-cols-1 items-center gap-6 py-12.5 md:grid-cols-[1fr_max-content] md:gap-3 xl:items-end">
            <TitleWithDescription
                classes={{ wrapper: 'text-start md:max-w-100 xl:max-w-123 md:ml-0' }}
                subtitle={subtitle}
                title={title}
                description={description}
            />
            <div className="relative grid grid-cols-[repeat(1,minmax(0,12rem))] items-center justify-center gap-2 py-6 xs:grid-cols-[repeat(2,minmax(0,12rem))] md:py-0 xl:grid-cols-[2fr_1fr] xl:items-end">
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
                        <Link href="/contacts" className="block w-full">
                            <ButtonWithIcon className="w-full" size="s">
                                {t('services:reasons.hire-team')}
                            </ButtonWithIcon>
                        </Link>
                    </FeatureCard>
                    <FeatureCard classes={{ title: 'text-6xl' }} title={items[1].value} description={items[1].text} />
                </div>
                <div className="space-y-2">
                    <FeatureCard title={items[2].value} description={items[2].text}></FeatureCard>
                    <FeatureCard title={items[3].value} description={items[3].text} />
                </div>
            </div>
        </section>
    )
}

export default ServicesReasons
