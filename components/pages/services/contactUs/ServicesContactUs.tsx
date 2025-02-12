'use client'
import ContactUsBlockWrapper from '@/components/ui/wrappers/ContactUsBlockWrapper'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type ContactUsData = {
    title: string
    description: string
    action_button: string
}

type ServicesContactUsProps = {
    title?: string
}

const ServicesContactUs: FC<ServicesContactUsProps> = ({ title }) => {
    const { t } = useTranslation()
    const {
        action_button,
        description,
        title: defaultTitle,
    } = t('services:contact-us', { returnObjects: true }) as ContactUsData

    return (
        <SectionWrapper>
            <ContactUsBlockWrapper
                action_button={action_button}
                description={description}
                title={title ?? defaultTitle}
                href="/contacts"
                classes={{ textWrapper: 'lg:max-w-175', description: 'mx-auto lg:max-w-159' }}
            />
        </SectionWrapper>
    )
}

export default ServicesContactUs
