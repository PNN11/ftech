'use client'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import React, { FC } from 'react'
import WorkflowCard from '../../case/projectWorkflow/WorkflowCard'
import Link from 'next/link'
import Button from '@/components/ui/buttons/defaultButton'
import { useTranslation } from 'react-i18next'
import CTASection from '../../case/projectDefinition/CTASection'

type ServiceInfoProps = {
    title: string
    subtitle: string
    description?: string
    cards: { title: string; description: string; hasActionButton?: boolean }[]
    hasCTASection: boolean
}

const ServiceInfo: FC<ServiceInfoProps> = ({ cards, description, subtitle, title, hasCTASection }) => {
    const { t } = useTranslation()
    const { cta_section } = t('services:tech-stack', { returnObjects: true }) as {
        cta_section: {
            title: string
            description: string
            action_button: string
        }
    }
    return (
        <section className="space-y-8 py-12.5">
            <TitleWithDescription title={title} subtitle={subtitle} description={description} />
            <ul className="grid grid-cols-1 gap-2.5 lg:grid-cols-2 xl:gap-2">
                {cards.map(({ description, title, hasActionButton = true }, i) => (
                    <WorkflowCard
                        classes={{ wrapper: 'min-h-102.5 h-full flex flex-col' }}
                        key={title}
                        description={description}
                        title={title}
                        number={i + 1}
                    >
                        {hasActionButton && (
                            <div className="flex grow items-end">
                                <Link className="mt-4 inline-block" href="/contacts">
                                    <Button>{t('service:info.get_service')}</Button>
                                </Link>
                            </div>
                        )}
                    </WorkflowCard>
                ))}
                {hasCTASection && (
                    <div className="rounded-8 border border-gray-200 bg-white-10 px-7 py-6">
                        <CTASection
                            classes={{
                                wrapper: 'md:flex-col md:gap-12 lg:gap-12 items-start border-none py-0',
                                image: 'w-36.25',
                                textWrapper: 'md:max-w-max lg:max-w-max',
                            }}
                            actionButton={{ title: cta_section.action_button, href: '/contacts', size: 'm' }}
                            {...cta_section}
                        />
                    </div>
                )}
            </ul>
        </section>
    )
}

export default ServiceInfo
