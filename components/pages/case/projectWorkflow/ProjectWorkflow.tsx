'use client'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import WorkflowCard from './WorkflowCard'
import Link from 'next/link'
import ButtonWithIcon from '@/components/ui/buttons/withIcon/ButtonWithIcon'

type ProjectWorkflowProps = Partial<{
    cards: { title: string; description: string }[]
    title: string
    subtitle: string
    description: string
}>

const ProjectWorkflow: FC<ProjectWorkflowProps> = ({ cards, description, subtitle, title }) => {
    const { t } = useTranslation()

    const defaultInfo = t('case:workflow', { returnObjects: true }) as {
        title: string
        subtitle: string
        description: string
        get_started: string
        contact: {
            title: string
            description: string
            action_button: string
        }
        cards: { title: string; description: string }[]
    }

    const _cards = cards ?? defaultInfo.cards

    return (
        <section className="py-12.5">
            <TitleWithDescription
                classes={{ wrapper: 'text-left max-w-full mb-8' }}
                title={title ?? defaultInfo.title}
                subtitle={subtitle ?? defaultInfo.subtitle}
                description={description ?? defaultInfo.description}
            />
            <Swiper slidesPerView="auto" spaceBetween={8}>
                <SwiperSlide className="!h-auto !w-89.5" key={title}>
                    <WorkflowCard
                        classes={{ title: 'mb-6', wrapper: 'h-full flex flex-col' }}
                        title={defaultInfo.contact.title}
                        description={defaultInfo.contact.description}
                        number={1}
                    >
                        <div className="flex grow items-end">
                            <Link className="mt-4 inline-block" href="/contacts">
                                <ButtonWithIcon variant="outlined">{defaultInfo.contact.action_button}</ButtonWithIcon>
                            </Link>
                        </div>
                    </WorkflowCard>
                </SwiperSlide>
                {_cards.slice(0, -1).map(({ description, title }, i) => (
                    <SwiperSlide className="!h-auto !w-89.5" key={title}>
                        <WorkflowCard
                            classes={{ title: 'mb-6', wrapper: 'h-full' }}
                            title={title}
                            description={description}
                            number={i + 2}
                        />
                    </SwiperSlide>
                ))}
                {_cards.slice(-1).map(({ description, title }, i) => (
                    <SwiperSlide className="!h-auto !w-89.5" key={title}>
                        <WorkflowCard
                            classes={{ title: 'mb-6', wrapper: 'h-full flex flex-col' }}
                            title={title}
                            description={description}
                            number={_cards.length + 1}
                        >
                            <div className="flex grow items-end">
                                <Link className="mt-4 inline-block" href="/contacts">
                                    <ButtonWithIcon variant="outlined">{defaultInfo.get_started}</ButtonWithIcon>
                                </Link>
                            </div>
                        </WorkflowCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default ProjectWorkflow
