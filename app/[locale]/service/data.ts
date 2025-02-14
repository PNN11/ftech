import { ServiceBlocksConfig, ServiceData } from '@/components/pages/service/serviceBlocksMapper/ServiceBlocksMapper'

export const servicesEn: ServiceData[] = [
    {
        service: 'ai-development',
        contactUsTitle: 'ML Development with FTECH-IT',
        config: [
            {
                block: 'firstScreen',
                props: {
                    image: '/images/services/ml/first-screen.png',
                    title: 'ML Engineering / Computer Vision',
                    stats: [
                        { title: '10+', description: 'projects on AI / ML completed, explore' },
                        { title: '4,8 / 5', description: 'stars on Clutch' },
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
            {
                block: 'serviceTechnologies',
                props: {
                    cards: [
                        { title: 'Python', image: '/images/services/ml/tech1.png' },
                        { title: 'Pytorch', image: '/images/services/ml/tech2.png' },
                        { title: 'Hugging Face', image: '/images/services/ml/tech3.png' },
                        { title: 'OpenCV', image: '/images/services/ml/tech4.png' },
                        { title: 'Chat GPT', image: '/images/services/ml/tech5.png' },
                    ],
                },
            },
            { block: 'workflow', props: {} },
            { block: 'cta', props: {} },
            { block: 'cases', props: {} },
        ],
    },
    {
        service: 'design',
        contactUsTitle: 'Design development with FTECH-IT',
        config: [
            {
                block: 'firstScreen',
                props: {
                    title: 'UI/UX Design ',
                    image: '/images/services/design/first-screen.png',
                    stats: [
                        { title: '25+', description: 'projects with our custom UI/UX completed, explore' },
                        { title: '4,8 / 5', description: 'stars on Clutch' },
                    ],
                },
            },
            {
                block: 'serviceInfo',
                props: {
                    subtitle: 'UI/UX Design service',
                    title: 'Ftech-IT UI/UX Design offer',
                    description:
                        'The FTECH-IT team creates intuitive and attractive user interfaces that enhance the experience of interacting with your product. We develop UI/UX design that helps attract and retain users, making your application easy and enjoyable to use',
                    cards: [
                        {
                            title: 'User Interface Development',
                            description:
                                'We create modern and user-friendly interfaces that meet your requirements and user expectations. Our designers develop interfaces that enhance interaction with your product and increase its appeal',
                        },
                        {
                            title: 'User Experience Analysis and Customer Development',
                            description:
                                'We will conduct testing and user interviews. Our specialists use usability testing methods and user data analysis to create the most user-friendly application possible',
                        },
                        {
                            title: 'Prototyping and Testing',
                            description:
                                'We develop user interface prototypes and conduct testing with real users. This allows us to ensure that the designed interface meets user needs and provides an optimal interaction experience',
                        },
                        {
                            title: 'Mobile App Design',
                            description:
                                'Using best practices, the FTECH-IT team will develop a modern mobile app design tailored to your needs. We apply HIG and Material Design principles for iOS and Android applications',
                        },
                        {
                            title: 'Website Design and Low-code Development',
                            description:
                                'We will create a turnkey design for corporate projects, including presentations and websites. We also offer development using low-code solutions like Webflow',
                        },
                    ],
                    hasCTASection: true,
                },
            },
            {
                block: 'serviceTechnologies',
                props: {
                    cards: [
                        { title: 'Figma', image: '/images/services/design/tech1.png' },
                        { title: 'Adobe', image: '/images/services/design/tech2.png' },
                        { title: 'Framer', image: '/images/services/design/tech3.png' },
                        { title: 'webflow', image: '/images/services/design/tech4.png' },
                        { title: 'Miro', image: '/images/services/design/tech5.png' },
                        { title: 'Sketch', image: '/images/services/design/tech6.png' },
                        { title: 'ProtoPie', image: '/images/services/design/tech7.png' },
                    ],
                },
            },
            { block: 'workflow', props: {} },
            { block: 'cta', props: {} },
            { block: 'cases', props: {} },
        ],
    },
    { service: 'quality-assurance', contactUsTitle: 'Project testing with FTECH-IT', config: [] },
]

export const allServices: Record<string, ServiceData[]> = {
    en: servicesEn,
}
