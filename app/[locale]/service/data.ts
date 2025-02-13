import { ServiceBlocksConfig, ServiceData } from '@/components/pages/service/serviceBlocksMapper/ServiceBlocksMapper'

export const servicesEn: ServiceData[] = [
    {
        service: 'ai-development',
        config: [
            {
                block: 'firstScreen',
                props: {
                    image: '/images/services/ml/first-screen.png',
                    title: 'ML Engineering / Computer Vision',
                    stats: [
                        { title: '5+', description: 'project on AI / ML completed, explore' },
                        { title: '4,9 / 5', description: 'stars on Clutch' },
                    ],
                },
            },
            {
                block: 'serviceInfo',
                props: {
                    title: 'Ftech-IT ML Engineering service offer',
                    subtitle: 'ML Engineering service',
                    description:
                        'Despite the fact that the boom in these fields occurred relatively recently, the FTECH-IT team already has significant experience in machine learning and computer vision development. We help our clients leverage the power of artificial intelligence for data analysis, process automation, and product quality improvement',
                    cards: [
                        {
                            title: 'Machine Learning Model Development',
                            description:
                                "We develop and implement custom machine learning models using both publicly available datasets and our clients' personalized datasets. Additionally, we have extensive experience in customizing OpenAI's GPT models to solve specific business challenges",
                        },
                        {
                            title: 'Computer vision',
                            description:
                                'We offer computer vision solutions that automate image and video analysis. Using advanced technologies, we specialize in object recognition, scene analysis, and other tasks related to processing visual information',
                        },
                        {
                            title: 'AI Solution Integration',
                            description:
                                'FTECH-IT will help you integrate AI-based solutions into your existing applications. These AI solutions will significantly reduce the costs of routine tasks and boost your software overall productivity',
                        },
                    ],
                    hasCTASection: true,
                },
            },
        ],
    },
]

export const allServices: Record<string, { config: ServiceBlocksConfig }[]> = {
    en: servicesEn,
}
