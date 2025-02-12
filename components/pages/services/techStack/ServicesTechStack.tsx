'use client'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { technologies } from './data'
import Image from 'next/image'
import Paragraph from '@/components/ui/typography/paragraph'
import CTASection from '../../case/projectDefinition/CTASection'

const ServicesTechStack: FC = () => {
    const { t } = useTranslation()
    const { description, subtitle, title, cta_section } = t('services:tech-stack', { returnObjects: true }) as {
        subtitle: string
        title: string
        description: string
        cta_section: {
            title: string
            description: string
            action_button: string
        }
    }
    return (
        <>
            <section className="grid grid-cols-1 gap-2.5 py-12.5 lg:grid-cols-2">
                <TitleWithDescription
                    classes={{ wrapper: 'text-start max-w-full lg:max-w-123 ml-0' }}
                    title={title}
                    subtitle={subtitle}
                    description={description}
                />
                <ul className="hidden-scroll space-y-10.5 overflow-x-scroll py-10 lg:overflow-visible">
                    {technologies.map(({ group, list }) => (
                        <li key={group} className="flex items-center gap-12">
                            <Paragraph variant="subt">{group}</Paragraph>
                            <ul className="flex items-center gap-10">
                                {list.map(({ alt, image }) => (
                                    <li key={alt}>
                                        <Image className="max-w-fit grayscale" src={image} alt={alt} />
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </section>
            <CTASection
                actionButton={{ title: cta_section.action_button, href: '/contacts', size: 'm' }}
                {...cta_section}
            />
        </>
    )
}

export default ServicesTechStack
