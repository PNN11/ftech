'use client'
import { expertise } from '@/components/layout/Header/expertise/ExpertiseSubmenu'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import { formatNumber } from '@/lib/formatNumber'

import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type ExpertiseData = {
    title: string
    description: string
    subtitle: string
    items: { title: string; href: string; description: string }[]
}

const OurExpertise: FC = () => {
    const { t } = useTranslation()

    const { description, items, subtitle, title } = t('our-expertise', { returnObjects: true }) as ExpertiseData

    return (
        <SectionWrapper>
            <Container>
                <TitleWithDescription
                    classes={{ wrapper: 'mb-8 xl:mb-16' }}
                    title={title}
                    description={description}
                    subtitle={subtitle}
                />
                <div>
                    {expertise.map(({ description, href, title }, i) => (
                        <div className="rounded-8 border border-gray-300 p-5.5 shadow-button" key={href}>
                            <Paragraph variant="subt">{formatNumber(i + 1, { minimumIntegerDigits: 2 })}</Paragraph>
                            <Heading variant="h5">{title}</Heading>
                            <Paragraph variant="p2">{description}</Paragraph>
                        </div>
                    ))}
                </div>
            </Container>
        </SectionWrapper>
    )
}

export default OurExpertise
