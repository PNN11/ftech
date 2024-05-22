'use client'
import Quotes from '@/components/svg/Quotes'
import FeatureCard from '@/components/ui/FeatureCard'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import Button from '@/components/ui/buttons/defaultButton/button'
import ButtonWithIcon from '@/components/ui/buttons/withIcon/ButtonWithIcon'
import Paragraph from '@/components/ui/typography/paragraph'
import FeatureCardWrapper from '@/components/ui/wrappers/FeatureCardWrapper'
import Image from 'next/image'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

type ProjectOutcomeProps = {
    title: string
    description: string
    features: {
        value: string
        text: string
    }[]
    owner: {
        name: string
        message: string
        image?: string
    }
}

const ProjectOutcome: FC<ProjectOutcomeProps> = ({ description, features, title, owner }) => {
    const { t } = useTranslation()

    return (
        <section className="grid grid-cols-1 items-center gap-6 py-12.5 md:grid-cols-[1fr_max-content] md:gap-3 xl:items-end">
            <TitleWithDescription
                classes={{ wrapper: 'text-start md:max-w-100 xl:max-w-123 md:ml-0' }}
                subtitle={t('case:project-outcome')}
                title={title}
                description={description}
            />
            <div className="grid grid-cols-[repeat(2,minmax(0,12rem))] items-center justify-center gap-2 xl:grid-cols-[2fr_1fr] xl:items-end">
                <div className="grid grid-cols-1 items-end gap-2 xl:grid-cols-2">
                    <FeatureCard
                        classes={{ description: 'mb-17' }}
                        title={features[0].value}
                        description={features[0].text}
                    >
                        <Image
                            src="/images/case/cake.png"
                            width={38}
                            height={39}
                            alt=""
                            className="absolute -top-5.5 left-5"
                            quality={100}
                        />
                        <ButtonWithIcon className="w-full" size="s">
                            {t('case:see-project')}
                        </ButtonWithIcon>
                    </FeatureCard>
                    <FeatureCardWrapper className="px-0 pb-0 pt-4.5 sm:px-0">
                        <div className="mb-4 flex items-center gap-5 px-4.5">
                            <Image
                                src={owner.image ?? '/images/case/default_owner.png'}
                                width={38}
                                height={38}
                                alt={owner.name}
                                quality={100}
                            />
                            <Paragraph variant="p2">{owner.name}</Paragraph>
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
                    <FeatureCard title={features[1].value} description={features[1].text}>
                        <Image
                            src="/images/case/grape.png"
                            width={38}
                            height={39}
                            alt=""
                            className="absolute -top-4 left-5"
                            quality={100}
                        />
                    </FeatureCard>
                    <FeatureCard title={features[2].value} description={features[2].text} />
                </div>
            </div>
        </section>
    )
}

export default ProjectOutcome
