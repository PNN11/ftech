'use client'
import Heading from '@/components/ui/typography/heading'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import CaseCard from '@/components/pages/home/ourCases/CaseCard'
import { Case } from '@/types/cases'

type NextCaseSectionProps = {
    caseInfo: Case
}

const NextCaseSection: FC<NextCaseSectionProps> = ({ caseInfo }) => {
    const { t } = useTranslation()

    return (
        <SectionWrapper>
            <Heading className="mb-12.5" variant="h2">
                {t('case:first-screen.next_case', { title: '' })}
            </Heading>
            <CaseCard variant="casesPage" {...caseInfo} />
        </SectionWrapper>
    )
}

export default NextCaseSection
