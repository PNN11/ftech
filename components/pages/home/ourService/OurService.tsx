'use client'
import ArrowCircleRightDown from '@/components/svg/ArrowCircleRightDown'
import Tab from '@/components/ui/Tab'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import TabsWrapper from '@/components/ui/wrappers/TabsWrapper'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import { formatNumber } from '@/lib/formatNumber'
import React, { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

const OurService: FC = () => {
    const { t } = useTranslation()

    const services = t('our-service.items', { returnObjects: true }) as {
        category: string
        services: { title: string; href: string }[]
    }[]

    const [activeCategory, setActiveCategory] = useState(0)

    return (
        <SectionWrapper>
            <Container>
                <TitleWithDescription
                    classes={{ wrapper: 'mb-7' }}
                    title={t('our-service.title')}
                    subtitle={t('our-service.subtitle')}
                />
                <TabsWrapper className="mb-8">
                    {services.map(({ category }, i) => (
                        <Tab
                            onClick={() => setActiveCategory(i)}
                            isActive={i === activeCategory}
                            key={`${category}${i}`}
                        >
                            {category}
                        </Tab>
                    ))}
                </TabsWrapper>
                <ul className="grid grid-cols-2 lg:grid-cols-4">
                    {services[activeCategory].services.map(({ title, href }, i) => (
                        <li key={`${title}${i}`}>
                            <div className="border-b border-r border-dashed border-[#C2C2C2] px-4.5 py-6 shadow-button lg:p-6 xl:p-8">
                                <ArrowCircleRightDown className="mb-12.5 text-gray-900 lg:mb-11 xl:mb-7" />
                                <Paragraph className="mb-2" variant="subt">
                                    {formatNumber(i + 1, { minimumIntegerDigits: 2 })}
                                </Paragraph>
                                <Heading variant="h5">{title}</Heading>
                            </div>
                        </li>
                    ))}
                </ul>
            </Container>
        </SectionWrapper>
    )
}

export default OurService
