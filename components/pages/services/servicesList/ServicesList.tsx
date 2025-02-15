'use client'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import { serviceList } from '@/lib/constants'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import ServiceListItem from './ServiceListItem'

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
