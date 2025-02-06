'use client'
import ContactUsEllipse from '@/components/svg/ContactUsEllipse'
import ContactUsEllipseBlue from '@/components/svg/ContactUsEllipseBlue'
import Button from '@/components/ui/buttons/defaultButton/button'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import ContactUsBlockWrapper from '@/components/ui/wrappers/ContactUsBlockWrapper'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

type ContactUsData = {
    title: string
    description: string
    action_button: string
}

const ExpertiseContactUs: FC = () => {
    const { t } = useTranslation()
    const { action_button, description, title } = t('expertise:contact-us', { returnObjects: true }) as ContactUsData

    return (
        <SectionWrapper>
            <Container>
                <ContactUsBlockWrapper
                    action_button={action_button}
                    description={description}
                    title={title}
                    href="/contacts"
                />
            </Container>
        </SectionWrapper>
    )
}

export default ExpertiseContactUs
