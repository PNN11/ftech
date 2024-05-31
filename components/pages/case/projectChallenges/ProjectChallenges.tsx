'use client'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import WorkflowCard from '../projectWorkflow/WorkflowCard'
import CaseImageWithFallback from '@/components/ui/CaseImageWithFallback'

type ProjectChallengesProps = {
    challenges: { title: string; description: string }[]
    image?: string
    additionalInfo: {
        title: string
        description: string
        subtitle: string
    }
}

const ProjectChallenges: FC<ProjectChallengesProps> = ({ challenges, image, additionalInfo }) => {
    const { t } = useTranslation()

    const { description, subtitle, title } = t('case:challenges', { returnObjects: true }) as {
        title: string
        description: string
        subtitle: string
    }

    return (
        <>
            <section className="py-12.5">
                <div className="grid grid-cols-1 gap-2.5 lg:grid-cols-2">
                    <TitleWithDescription
                        classes={{ wrapper: 'text-left max-w-full ml-0 lg:max-w-123' }}
                        title={title}
                        subtitle={subtitle}
                        description={description}
                    />
                    <ul className="space-y-1.25 pt-10.5">
                        {challenges.map(({ description, title }, i) => (
                            <li key={title}>
                                <WorkflowCard description={description} title={title} number={i + 1} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className="py-6.25">
                <CaseImageWithFallback src={image} alt="" width={1192} height={393} />
            </section>
            <section className="py-12.5">
                <TitleWithDescription
                    title={additionalInfo.title}
                    description={additionalInfo.description}
                    subtitle={additionalInfo.subtitle}
                    classes={{ wrapper: 'max-w-full text-left' }}
                />
            </section>
        </>
    )
}

export default ProjectChallenges
