'use client'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import WorkflowCard from '@/components/pages/case/projectWorkflow/WorkflowCard'

const ServicesWorkflow: FC = () => {
    const { t } = useTranslation()
    const { description, items, subtitle, title } = t('services:workflow', { returnObjects: true }) as {
        title: string
        description: string
        subtitle: string
        items: { title: string; description: string }[]
    }

    return (
        <section className="mx-auto max-w-248 py-12.5">
            <TitleWithDescription title={title} subtitle={subtitle} description={description} />
            <div className="grid grid-cols-1 items-center gap-1 py-12.5 md:grid-cols-2">
                {items.map(({ title, description }, i) => (
                    <WorkflowCard
                        classes={{ wrapper: `${i % 2 ? 'md:translate-y-1/2' : ''}` }}
                        key={title}
                        title={title}
                        description={description}
                        number={i + 1}
                    />
                ))}
            </div>
        </section>
    )
}

export default ServicesWorkflow
