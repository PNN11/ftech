'use client'
import Tab from '@/components/ui/Tab'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import TabsWrapper from '@/components/ui/wrappers/TabsWrapper'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import React, { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import CaseCard from '../../home/ourCases/CaseCard'
import { allCases } from '@/app/[locale]/cases/data'
import { expertise } from '@/components/layout/Header/expertise/ExpertiseSubmenu'
import { useRouter, useSearchParams } from 'next/navigation'

const categories = [{ title: 'cases:cases-list.all', category: 'all' }].concat(
    expertise.map(({ title, href }) => ({ title, category: href.replace('/', '') }))
)

const CasesList: FC = () => {
    const { t, i18n } = useTranslation()
    const searchParams = useSearchParams()
    const router = useRouter()
    const [activeCategory, setActiveCategory] = useState(categories[0].category)

    const { description, subtitle, title } = t('cases-list', { returnObjects: true }) as {
        title: string
        description: string
        subtitle: string
    }

    const _cases =
        activeCategory === 'all'
            ? allCases[i18n.language]
            : allCases[i18n.language].filter(item => item.card.category === activeCategory)

    useEffect(() => {
        const category = searchParams.get('category')
        if (category) {
            setActiveCategory(category)
            router.replace('/cases')
        }
    }, [searchParams, router])

    return (
        <SectionWrapper>
            <Container>
                <TitleWithDescription
                    classes={{ wrapper: 'mb-7' }}
                    title={title}
                    subtitle={subtitle}
                    description={description}
                />
                <TabsWrapper className="mb-2.5 lg:mb-6">
                    {categories.map(({ category, title }, i) => (
                        <Tab
                            onClick={() => setActiveCategory(category)}
                            isActive={category === activeCategory}
                            key={`${category}${i}`}
                        >
                            {t(title)}
                        </Tab>
                    ))}
                </TabsWrapper>
                <div className="space-y-2">
                    {_cases.map(item => (
                        <CaseCard key={item.card.title} {...item.card} variant="casesPage" />
                    ))}
                </div>
            </Container>
        </SectionWrapper>
    )
}

export default CasesList
