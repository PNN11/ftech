'use client'
import AppWindow from '@/components/svg/AppWindow'
import Cloud from '@/components/svg/Cloud'
import DatabaseIcon from '@/components/svg/DatabaseIcon'
import SketchLogo from '@/components/svg/SketchLogo'
import Terminal from '@/components/svg/Terminal'
import UsersFour from '@/components/svg/UsersFour'
import React, { FC } from 'react'
import ServiceListGroupItem from './ServiceListGroupItem'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import { useTranslation } from 'react-i18next'
import ServiceListItem from './ServiceListItem'
import { TService } from '@/types/common'

const serviceList: { href: `/${TService}`; serviceKey: TService }[] = [
    { href: '/ai-development', serviceKey: 'ai-development' },
    { href: '/design', serviceKey: 'design' },
    { href: '/devops', serviceKey: 'devops' },
    { href: '/mobile-development', serviceKey: 'mobile-development' },
    { href: '/frontend-development', serviceKey: 'frontend-development' },
    { href: '/backend-development', serviceKey: 'backend-development' },
    { href: '/outsourcing', serviceKey: 'outsourcing' },
    { href: '/client-team-extension', serviceKey: 'client-team-extension' },
    { href: '/business-analysis', serviceKey: 'business-analysis' },
    { href: '/quality-assurance', serviceKey: 'quality-assurance' },
    { href: '/third-party-services', serviceKey: 'third-party-services' },
]

const ServicesList: FC = () => {
    const { t } = useTranslation()
    const { subtitle, title } = t('services:services-list', { returnObjects: true }) as {
        title: string
        subtitle: string
    }
    return (
        <section>
            <TitleWithDescription title={title} subtitle={subtitle} />
            <ul className="space-y-2">
                {serviceList.map((item, i) => (
                    <ServiceListItem key={item.href} {...item} number={i + 1} />
                ))}
            </ul>
        </section>
    )
}

export default ServicesList
