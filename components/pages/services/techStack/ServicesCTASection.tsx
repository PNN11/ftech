'use client'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import CTASection from '../../case/projectDefinition/CTASection'

const ServicesCTASection: FC = () => {
    const { t } = useTranslation()
    const { cta_section } = t('services:tech-stack', { returnObjects: true }) as {
        cta_section: {
            title: string
            description: string
            action_button: string
        }
    }
    return (
        <CTASection
            actionButton={{ title: cta_section.action_button, href: '/contacts', size: 'm' }}
            classes={{
                image: 'w-36.25',
            }}
            {...cta_section}
        />
    )
}

export default ServicesCTASection
