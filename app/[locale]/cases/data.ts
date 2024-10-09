import { CaseData } from '@/components/pages/case/caseBlocksMapper/CaseBlockMapper'
import { Case } from '@/types/cases'

const casesEn: CaseData[] = [
    {
        card: {
            title: "Telemedicine portal for a clinic specializing in men's health",
            description: "Web service of clinic for diagnosing men's health issues remotely",
            tags: ['MSSQL', 'Asp.net Core', 'React', 'Xamarin'],
            href: 'mans-health-web-portal',
            image: '/images/cases/mans-health-portal/card.png',
            bgImage: '#0B808A',
            mockup: 'laptop',
            tone: 'light',
            category: 'healthcare',
        },
        config: [
            {
                block: 'section1',
                props: {
                    description: "Web service of clinic for diagnosing men's health issues remotely",
                    shortTitle: 'Telemedicine portal',
                    title: "Telemedicine portal for a clinic specializing in men's health",
                    image: '',
                },
            },
        ],
    },
]

export const allCases: Record<string, CaseData[]> = {
    en: casesEn,
}
