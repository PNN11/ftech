import TitleWithDescription from '@/components/ui/TitleWithDescription'
import React, { FC } from 'react'
import WorkflowCard from '../projectWorkflow/WorkflowCard'
import { cn } from '@/lib/classNames'

type Section9Props = {
    title: string
    subtitle?: string
    description?: string
    cards: { title: string; description: string }[]
    variant?: '1' | '2' | '3'
}

const Section9: FC<Section9Props> = ({ subtitle, description, title, cards, variant = '1' }) => {
    return (
        <section className="space-y-10.5 py-12.5">
            <TitleWithDescription title={title} subtitle={subtitle} description={description} />
            <ul
                className={cn('grid grid-cols-1 gap-2 md:grid-cols-2', {
                    'lg:grid-cols-3': variant === '1',
                    'xl:grid-cols-3': variant === '3',
                })}
            >
                {cards.map(({ description, title }, i) => (
                    <li key={title}>
                        <WorkflowCard
                            classes={{ wrapper: 'h-full' }}
                            title={title}
                            description={description}
                            number={i + 1}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Section9
