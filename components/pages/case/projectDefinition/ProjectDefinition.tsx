'use client'
import Tab from '@/components/ui/Tab'
import Button from '@/components/ui/buttons/defaultButton/button'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

type ProjectDefinitionProps = {
    location: string
    clutchReview: string
    client: string
    budget: string
    industry: string[]
    environment: string[]
    release: string
    problem: string
    solution: string
    delivering: string
    tags: string[]
}

const ProjectDefinition: FC<ProjectDefinitionProps> = ({
    budget,
    location,
    client,
    industry,
    environment,
    release,
    problem,
    solution,
    delivering,
    clutchReview,
    tags,
}) => {
    const { t } = useTranslation()

    const stats = [
        {
            title: 'location',
            description: location,
        },
        {
            title: 'clutch-review',
            description: clutchReview,
        },
        {
            title: 'client',
            description: client,
        },
        {
            title: 'budget',
            description: budget,
        },
        {
            title: 'industry',
            description: industry,
        },
        {
            title: 'environment',
            description: environment,
        },
        {
            title: 'release',
            description: release,
        },
    ]

    const descriptionItems = [
        { title: 'problem', description: problem },
        { title: 'solution', description: solution },
        { title: 'delivering', description: delivering },
    ]

    const { action_button, description, title } = t('project-info.have-idea', { returnObjects: true }) as {
        title: string
        description: string
        action_button: string
    }

    return (
        <section className="pt-10.5 md:pt-12">
            <Heading className="mb-8 md:mb-10.5 lg:ml-[calc(25%+0.625rem)]" variant="h2">
                {t('project-info.project-definition')}
            </Heading>
            <div className="mb-12.5 grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_3fr] lg:gap-2.5">
                <ul className="grid grid-cols-2 flex-row flex-wrap gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-1 lg:flex-col lg:flex-nowrap lg:gap-6">
                    {stats.map(({ title, description }) => (
                        <li key={title}>
                            <Heading className="mb-3" variant="h6">
                                {t(`project-info.${title}`)}
                            </Heading>
                            {Array.isArray(description) ? (
                                <ul className="space-y-3">
                                    {description.map(item => (
                                        <li key={item}>
                                            <Paragraph variant="subt">{item}</Paragraph>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <Paragraph variant="subt">{description}</Paragraph>
                            )}
                        </li>
                    ))}
                </ul>
                <div>
                    <ul className="mb-12 flex flex-wrap items-center gap-1">
                        {tags.map(tag => (
                            <li key={tag}>
                                <Tab>{tag}</Tab>
                            </li>
                        ))}
                    </ul>
                    <ul className="space-y-12">
                        {descriptionItems.map(({ title, description }) => (
                            <li key={title}>
                                <Heading className="mb-8" variant="h6">
                                    {t(`project-info.${title}`)}
                                </Heading>
                                <Paragraph variant="p1">{description}</Paragraph>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-11 border-b border-t border-gray-300 py-9.5 md:flex-row md:gap-29 lg:gap-25">
                <Image src="/images/case/case_people.png" width={156} height={117} alt="" />
                <div className="lg:max-w-122 md:max-w-87">
                    <Heading className="mb-4" variant="h5">
                        💡 {title}
                    </Heading>
                    <Paragraph className="mb-7" variant="p1">
                        {description}
                    </Paragraph>
                    <Link href="/contacts">
                        <Button size="s">{action_button}</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ProjectDefinition
