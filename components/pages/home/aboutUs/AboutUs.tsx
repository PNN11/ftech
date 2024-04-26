'use client'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutUs = () => {
    const { t } = useTranslation()
    return (
        <SectionWrapper>
            <Container>
                <div className="max-w-159 mx-auto text-center">
                    <Heading className="mb-7" variant="h2">
                        {t('about-us.title')}
                    </Heading>
                    <Paragraph variant="p1">{t('about-us.description')}</Paragraph>
                </div>
            </Container>
        </SectionWrapper>
    )
}

export default AboutUs
