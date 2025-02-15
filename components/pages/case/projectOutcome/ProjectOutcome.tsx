'use client'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import OutcomeCard, { OutcomeCardProps } from './card'

type ProjectOutcomeProps = {
    title: string
    description: string
    cards: [OutcomeCardProps, OutcomeCardProps, OutcomeCardProps]
}

const ProjectOutcome: FC<ProjectOutcomeProps> = ({ description, cards, title }) => {
    const { t } = useTranslation()

    return (
        <section className="grid grid-cols-1 items-center gap-6 py-12.5 md:grid-cols-[1fr_max-content] md:gap-3 xl:items-end">
            <TitleWithDescription
                classes={{ wrapper: 'text-start md:max-w-75 lg:max-w-145 xl:max-w-123 md:ml-0' }}
                subtitle={t('case:our-team')}
                title={title}
                description={description}
            />

            <div className="grid grid-cols-2 items-center justify-center gap-2 sm:grid-cols-[max-content_max-content] xl:items-end">
                {cards.slice(0, 1).map(card => (
                    <OutcomeCard key={card.title} {...card} />
                ))}
                <div className="grid grid-cols-1 items-end gap-2 xl:grid-cols-2">
                    {cards.slice(1).map(card => (
                        <OutcomeCard key={card.title} {...card} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectOutcome
