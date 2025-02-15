import { CaseData } from '@/components/pages/case/caseBlocksMapper/CaseBlockMapper'
import { Case } from '@/types/cases'

const casesEn: CaseData[] = [
    {
        card: {
            title: 'Remote health assessment service ',
            description: 'Telemedicine portal for a clinic specializing in men’s health',
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
                    description: 'Telemedicine portal for a clinic specializing in men’s health',
                    shortTitle: 'Telemedicine portal',
                    title: 'Remote health assessment service',
                    image: '/images/cases/mans-health-portal/first-screen.png',
                },
            },
            {
                block: 'section2',
                props: {
                    listItems: {
                        location: ['North America'],
                        client: ['Well-known American clinic'],
                        industry: ['Medicine'],
                        projectType: ['Web portal', 'Mobile app'],
                        projectServices: [
                            'Back-end development',
                            'UI/UX design',
                            'Business analysis',
                            'DevOps',
                            'Service Integration',
                            'Front-end development',
                            'Mobile development',
                            'AQA/QA ',
                        ],
                    },
                    descriptionItems: {
                        problem:
                            'A major clinic specializing in men’s health contacted us with the task of creating a telemedicine portal. The main challenge for the client was that many men are reluctant to visit a doctor in person for sensitive health issues related to men s health. It was important to consider the desire of most patients to maintain confidentiality and receive consultations remotely, without visiting the clinic',
                        solution:
                            'Using the .Net platform as the primary backend technology, we developed an API for the clinic’s web portal and mobile application. The lab test data is received through a third-party integrated API and is promptly delivered to the attending physician. Patients can receive necessary consultations via video calls with doctors, as well as order required medications directly through the website. We also implemented integration with a payment system, PDF prescription generation, and a messaging feature. The front-end of the web portal was built using React. In addition to the web portal, we developed a mobile application using Xamarin with limited functionality. The app allows users to view test results, the latest prescriptions from their attending physician, and receive notifications about the delivery of ordered medications',
                    },
                    tags: ['MSSQL', 'Asp.net Core', 'React', 'Xamarin'],
                    contact: {
                        image: '/images/cases/mans-health-portal/contact.png',
                        title: 'Do you have a project idea? ',
                        description:
                            'We are ready to create a high-quality turnkey healthcare project for you. Contact us, and we will start the development ',
                    },
                },
            },
            {
                block: 'section12',
                props: { image: '/images/cases/mans-health-portal/image1.png', capture: 'Home screen' },
            },
            {
                block: 'section10',
                props: {
                    imageProps: { src: '/images/cases/mans-health-portal/hospital.png', width: 329, height: 247 },
                    imageTitle: 'Project specific features ',
                    imageDescription:
                        'A key feature of the project is the ability to provide detailed remote health diagnostics for patients. Clients should be able to take tests at the nearest partner laboratory, with results automatically added to the portal database. After that, the patient will complete an online survey regarding their symptoms and condition. An algorithm analyzes the results and provides a preliminary diagnosis, significantly saving the physician’s time and reducing the likelihood of misdiagnosis. After this, the client will receive a consultation via video call and can obtain an electronic prescription for medications, with the option to order them for home delivery',
                },
            },
            {
                block: 'section9',
                props: {
                    variant: '1',
                    title: 'Project development highlights ',
                    subtitle: 'Project highlights',
                    cards: [
                        {
                            title: 'Full cycle development ',
                            description:
                                'This project was fully implemented by our company’s specialists, from the ideation stage to production launch and subsequent support',
                        },
                        {
                            title: 'Third party services integration  ',
                            description:
                                'We implemented integrations with partner laboratories and pharmacies to achieve a complete interaction cycle with the patient—from taking tests to consultations with the treating physician and issuing prescriptions for medications—all in a remote format without the need to visit the clinic ',
                        },
                        {
                            title: 'Unprecedented implementation speed',
                            description:
                                'The implementation of this project, from the ideation stage to commercial use, took about seven months, which is an excellent result for a system of this level ',
                        },
                    ],
                },
            },
            {
                block: 'section12',
                props: { image: '/images/cases/mans-health-portal/image2.png' },
            },
            {
                block: 'section4',
                props: {
                    title: 'Development team ',
                    description: 'Bigger than typical team of outstanding developers code all project pretty fast',
                    cards: [
                        {
                            title: '8',
                            description: 'Engineers QA / AQA included',
                            actionButton: { text: 'QA service', href: '/service/quality-assurance' },
                        },
                        { title: 'High team lvl', description: 'only senior / middle level and higher' },
                        {
                            title: 'M-team',
                            description: 'project team consists of 8 members',
                            actionButton: { text: 'Outsource ', href: '/service/outsourcing' },
                        },
                    ],
                },
            },
            {
                block: 'section12',
                props: { image: '/images/cases/mans-health-portal/image3.png', capture: 'Booking for a consultation' },
            },
            {
                block: 'section9',
                props: {
                    variant: '2',
                    title: 'Stages of remote interaction between the patient and the clinic',
                    subtitle: 'Our workflow medtech projects development',
                    cards: [
                        {
                            title: 'Questionnaire',
                            description: 'Complete a questionnaire by answering questions about symptoms',
                        },
                        {
                            title: 'Taking tests ',
                            description: 'Take laboratory tests at one of the authorized laboratories',
                        },
                        {
                            title: 'Consultation ',
                            description: 'Consult with your treating physician via video call  ',
                        },
                        {
                            title: 'Treatment plan ',
                            description: 'Receive prescriptions for medications and a treatment plan',
                        },
                    ],
                },
            },
            {
                block: 'section12',
                props: { image: '/images/cases/mans-health-portal/image4.png', capture: 'Survey testing' },
            },
            { block: 'section8', props: {} },
            {
                block: 'section12',
                props: {
                    image: '/images/cases/mans-health-portal/image5.png',
                    capture: 'Searching clinics on the map nearby',
                },
            },
            {
                block: 'section11',
                props: {
                    title: 'Remote health assessment service ',
                    description:
                        "Thus, the service allows you to delicately explore men's health issues remotely and with high efficiency",
                    services: [
                        { title: 'Back-end development', href: 'backend-development' },
                        { title: 'UI/UX design', href: 'design' },
                        { title: 'Business analysis', href: 'business-analysis' },
                        { title: 'DevOps', href: 'devops' },
                        { title: 'Service Integration', href: 'third-party-services' },
                        { title: 'Front-end development', href: 'frontend-development' },
                        { title: 'Mobile development', href: 'mobile-development' },
                        { title: 'AQA/QA ', href: 'quality-assurance' },
                    ],
                },
            },
        ],
    },
    {
        card: {
            title: 'Electricity tariff aggregator',
            description:
                'Platform for automated generation of energy tariff change recommendations for business clients ',
            tags: ['C#', '.NET 6', 'PostgreSQL', 'FCM', 'Azure B2C', 'Stripe', 'Coinmarket', 'Terraform', 'Flutter'],
            href: 'tariff-adviser-app',
            image: '/images/cases/tariff-adviser-app/card.png',
            category: 'energetics',
            bgImage: '#FE4D03',
            mockup: 'mobile',
            tone: 'light',
        },
        config: [
            {
                block: 'section1',
                props: {
                    shortTitle: 'Tariff adviser',
                    title: 'Electricity tariff aggregator',
                    description:
                        'Platform for automated generation of energy tariff change recommendations for business clients ',
                    image: '/images/cases/tariff-adviser-app/first-screen.png',
                },
            },
            {
                block: 'section2',
                props: {
                    listItems: {
                        location: 'Europe',
                        industry: 'Manufacturing and energy ',
                        projectType: 'Mobile app',
                        platform: 'iOS, Android',
                        team: 'M-size ',
                        release: '2024',
                        projectServices: [
                            'Mobile development',
                            'Back-end development',
                            'DevOps',
                            'Business analysis',
                            'Service integration',
                            'UI/UX design',
                        ],
                    },
                    descriptionItems: {
                        problem:
                            'A European aggregator company came with a request to create a platform where users can receive electricity tariff change suggestions based on their payment data. The app should be available for iOS and Android. An admin functionality for user management and a chat for support requests should be implemented',
                        solution:
                            'Our team successfully completed all the tasks assigned to us. In the first phase of the application development, we implemented the client and administrator APIs, developed the mobile application, set up CI/CD processes, and deployed 3 environments using the infrastructure as code approach',
                    },
                    tags: [
                        'C#',
                        '.Net 6',
                        'ASP.Net Core',
                        'Entity Framework Core',
                        'PostgreSQL',
                        'APNS',
                        'FCM',
                        'PostgreSQL',
                        'SendGrid',
                        'Azure storage',
                        'Azure sbus',
                        'Azure functions',
                        'Azure B2C',
                        'Azure Key Vault',
                        'Terraform',
                        'Flutter',
                    ],
                    contact: {
                        image: '/images/cases/tariff-adviser-app/contact.png',
                        title: 'Do you have any project ideas? ',
                        description:
                            'Do you have an energy-related project and need high-quality implementation? Contact us, and we will deliver a project of any complexity for you ',
                    },
                },
            },
            {
                block: 'section12',
                props: { image: '/images/cases/tariff-adviser-app/image1.png', size: '296' },
            },
            {
                block: 'section9',
                props: {
                    variant: '2',
                    title: 'Highlights of B2B platform development ',
                    subtitle: 'Project highlights',
                    cards: [
                        {
                            title: 'B2B platform ',
                            description:
                                'A B2B platform was developed for analyzing current electricity payment data and generating tariff change suggestions if a more favorable option is found ',
                        },
                        {
                            title: 'User verification ',
                            description:
                                'A user verification and identity confirmation service was developed for the platform ',
                        },
                        {
                            title: 'Mobile application ',
                            description: 'A mobile application for iOS and Android was developed',
                        },
                        {
                            title: 'In-app notifications  ',
                            description: 'Notification services (email, push) were implemented ',
                        },
                    ],
                },
            },
            {
                block: 'section7',
                props: {
                    title: 'Mobile application for iOS and Android',
                    description:
                        'Unlike most similar solutions, we developed a bright and memorable design for our client, which stands out against the gray and formal apps of competitors. This approach increased the app’s recognition and enhanced the user experience',
                },
            },
            {
                block: 'section12',
                props: {
                    image: '/images/cases/tariff-adviser-app/image2.png',
                    size: '416',
                    capture: 'UI UX of the app',
                },
            },
            {
                block: 'section4',
                props: {
                    title: 'Mostly back-enders on the team',
                    description:
                        'The main scope of work on this project was allocated by the customer to us for the development of the back-end. Therefore, in a team of size M, most developers were involved in the back-end',
                    cards: [
                        {
                            title: 'Azure',
                            description: 'Strong back-end and cloud support on project ',
                            actionButton: { text: 'DevOps', href: '/service/devops' },
                        },
                        { title: 'High team lvl', description: 'only senior / middle level and higher' },
                        {
                            title: 'M-team',
                            description: 'size of team on this project includes 5+ members',
                            actionButton: { text: 'Extend team', href: '/service/client-team-extension' },
                        },
                    ],
                },
            },
            { block: 'section8', props: {} },
            {
                block: 'section12',
                props: {
                    image: '/images/cases/tariff-adviser-app/image3.png',
                    size: '600',
                },
            },
            {
                block: 'section11',
                props: {
                    title: 'Electricity tariff aggregator',
                    description:
                        'Platform for automated generation of energy tariff change recommendations for business clients ',
                    services: [
                        { title: 'Mobile development', href: 'mobile-development' },
                        { title: 'Back-end development', href: 'backend-development' },
                        { title: 'DevOps', href: 'devops' },
                        { title: 'Business analysis', href: 'business-analysis' },
                        { title: 'Service integration', href: 'third-party-services' },
                        { title: 'UI/UX design', href: 'design' },
                    ],
                },
            },
        ],
    },
    {
        card: {
            title: 'Online construction store ',
            description: 'Specialized platform for selling decorative moldings and facades ',
            tags: ['PHP', 'WordPress', 'WooCommerce', 'JavaScript', 'jQuery', 'React.js'],
            href: 'moldings-online-shop',
            image: '/images/cases/moldings-online-shop/card.png',
            category: 'e-commerce',
            bgImage: '#F5F5F5',
            mockup: 'laptop',
            tone: 'dark',
        },
        config: [
            {
                block: 'section1',
                props: {
                    title: 'Online construction store ',
                    description: 'Specialized platform for selling decorative moldings and facades ',
                    shortTitle: 'E-commerce platform',
                    image: '/images/cases/moldings-online-shop/first-screen.png',
                },
            },
            {
                block: 'section2',
                props: {
                    listItems: {
                        location: 'North America',
                        industry: 'E-commerce',
                        projectType: 'Online store ',
                        projectServices: ['Front-end development', 'UI/UX design'],
                    },
                    descriptionItems: {
                        problem:
                            'The goal of this project was to develop an efficient e-commerce platform for a company that is a wholesale supplier in the decorative molding, facades, and picture frames manufacturing industry. The company offers a wide range of styles and finishes, so the platform must support the addition of hundreds of new styles each year, ensuring high performance and ease of use ',
                        solution:
                            'We developed a high-performance and scalable platform that integrates with existing product management systems. Our team created a user-friendly interface for managing the catalog, making it easy to update and add new styles. Additionally, we implemented a powerful search and filtering system, allowing customers to quickly find the products they need ',
                    },
                    tags: ['PHP', 'WordPress', 'WooCommerce', 'JavaScript', 'jQuery', 'React.js'],
                    contact: {
                        title: 'Do you need an online store? ',
                        description:
                            'We are ready to create an e-commerce turnkey online project for you in the shortest time possible with high quality. Contact us, and we will start the development ',
                        image: '/images/cases/moldings-online-shop/contact.png',
                    },
                },
            },
            { block: 'section12', props: { image: '/images/cases/moldings-online-shop/image1.png' } },
            {
                block: 'section9',
                props: {
                    variant: '2',
                    subtitle: 'Project highlights',
                    title: 'Highlights of developing an online store on wordpress',
                    cards: [
                        {
                            title: 'Modern approach ',
                            description:
                                'We developed a modern platform for one of the largest wholesale suppliers in the decorative molding and facade industry',
                        },
                        {
                            title: 'Integrations and Management ',
                            description:
                                'We implemented integration with product management systems, enabling support for over 3,000 styles and the addition of hundreds of new ones each year ',
                        },
                    ],
                },
            },
            {
                block: 'section6',
                props: {
                    cards: [
                        { title: 'PHP', image: '/images/cases/moldings-online-shop/tech1.png' },
                        { title: 'WordPress', image: '/images/cases/moldings-online-shop/tech2.png' },
                        { title: 'WooCommerce', image: '/images/cases/moldings-online-shop/tech3.png' },
                        { title: 'JavaScript', image: '/images/cases/moldings-online-shop/tech4.png' },
                        { title: 'jQuery', image: '/images/cases/moldings-online-shop/tech5.png' },
                        { title: 'React.js', image: '/images/cases/moldings-online-shop/tech6.png' },
                    ],
                },
            },
            { block: 'section12', props: { image: '/images/cases/moldings-online-shop/image2.png' } },
            { block: 'section8', props: {} },
            { block: 'section12', props: { image: '/images/cases/moldings-online-shop/image3.png' } },
            {
                block: 'section11',
                props: {
                    title: 'Online construction store ',
                    description:
                        'The solution allows you to buy moldings from a huge number of options and pay for the shopping cart online',
                    services: [
                        { title: 'Front-end development', href: 'frontend-development' },
                        { title: 'UI/UX Design', href: 'design' },
                    ],
                },
            },
        ],
    },
    {
        card: {
            title: 'Assistant system for traders ',
            description: 'Web platform for analyzing cryptocurrency market data, transactions, and securities ',
            tags: [
                'C#',
                '.Net 6',
                'ASP.Net Core',
                'Entity Framework Core',
                'QuickFIX',
                'TradingView SDK',
                'Angular',
                'Flutter',
                'Kafka',
            ],
            href: 'trading-platform',
            image: '/images/cases/trading-platform/card.png',
            category: 'fintech',
            bgImage: '#161A25',
            mockup: 'laptop',
            tone: 'light',
        },
        config: [],
    },
]

export const allCases: Record<string, CaseData[]> = {
    en: casesEn,
}
