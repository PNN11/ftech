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
        config: [
            {
                block: 'section1',
                props: {
                    shortTitle: 'Web trading platform',
                    title: 'Assistant system for traders ',
                    description: 'Web platform for analyzing cryptocurrency market data, transactions, and securities ',
                    image: '/images/cases/trading-platform/first-screen.png',
                },
            },
            {
                block: 'section2',
                props: {
                    listItems: {
                        location: 'Europe',
                        client: 'Investment company ',
                        industry: 'Fintech',
                        projectType: 'Trading platform ',
                        team: 'M-size ',
                        projectServices: [
                            'Back-end development',
                            'Business analysis',
                            'DevOps',
                            'Service Integration',
                            'AQA/QA',
                        ],
                    },
                    descriptionItems: {
                        problem:
                            'The client is a fintech company from Europe, engaged in trading and investments, that commissioned the development of a new project for evaluating and supporting traders on their platforms. The system must collect and store historical data on supported markets. All data should be stored using minimal memory while ensuring an acceptable read speed',
                        solution:
                            'The first phase of the project has been successfully completed. To achieve this, our team developed and implemented algorithms that significantly reduce memory usage, both for RAM and storage. Currently, the system supports three types of tradable products (crypto, forex, options) and uses data from eight different providers. The client highly appreciated the results achieved by our team, and the project roadmap is planned until 2026 ',
                    },
                    tags: [
                        'C#',
                        '.Net 6',
                        'ASP.Net Core',
                        'Entity Framework Core',
                        'PostgreSQL',
                        'Apache Parquet',
                        'PostgreSQL',
                        'SignalR',
                        'QuickFIX',
                        'Kafka',
                        'Redis',
                        'Angular',
                        'TradingView SDK',
                    ],
                    contact: {
                        title: 'Do you need a fintech solution? ',
                        description:
                            'We will develop a customized product tailored to the specifics of your capital and investment management ',
                        image: '/images/cases/trading-platform/contact.png',
                    },
                },
            },
            {
                block: 'section12',
                props: { image: '/images/cases/trading-platform/image1.png', capture: 'Home screen ', size: '600' },
            },
            {
                block: 'section9',
                props: {
                    variant: '1',
                    title: 'Highlights of the assistant system development',
                    subtitle: 'Project highlights',
                    description:
                        'In this project, it was necessary to ensure maximum reliability and fault tolerance while using minimal memory. Additionally, all transactions must be securely protected',
                    cards: [
                        {
                            title: 'Level of integration ',
                            description:
                                'We created a service for collecting, storing, and analyzing data on cryptocurrency markets, foreign exchange transactions, and securities ',
                        },
                        {
                            title: 'Data management ',
                            description:
                                'The collection and storage of large volumes of market data was implemented, with the ability to read it relatively quickly while using minimal memory ',
                        },
                        {
                            title: 'Development roadmap until 2026 ',
                            description:
                                'The highest evaluation of the work done by the client is their desire to continue developing their products with us. The project roadmap is planned for the next one and a half years',
                        },
                    ],
                },
            },
            { block: 'section12', props: { image: '/images/cases/trading-platform/image2.png' } },
            {
                block: 'section4',
                props: {
                    title: 'Development team ',
                    description:
                        'The development team has back-end developers and a business analyst. Also QA for testing the project and handling critical project parts. Fault tolerance and decision-making speed are important for such a project like this one',
                    cards: [
                        {
                            title: 'M-size',
                            description: 'project team consists of 6 people ',
                            actionButton: { text: 'Extend team', href: '/service/client-team-extension' },
                            image: '/images/cases/trading-platform/team1.png',
                        },
                        {
                            title: 'High team lvl',
                            description: 'only senior / middle level and higher',
                            image: '/images/cases/trading-platform/team2.png',
                        },
                        {
                            title: 'Back-end ',
                            description: 'Creating an efficient and fault-tolerant back-end for the platform',
                            actionButton: { text: 'Back-end', href: '/service/backend-development' },
                        },
                    ],
                },
            },
            { block: 'section8', props: {} },
            { block: 'section12', props: { image: '/images/cases/trading-platform/image3.png' } },
            {
                block: 'section6',
                props: {
                    cards: [
                        { title: 'ASP.Net Core', image: '/images/cases/trading-platform/tech1.png' },
                        { title: 'PostgreSQL', image: '/images/cases/trading-platform/tech2.png' },
                        { title: 'TradingView SDK', image: '/images/cases/trading-platform/tech3.png' },
                        { title: 'Redis', image: '/images/cases/trading-platform/tech4.png' },
                        { title: 'Angular', image: '/images/cases/trading-platform/tech5.png' },
                        { title: 'SignalR', image: '/images/cases/trading-platform/tech6.png' },
                    ],
                },
            },
            {
                block: 'section11',
                props: {
                    title: 'Assistant system for traders ',
                    description: 'Web platform for analyzing cryptocurrency market data, transactions, and securities ',
                    services: [
                        { title: 'Back-end development', href: 'backend-development' },
                        { title: 'Business analysis', href: 'business-analysis' },
                        { title: 'Service Integration ', href: 'third-party-services' },
                        { title: 'DevOps', href: 'devops' },
                        { title: 'AQA, QA', href: 'quality-assurance' },
                        { title: 'UI/UX Design', href: 'design' },
                    ],
                },
            },
        ],
    },
    {
        card: {
            title: 'AI education platform    ',
            description: 'Next-generation education platform for students using AI',
            tags: [
                'C#',
                '.Net 6',
                'ASP.Net Core',
                'AWS Cloud Computing Services',
                'Stripe',
                'Flutter',
                'OpenAI',
                'PyTorch',
                'nginx',
                'Redux',
            ],
            href: 'ai-education-platform',
            image: '/images/cases/ai-education-platform/card.png',
            category: 'edtech',
            bgImage: '#2B2B2B',
            mockup: 'mobile',
            tone: 'light',
        },
        config: [
            {
                block: 'section1',
                props: {
                    shortTitle: 'Edtech platfrom',
                    title: 'AI education platform',
                    description: 'Next-generation education platform for students using AI',
                    image: '/images/cases/ai-education-platform/first-screen.png',
                },
            },
            {
                block: 'section2',
                props: {
                    listItems: {
                        location: 'Europe',
                        client: 'Private entrepreneur ',
                        industry: 'Education ',
                        projectType: 'Web platform',
                        team: 'M-size ',
                        projectServices: [
                            'Back-end development',
                            'Front-end development',
                            'Business analysis',
                            'DevOPS',
                            'Service Integration',
                            'AQA / QA',
                            'UI/UX design',
                        ],
                    },
                    descriptionItems: {
                        problem:
                            'The client approached us with the task of developing a platform to help students prepare for exams. A key feature of this platform will be an AI assistant that creates study plans, assesses students  knowledge through texts, and generates summaries of uploaded materials, highlighting the main points',
                        solution:
                            'Using .NET Core and React as the main technologies, we developed a comprehensive system that meets all the client s turnkey requirements. Students can upload all necessary literature and specify their exam date, after which they receive a step-by-step study plan for each day, various tests to assess their knowledge, summaries of materials, and much more. Depending on the chosen plan, students can use either a Chat-GPT-based assistant or an internally developed model. Additionally, we implemented integration with a payment system, the ability to leave notes in study materials, and the option to take lecture notes, among other features',
                    },
                    tags: [
                        'C#',
                        '.Net 6',
                        'ASP.Net Core',
                        'Azure Services',
                        'AWS Cloud Computing Services',
                        'MS SQL Server',
                        'Stripe',
                        'SMTP',
                        'Python',
                        'Azure',
                        'OpenAI',
                        'PyTorch',
                        'FastAPI',
                        'scikit-learn',
                        'nginx',
                        'React',
                        'TypeScript',
                        'Redux',
                        'Redux-Saga',
                    ],
                    contact: {
                        title: 'Need a modern AI learning platform? ',
                        description:
                            'We will develop a platform with the integration of neural networks for an optimal learning experience ',
                        image: '/images/cases/ai-education-platform/contact.png',
                    },
                },
            },
            {
                block: 'section12',
                props: { image: '/images/cases/ai-education-platform/image1.png', size: '296' },
            },
            {
                block: 'section9',
                props: {
                    variant: '3',
                    subtitle: 'Project highlights',
                    title: 'Key features of the AI platform for students ',
                    cards: [
                        {
                            title: 'AI integration',
                            description: 'Created one of the first educational platforms using AI',
                        },
                        {
                            title: 'Proprietary ML',
                            description: 'We developed a proprietary language model, training it on our own database ',
                        },
                        {
                            title: 'High-performance infrastructure ',
                            description:
                                'We provided the infrastructure and the necessary level of customization to unlock the potential of the latest models based on OpenAI GPT ',
                        },
                    ],
                },
            },
            { block: 'section12', props: { image: '/images/cases/ai-education-platform/image2.png', size: '416' } },
            {
                block: 'section6',
                props: {
                    cards: [
                        { title: 'ASP.Net Core', image: '/images/cases/ai-education-platform/tech1.png' },
                        { title: 'Azure services', image: '/images/cases/ai-education-platform/tech2.png' },
                        { title: 'React.js', image: '/images/cases/ai-education-platform/tech3.png' },
                        { title: 'OpenAI', image: '/images/cases/ai-education-platform/tech4.png' },
                        { title: 'PostgreSQL', image: '/images/cases/ai-education-platform/tech5.png' },
                        { title: 'Redis', image: '/images/cases/ai-education-platform/tech6.png' },
                        { title: 'Python', image: '/images/cases/ai-education-platform/tech7.png' },
                        { title: '.Net 6', image: '/images/cases/ai-education-platform/tech8.png' },
                        { title: 'AWS Cloud', image: '/images/cases/ai-education-platform/tech9.png' },
                        { title: 'Stripe', image: '/images/cases/ai-education-platform/tech10.png' },
                        { title: 'TypeScript', image: '/images/cases/ai-education-platform/tech11.png' },
                        { title: 'nginx', image: '/images/cases/ai-education-platform/tech12.png' },
                    ],
                },
            },
            {
                block: 'section4',
                props: {
                    title: 'Development team ',
                    description:
                        'The development of such a project implies close interaction between back-end, front-end and ML developers',
                    cards: [
                        {
                            title: 'M-size',
                            description: 'project team consists of 8 members',
                            actionButton: { text: 'Extend team', href: '/service/client-team-extension' },
                            image: '/images/cases/ai-education-platform/team1.png',
                        },
                        {
                            title: 'High team lvl',
                            description: 'only senior / middle level and higher',
                            image: '/images/cases/ai-education-platform/team2.png',
                        },
                        {
                            title: 'Own ML',
                            description: 'Implementing OpenAI tech in project',
                            actionButton: { text: 'ML service', href: '/service/ai-development' },
                        },
                    ],
                },
            },
            { block: 'section12', props: { image: '/images/cases/ai-education-platform/image3.png', size: '416' } },
            { block: 'section8', props: {} },
            {
                block: 'section12',
                props: {
                    image: '/images/cases/ai-education-platform/image4.png',
                    size: '416',
                    capture: 'UI UX of the app',
                },
            },
            {
                block: 'section11',
                props: {
                    title: 'AI education platform',
                    description: 'Next-generation education platform for students using AI',
                    services: [
                        { title: 'Back-end development', href: 'backend-development' },
                        { title: 'Front-end development', href: 'frontend-development' },
                        { title: 'Business analysis', href: 'business-analysis' },
                        { title: 'DevOPS', href: 'devops' },
                        { title: 'Service Integration', href: 'third-party-services' },
                        { title: 'AQA / QA', href: 'quality-assurance' },
                        { title: 'UI/UX design', href: 'design' },
                    ],
                },
            },
        ],
    },
    {
        card: {
            title: 'Golf club management system ',
            description:
                'Web service that allows remote management of clubs, tracking games, visitors, purchases, consumables, equipment, and machinery',
            tags: ['.Net Core', 'Vue.js', 'ASP.Net Core', 'Redis', 'SMTP', 'RabbitMQ'],
            href: 'golf-club-admin-system',
            image: '/images/cases/golf-club-admin-system/card.png',
            category: 'sport',
            bgImage: '#A7CCE7',
            mockup: 'laptop',
            tone: 'light',
        },
        config: [
            {
                block: 'section1',
                props: {
                    shortTitle: 'Golf Club back office',
                    title: 'Golf club management system ',
                    description:
                        'Web service that allows remote management of clubs, tracking games, visitors, purchases, consumables, equipment, and machinery',
                    image: '/images/cases/golf-club-admin-system/first-screen.png',
                },
            },
            {
                block: 'section2',
                props: {
                    listItems: {
                        location: 'North America',
                        client: 'Network of golf clubs ',
                        industry: 'Sports and entertainment',
                        projectType: 'Web service',
                        team: 'S-size ',
                        projectServices: ['Back-end development', 'Front-end development'],
                    },
                    descriptionItems: {
                        problem:
                            'The main task of this project was refactoring the existing legacy code, as well as providing ongoing support and customization of the system according to the client’s requirements based on technical specifications. The goal of the project is to migrate the application to the latest version of .Net Core and enhance its functionality, including features such as remote booking of golf courses via the web, tracking course availability, ordering food and drinks during the game, and much more. The system allows full management of golf clubs at all levels',
                        solution:
                            'Our work significantly improved the functionality and performance of the system by decomposing the monolith into modules, resulting in more convenient and efficient management of the golf clubs. The end client highly appreciated the outcome, particularly noting the significant increase in system performance ',
                    },
                    tags: ['.Net Core', 'Vue.js', 'ASP.Net Core', 'Redis', 'SMTP', 'RabbitMQ'],
                    contact: {
                        image: '/images/cases/golf-club-admin-system/contact.png',
                        title: 'Have same request? ',
                        description: 'We will create a similar solution for your business. Contact us',
                    },
                },
            },
            { block: 'section12', props: { image: '/images/cases/golf-club-admin-system/image1.png', size: '416' } },
            {
                block: 'section9',
                props: {
                    variant: '2',
                    subtitle: 'Project highlights',
                    title: 'Solved project tasks ',
                    cards: [
                        {
                            title: 'Modernization',
                            description:
                                'We transitioned from outdated technologies to modern ones in the server-side of the system ',
                        },
                        {
                            title: 'Decomposition',
                            description:
                                'The legacy heavyweight monolith was decomposed into a series of independent modules, which allowed for increased system performance and reduced resource usage ',
                        },
                    ],
                },
            },
            { block: 'section12', props: { image: '/images/cases/golf-club-admin-system/image2.png', size: '416' } },
            {
                block: 'section6',
                props: {
                    cards: [
                        { title: 'ASP.Net Core', image: '/images/cases/golf-club-admin-system/tech1.png' },
                        { title: 'Vue.js', image: '/images/cases/golf-club-admin-system/tech2.png' },
                        { title: 'React.js', image: '/images/cases/golf-club-admin-system/tech3.png' },
                        { title: '.Net Core', image: '/images/cases/golf-club-admin-system/tech4.png' },
                        { title: 'Redis', image: '/images/cases/golf-club-admin-system/tech5.png' },
                        { title: 'RabbitMQ', image: '/images/cases/golf-club-admin-system/tech6.png' },
                    ],
                },
            },
            { block: 'section8', props: {} },
            {
                block: 'section11',
                props: {
                    title: 'Golf club management system ',
                    description:
                        'Web service that allows remote management of clubs, tracking games, visitors, purchases, consumables, equipment, and machinery',
                    services: [
                        { title: 'Back-end development', href: 'backend-development' },
                        { title: 'Front-end development', href: 'frontend-development' },
                    ],
                },
            },
        ],
    },
    {
        card: {
            title: 'App for personal training at home  ',
            description: 'Application for training with a professional trainer in real time',
            tags: ['Kotlin', 'Android SDK (32 API)', 'SQLite (Room ORM)', 'Retrofit', 'Firebase', 'MVP'],
            href: 'personal-training-platform',
            image: '/images/cases/personal-training-platform/card.png',
            category: 'sport',
            bgImage: '#6A8170',
            mockup: 'mobile',
            tone: 'light',
        },
        config: [
            {
                block: 'section1',
                props: {
                    shortTitle: 'Personal training app',
                    title: 'App for personal training at home  ',
                    description: 'Application for training with a professional trainer in real time',
                    image: '/images/cases/personal-training-platform/first-screen.png',
                },
            },
            {
                block: 'section2',
                props: {
                    listItems: {
                        location: 'Europe',
                        client: 'Well-known fitness coach ',
                        industry: 'Sports and entertainment ',
                        platform: ['Android', 'iOS'],
                        team: ['S-size '],
                        projectServices: [
                            'Mobile development',
                            'UI/UX design',
                            'Business analysis',
                            'DevOps',
                            'Service Integration',
                        ],
                    },
                    descriptionItems: {
                        problem:
                            'The client, a successful fitness coach, needed an app that would enable him to train clients online, provide personalized nutrition and lifestyle recommendations, and track the progress of his trainees. Additionally, the app needed to help clients achieve their goals, integrate with their personal calendars, and send notifications about their achievements. An important feature was also the ability to track the balance of proteins, fats, and carbohydrates, as well as monitor weight changes and other body parameters ',
                        solution:
                            'Our team successfully developed an app for Android and iOS that meets all the specified requirements. Kotlin was chosen as the primary technology due to its functionality and reliability. One of the significant achievements was the implementation of a real-time streaming feature, supporting simultaneous interaction for up to 20 users with minimal latency. We also integrated a voice chat function during workouts and connected the app with leading calendar applications. The developed app also includes integration with several popular payment systems in Europe ',
                    },
                    tags: ['Kotlin', 'Android SDK (32 API)', 'SQLite (Room ORM)', 'Retrofit', 'Firebase', 'MVP'],
                    contact: {
                        image: '/images/cases/personal-training-platform/contact.png',
                        title: 'Have same idea? ',
                        description:
                            'Do you have similar project ideas? Contact us, and we will discuss the details and development of your application ',
                    },
                },
            },
            {
                block: 'section12',
                props: {
                    image: '/images/cases/personal-training-platform/image1.png',
                    size: '296',
                    capture: 'Final app design - real-time coaching ',
                },
            },
            {
                block: 'section9',
                props: {
                    variant: '1',
                    subtitle: 'Project highlights',
                    title: 'Key features of the client training app ',
                    cards: [
                        {
                            title: 'Remote support ',
                            description: 'We created an app for remote fitness sessions and interaction with a coach',
                        },
                        {
                            title: 'Streams ',
                            description:
                                'A real-time streaming feature has been implemented for groups of up to 20 people each ',
                        },
                        {
                            title: 'Online payment ',
                            description: 'Integration with popular payment services has been implemented  ',
                        },
                    ],
                },
            },
            {
                block: 'section12',
                props: {
                    image: '/images/cases/personal-training-platform/image2.png',
                    size: '416',
                    capture: 'App design - schedule and programs ',
                },
            },
            { block: 'section8', props: {} },
            {
                block: 'section4',
                props: {
                    title: 'Our team has successfully developed couching app',
                    description:
                        'Our wonderful team of cool developers at Kotlin worked on the development of this project in the shortest possible time',
                    cards: [
                        {
                            title: 'High team lvl',
                            description: 'only senior / middle level and higher',
                            actionButton: { text: 'Extend team', href: '/service/client-team-extension' },
                            image: '/images/cases/personal-training-platform/team1.png',
                        },
                        {
                            title: 'S-team',
                            description: 'size of team on this project',
                            image: '/images/cases/personal-training-platform/team2.png',
                        },
                        {
                            title: 'Kotlin',
                            description: 'Based on Kotlin we create an app for android',
                            actionButton: { text: 'App dev', href: '/service/mobile-app-development' },
                        },
                    ],
                },
            },
            {
                block: 'section12',
                props: { image: '/images/cases/personal-training-platform/image3.png', size: '296' },
            },
            {
                block: 'section11',
                props: {
                    title: 'App for personal training at home  ',
                    description:
                        'App provides the right approach through online training with an experienced coach. Proven programs from the app s author, along with continuous monitoring of participants  performance, help achieve the set goals',
                    services: [
                        { title: 'Mobile development', href: 'mobile-development' },
                        { title: 'UI/UX design', href: 'design' },
                        { title: 'Business analysis', href: 'business-analysis' },
                        { title: 'DevOps', href: 'devops' },
                        { title: 'Service Integration', href: 'third-party-services' },
                    ],
                },
            },
        ],
    },
    {
        card: {
            title: 'Service for monitoring of medical equipment ',
            description: 'Application for real-time monitoring of medical equipment',
            tags: ['.Net Framework', 'ASP.Net MVC', '.Net Core', 'ASP.Net Core', 'Knockout.js', 'ext.js', 'SignalR'],
            href: 'medical-monitoring-service',
            image: '/images/cases/medical-monitoring-service/card.png',
            category: 'healthcare',
            bgImage: '#FFFFFF',
            mockup: 'laptop',
            tone: 'dark',
        },
        config: [
            {
                block: 'section1',
                props: {
                    shortTitle: 'Medical equipment monitoring',
                    title: 'Service for monitoring of medical equipment ',
                    description: 'Application for real-time monitoring of medical equipment',
                    image: '/images/cases/medical-monitoring-service/first-screen.png',
                },
            },
            {
                block: 'section2',
                props: {
                    listItems: {
                        location: 'North America, Europe, Asia',
                        client: 'Manufacturer of equipment ',
                        industry: 'Healthcare ',
                        projectType: 'Local web service',
                        team: 'S-size ',
                        projectServices: ['Back-end development', 'Service integration '],
                    },
                    descriptionItems: {
                        problem:
                            'Our task was to enhance and modernize the existing portal for monitoring the operation of medical devices and analyzing the collected data',
                        solution:
                            'During our team’s work, support for more than 10 new devices was implemented, including hemodialysis machines, updated versions of laboratory centrifuges, and more. Our solutions significantly accelerated data processing and reduced memory usage without compromising functionality. Additionally, we achieved impressive results in improving the system’s fault tolerance',
                    },
                    tags: [
                        '.Net Framework',
                        'ASP.Net MVC',
                        '.Net Core',
                        'ASP.Net Core',
                        'Knockout.js',
                        'ext.js',
                        'SignalR',
                    ],
                    contact: {
                        title: 'Have same request? ',
                        description:
                            'We will create a turnkey solution for monitoring the condition of equipment tailored to your clinic. Contact us ',
                        image: '/images/cases/medical-monitoring-service/contact.png',
                    },
                },
            },
            { block: 'section12', props: { image: '/images/cases/medical-monitoring-service/image1.png' } },
            {
                block: 'section9',
                props: {
                    variant: '1',
                    subtitle: 'Project highlights',
                    title: 'Service highlights ',
                    description:
                        'The development of such a service implies an increase in fault tolerance, support for multiple devices and optimal use of data',
                    cards: [
                        {
                            title: 'Increased performance ',
                            description: 'The existing solution for monitoring complex medical equipment was improved ',
                        },
                        {
                            title: 'Broad range of supported devices ',
                            description: 'Support for more than 10 new devices was added',
                        },
                        {
                            title: 'Data processing optimization ',
                            description:
                                'The data processing speed significantly increased, memory usage was reduced, and fault tolerance was ',
                        },
                    ],
                },
            },
            { block: 'section12', props: { image: '/images/cases/medical-monitoring-service/image2.png' } },
            {
                block: 'section6',
                props: {
                    cards: [
                        { title: '', image: '/images/cases/medical-monitoring-service/tech1.png' },
                        { title: '', image: '/images/cases/medical-monitoring-service/tech2.png' },
                        { title: '', image: '/images/cases/medical-monitoring-service/tech3.png' },
                        { title: '', image: '/images/cases/medical-monitoring-service/tech4.png' },
                        { title: '', image: '/images/cases/medical-monitoring-service/tech5.png' },
                        { title: '', image: '/images/cases/medical-monitoring-service/tech6.png' },
                    ],
                },
            },
        ],
    },
]

export const allCases: Record<string, CaseData[]> = {
    en: casesEn,
}
