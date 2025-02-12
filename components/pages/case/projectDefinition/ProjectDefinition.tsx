'use client'
import Tab from '@/components/ui/Tab'
import Button from '@/components/ui/buttons/defaultButton/button'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import CTASection from './CTASection'

type ListLabels =
    | 'brand'
    | 'location'
    | 'client'
    | 'budget'
    | 'industry'
    | 'environment'
    | 'release'
    | 'projectType'
    | 'team'
    | 'projectServices'

type DescriptionLabels = 'problem' | 'solution' | 'delivering'

type ProjectDefinitionProps = {
    tags: string[]
    listItems: Partial<Record<ListLabels, string | string[]>>
    descriptionItems: Partial<Record<DescriptionLabels, string>>
    contact: { title: string; description: string; image?: string }
}

const ProjectDefinition: FC<ProjectDefinitionProps> = ({ listItems, tags, contact, descriptionItems }) => {
    const { t } = useTranslation()

    const _listItems = Object.entries(listItems).map(([key, value]) => ({
        title: t(`cases:${key}`),
        description: value,
    }))

    const _descriptionItems = Object.entries(descriptionItems).map(([key, value]) => ({
        title: t(`cases:${key}`),
        description: value,
    }))

    return (
        <section className="pt-10.5 md:pt-12">
            <Heading className="mb-8 md:mb-10.5 lg:ml-[calc(25%+0.625rem)]" variant="h2">
                {t('project-info.project-definition')}
            </Heading>
            <div className="mb-12.5 grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_3fr] lg:gap-2.5">
                <ul className="grid grid-cols-2 flex-row flex-wrap gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-1 lg:flex-col lg:flex-nowrap lg:gap-6">
                    {_listItems.map(({ title, description }) => (
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
                    <ul className="mb-12 space-y-12">
                        {_descriptionItems.map(({ title, description }) => (
                            <li key={title}>
                                <Heading className="mb-8" variant="h6">
                                    {t(`project-info.${title}`)}
                                </Heading>
                                <Paragraph variant="p1">{description}</Paragraph>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex flex-wrap items-center gap-1">
                        {tags.map(tag => (
                            <li key={tag}>
                                <Tab>{tag}</Tab>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <CTASection actionButton={{ href: '/contacts', title: t('case:project-info.contact') }} {...contact} />
        </section>
    )
}

export default ProjectDefinition
