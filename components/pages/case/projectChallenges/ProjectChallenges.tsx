'use client'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import WorkflowCard from '../projectWorkflow/WorkflowCard'
import Link from 'next/link'
import Button from '@/components/ui/buttons/defaultButton/button'
import { cn } from '@/lib/classNames'

type ProjectChallengesProps = {
    cards: { title: string; description: string }[]
    title: string
    description?: string
    subtitle?: string
    actionButton?: { text: string; href: string }
}

const ProjectChallenges: FC<ProjectChallengesProps> = ({ cards, description, subtitle, title, actionButton }) => {
    const { t } = useTranslation()

    return (
        <section className="py-12.5">
            <div className="grid grid-cols-1 gap-2.5 lg:grid-cols-2">
                <div>
                    <TitleWithDescription
                        classes={{ wrapper: 'text-left max-w-full ml-0 lg:max-w-123' }}
                        title={title}
                        subtitle={subtitle}
                        description={description}
                    />
                    {actionButton && (
                        <Link className="mt-6 block w-full 2sm:w-fit" href={actionButton.href}>
                            <Button className="w-full">{t(actionButton.text)}</Button>
                        </Link>
                    )}
                </div>
                <ul className={cn('space-y-1.25', { 'pt-10.5': !!subtitle })}>
                    {cards.map(({ description, title }, i) => (
                        <li key={title}>
                            <WorkflowCard description={description} title={title} number={i + 1} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ProjectChallenges
