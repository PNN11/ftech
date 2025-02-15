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

const CaseContactUs: FC = () => {
    const { t } = useTranslation()
    const { action_button, description, title } = t('case:contact-us', { returnObjects: true }) as ContactUsData

    return (
        <SectionWrapper>
            <ContactUsBlockWrapper
                action_button={action_button}
                description={description}
                title={title}
                href="/contacts"
                variant="light"
            />
        </SectionWrapper>
    )
}

export default CaseContactUs
