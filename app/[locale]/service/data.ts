import { ServiceData } from '@/components/pages/service/serviceBlocksMapper/ServiceBlocksMapper'
import { CLUTCH_RATING } from '@/lib/constants'

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
                        { title: `${CLUTCH_RATING} / 5`, description: 'stars on Clutch' },
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
                        { title: `${CLUTCH_RATING} / 5`, description: 'stars on Clutch' },
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
    {
        service: 'quality-assurance',
        contactUsTitle: 'Project testing with FTECH-IT',
        config: [
            {
                block: 'firstScreen',
                props: {
                    title: 'AQA/QA',
                    image: '/images/services/qa/first-screen.png',
                    stats: [
                        { title: '20+', description: 'projects were managed and tested' },
                        { title: '98%', description: 'clients mark increasing software performance ' },
                    ],
                },
            },
            {
                block: 'serviceInfo',
                props: {
                    subtitle: 'AQA/QA service',
                    title: 'Ftech-IT AQA/QA service offer',
                    description:
                        'The FTECH-IT team will ensure the highest level of user experience with your application by providing comprehensive manual and automated testing services (QA/AQA). We will identify and eliminate any bugs at all stages of development, ensuring the reliability and stability of your application',
                    cards: [
                        {
                            title: 'Automated Testing',
                            description:
                                'FTECH-IT develops and implements solutions for automated application testing (AQA). By using modern methods to create tests, we significantly reduce the time spent on application verification and improve their quality',
                        },
                        {
                            title: 'Manual Testing',
                            description:
                                'FTECH-IT specialists conduct thorough manual testing to identify and eliminate errors that may be missed by automated tests. We will carry out a comprehensive review of your product, ensuring its quality and seamless operation',
                        },
                        {
                            title: 'Performance Testing',
                            description:
                                'Our specialists will conduct performance testing to ensure that your application can handle the growth of the user base and high loads while continuing to operate stably. We conduct load and stress tests to determine performance limits and ensure the optimal operation of your product',
                        },
                    ],
                    hasCTASection: true,
                },
            },
            { block: 'workflow', props: {} },
            { block: 'cta', props: {} },
            { block: 'cases', props: {} },
        ],
    },
    {
        service: 'third-party-services',
        contactUsTitle: 'Service Integration with FTECH-IT',
        config: [
            {
                block: 'firstScreen',
                props: {
                    image: '/images/services/third-party/first-screen.png',
                    title: 'Third-party Service Integration',
                    stats: [
                        { description: 'projects were delivered to the clients', title: '60+' },
                        { description: 'and senior developers are the biggest part of team', title: 'Middle+' },
                    ],
                },
            },
            {
                block: 'serviceInfo',
                props: {
                    subtitle: 'Third-party Service Integration',
                    title: 'Ftech-IT API Integration service offer',
                    description:
                        "Expand the capabilities of your applications and systems with third-party service integration. Whether it's a payment system or secure authentication, FTECH-IT can help integrate various APIs and external services to create a unified and efficient solution for your business",
                    cards: [
                        {
                            title: 'API Integration',
                            description:
                                'Our specialists implement integrations with various APIs, allowing you to easily connect essential third-party services to your application. This expands its functionality and offers users new features and use cases',
                        },
                        {
                            title: 'Integration of corporate systems',
                            description:
                                'FTECH-IT will help you integrate new solutions with existing enterprise systems such as CRM, ERP and others. This ensures seamless interaction of all your systems and increases the efficiency of business processes',
                        },
                        {
                            title: 'Integration with cloud services',
                            description:
                                'Use the functionality of cloud platforms, providing your business with ultimate opportunities to scale and improve performance. FTECH-IT will help with the integration of cloud services such as AWS, Azure and Google Cloud',
                        },
                    ],
                    hasCTASection: true,
                },
            },
            { block: 'workflow', props: {} },
            { block: 'cta', props: {} },
            { block: 'cases', props: {} },
        ],
    },
    {
        service: 'devops',
        contactUsTitle: 'DEVOPS services with FTECH-IT',
        config: [
            {
                block: 'firstScreen',
                props: {
                    image: '/images/services/devops/first-screen.png',
                    title: 'DevOps',
                    stats: [
                        { title: `${CLUTCH_RATING} / 5`, description: 'stars on Clutch' },
                        { title: '5 years', description: 'of experience on IT market' },
                    ],
                },
            },
            {
                block: 'serviceInfo',
                props: {
                    subtitle: 'DevOps service',
                    title: 'Ftech-IT DevOps service offer',
                    description:
                        'We offer comprehensive DevOps services, ensuring stable development and deployment of your applications. Our team will facilitate rapid and secure implementation of changes, reducing time to market and enhancing the quality of your software solutions',
                    cards: [
                        {
                            title: 'Automation of Development and Deployment Processes',
                            description:
                                'Modern DevOps tools and practices for automating development and deployment ensure more effective collaboration among specialists and enhance their productivity. We will provide rapid integration and continuous deployment of applications',
                        },
                        {
                            title: 'Monitoring and Infrastructure Management',
                            description:
                                'Developing software is not enough. It is essential to continuously maintain it, ensuring the uninterrupted operation, security, and stability of all systems. The FTECH-IT team will monitor and manage your IT infrastructure to promptly identify and resolve any issues',
                        },
                    ],
                    hasCTASection: false,
                },
            },
            {
                block: 'serviceTechnologies',
                props: {
                    cards: [
                        { title: 'AWS Amazon', image: '/images/services/devops/tech1.png' },
                        { title: 'Azure', image: '/images/services/devops/tech2.png' },
                        { title: 'Google Cloud', image: '/images/services/devops/tech3.png' },
                        { title: 'Heroku', image: '/images/services/devops/tech4.png' },
                        { title: 'DigitalOcean', image: '/images/services/devops/tech5.png' },
                    ],
                },
            },
            { block: 'workflow', props: {} },
            { block: 'cta', props: {} },
            { block: 'cases', props: {} },
        ],
    },
    {
        service: 'business-analysis',
        contactUsTitle: ' Business Analysis with FTECH-IT',
        config: [
            {
                block: 'firstScreen',
                props: {
                    image: '/images/services/ba/first-screen.png',
                    title: 'Business analysis',
                    stats: [
                        { title: '60+', description: 'projects were delivered to the clients' },
                        { title: '89%', description: 'of staff are mid-level or higher professionals' },
                    ],
                },
            },
            {
                block: 'serviceInfo',
                props: {
                    subtitle: 'Business analysis service',
                    title: 'Ftech-IT Business analysis service offer',
                    description:
                        "The first step in implementation of any project is business analysis. FTECH-IT specialists will help you to understand better the market and your customers' needs, to optimize processes and to structure your project before development start. Our business analysts work closely with clients to achieve truly impressive results in developing solutions for your business",
                    cards: [
                        {
                            title: 'Preparation of Technical Specification',
                            description:
                                'Do you have an idea but no clear plan on how to implement it? We will prepare a systematic technical specification for your project. Our business analysts will gather all the details and help create a comprehensive technical specification for the development team. Additionally, our specialists with years of experience in project execution will recommend the best technologies and implementation strategies for projects of any complexity. Quality business analysis is the key to the effective development of any software',
                        },
                        {
                            title: 'Market and Competitor Analysis',
                            description:
                                "We will analyze your competitors' solutions and help you understand current market trends, so you can make well-informed and balanced decisions for your business",
                        },
                        {
                            title: 'Process Optimization for Technical Solutions',
                            description:
                                'FTECH-IT specialists will analyze your existing application, help identify and eliminate bottlenecks in your business processes and enhance the efficiency of customer interactions with your application',
                        },
                    ],
                    hasCTASection: true,
                },
            },
        ],
    },
    {
        service: 'mobile-development',
        contactUsTitle: 'Mobile Development with FTECH-IT',
        config: [
            {
                block: 'firstScreen',
                props: {
                    title: 'Mobile development ',
                    image: '/images/services/mobile-development/first-screen.png',
                    stats: [
                        { title: '15+', description: 'apps were delivered and published' },
                        { title: CLUTCH_RATING, description: 'stars on Clutch' },
                    ],
                },
            },
            {
                block: 'serviceInfo',
                props: {
                    subtitle: 'Mobile development service',
                    title: 'Ftech-IT Mobile development service offer',
                    description:
                        'There are over 4.8 billion smartphone users worldwide nowadays, and this number continues to grow each year. Any business, from a local café to a large retailer, aims to have its own application for mobile platforms. FTECH-IT understands the potential and importance of mobile development for your business and will ensure high-quality development on any platform',
                    cards: [
                        {
                            title: 'Mobile Android Development ',
                            description:
                                'Our company has extensive experience in developing Android applications using Kotlin. Our specialists understand the specifics of this platform and are ready to offer you an application that meets the needs of your business. From design to market deployments, FTECH-IT will take care of everything',
                        },
                        {
                            title: 'Mobile IOS Development ',
                            description:
                                'In FTECH-IT, we create user-friendly and stylish iOS applications that meet all quality and security standards set by Apple App Store. Swift and Objective-C developers build fast and efficient applications that your users will love. Our full-cycle iOS app development is high-quality, fast and secure ',
                        },
                        {
                            title: 'Cross-platform Mobile development',
                            description:
                                "Want it all at once? With FTECH-IT, it's possible. Our specialists can create cross-platform applications using Flutter and React Native that run seamlessly on both iOS and Android. The advantage of this solution is a single codebase for all platforms, which significantly reduces costs, accelerates development, and lowers maintenance expenses",
                        },
                        {
                            title: 'Mobile development for wearable devices ',
                            description:
                                'App development for wearable devices is a young but rapidly growing field in mobile development. Smartwatches, fitness trackers, and smart bracelets — FTECH-IT is here to help you bring your wearable device application to life',
                        },
                    ],
                    hasCTASection: false,
                },
            },
            {
                block: 'serviceTechnologies',
                props: {
                    cards: [
                        { title: 'Kotlin', image: '/images/services/mobile-development/tech1.png' },
                        { title: 'React Native', image: '/images/services/mobile-development/tech2.png' },
                        { title: 'Swift', image: '/images/services/mobile-development/tech3.png' },
                        { title: 'Xamarin', image: '/images/services/mobile-development/tech4.png' },
                        { title: 'Flutter', image: '/images/services/mobile-development/tech5.png' },
                    ],
                },
            },
            { block: 'workflow', props: {} },
            { block: 'cta', props: {} },
            { block: 'cases', props: {} },
        ],
    },
    {
        service: 'frontend-development',
        contactUsTitle: 'Front-end Development with  FTECH-IT',
        config: [
            {
                block: 'firstScreen',
                props: {
                    title: 'Front-end Development ',
                    image: '/images/services/frontend/first-screen.png',
                    stats: [
                        { title: '5 years', description: 'of experience on IT market' },
                        { title: '89%', description: 'of staff are mid-level or higher professionals' },
                    ],
                },
            },
            {
                block: 'serviceInfo',
                props: {
                    subtitle: 'Front-end service',
                    title: 'Ftech-IT Front-end service offer',
                    description:
                        'The FTECH-IT team has extensive experience in developing striking and memorable front-end solutions for your business. Since the front-end is what the end-user interacts with, the success of the front-end development directly impacts the overall success of the application',
                    cards: [
                        {
                            title: 'Front-end Development for WEB',
                            description:
                                'Make your web solution stand out and be memorable to users with high-quality front-end development from the FTECH-IT team. We implement even the most complex design solutions in your application, ensuring a positive user experience with your service',
                        },
                        {
                            title: 'Front-end Desktop Development',
                            description:
                                'FTECH-IT will help you with the development of the front-end of your desktop application, ensuring that your software provides maximum usability and user-friendliness',
                        },
                        {
                            title: 'Single-page Application Development',
                            description:
                                'We will create a unique single-page website (SPA) that will leave a lasting impression on your users or investors, ensuring brand recognition and easy access to information about your business',
                        },
                        {
                            title: 'Customization of Outdated Front-end Solutions',
                            description:
                                'Front-end development is an extremely dynamic field in IT, where trends change rapidly. What seemed modern yesterday can look outdated today. We will help you update your existing front-end solution, making it relevant, user-friendly, and visually appealing',
                        },
                    ],
                    hasCTASection: false,
                },
            },
            {
                block: 'serviceTechnologies',
                props: {
                    cards: [
                        { title: 'Angular', image: '/images/services/frontend/tech1.png' },
                        { title: 'React.js', image: '/images/services/frontend/tech2.png' },
                        { title: 'CSS', image: '/images/services/frontend/tech3.png' },
                        { title: 'HTML', image: '/images/services/frontend/tech4.png' },
                        { title: 'Vue.js', image: '/images/services/frontend/tech5.png' },
                        { title: 'JS', image: '/images/services/frontend/tech6.png' },
                    ],
                },
            },
            { block: 'workflow', props: {} },
            { block: 'cta', props: {} },
            { block: 'cases', props: {} },
        ],
    },
    {
        service: 'backend-development',
        contactUsTitle: 'Back-end Development with FTECH-IT',
        config: [
            {
                block: 'firstScreen',
                props: {
                    title: 'Back-end Development',
                    image: '/images/services/backend/first-screen.png',
                    stats: [
                        { title: `${CLUTCH_RATING} / 5`, description: 'stars on Clutch' },
                        { title: '89%', description: 'of staff are mid-level or higher professionals' },
                    ],
                },
            },
            {
                block: 'serviceInfo',
                props: {
                    subtitle: 'Back-end service',
                    title: 'Ftech-IT  Back-end service offer',
                    description:
                        'Our back-end engineers develop fault-tolerant, scalable solutions capable of efficiently achieving set goals and delivering maximum performance in solving your tasks',
                    cards: [
                        {
                            title: 'Back-end Development for Web',
                            description:
                                "We will add business logic to your web application. Our experts will develop a powerful backend, ensuring fault tolerance, data security, and seamless operation across various devices and platforms. A well-designed backend is the key to the success of any complex web application, which is why it's crucial to entrust it to the top-level professionals like the FTECH-IT team",
                        },
                        {
                            title: 'Back-end Architecture Development',
                            description:
                                'The foundation of any software solution is its back-end architecture. Our IT architects have years of experience in building optimized, fault-tolerant, and scalable applications of any complexity. We are ready to create a truly reliable and high-performance solution from scratch, perfectly tailored to meet your specific needs',
                        },
                        {
                            title: 'Back-end Development for Mobile Applications',
                            description:
                                "Whether it's a mobile banking app, a flower shop, a delivery service from a café, or a social network – your mobile application will need a back end. We will help you develop a server solution that matches the functionality of your app",
                        },
                        {
                            title: 'API Development',
                            description:
                                'To interact with any external services, your application will need an API. We offer a range of solutions for API development and integration with external services. Our engineers know exactly how to implement your requirements in this area',
                        },
                        {
                            title: 'Desktop Back-end Development',
                            description:
                                'Whether you want to rewrite a back end built with obsolete legacy technologies or develop it from scratch for your desktop application, the FTECH-IT team is here to bring your project to life. Our team has a professional technical vision of how exactly the backend for a desktop application should be designed and implemented',
                        },
                        {
                            title: 'Microservices Architecture on the Back-end',
                            description:
                                'The trend in IT is increasingly shifting towards microservices architecture or migrating monolithic solutions to it. Microservices offer easier maintenance and testing, and they are often more efficient in terms of resource usage. In FTECH-IT, we know how to effectively work with microservices architecture',
                        },
                    ],
                    hasCTASection: false,
                },
            },
            {
                block: 'serviceTechnologies',
                props: {
                    cards: [
                        { title: 'ASP.Net Core', image: '/images/services/backend/tech1.png' },
                        { title: '.Net 6', image: '/images/services/backend/tech2.png' },
                        { title: 'Node.js', image: '/images/services/backend/tech3.png' },
                        { title: 'Java', image: '/images/services/backend/tech4.png' },
                        { title: 'Symfony', image: '/images/services/backend/tech5.png' },
                        { title: 'django', image: '/images/services/backend/tech6.png' },
                        { title: 'Python', image: '/images/services/backend/tech7.png' },
                        { title: 'php', image: '/images/services/backend/tech8.png' },
                        { title: 'GO', image: '/images/services/backend/tech9.png' },
                        { title: 'PostgreSQL', image: '/images/services/backend/tech10.png' },
                    ],
                },
            },
            { block: 'workflow', props: {} },
            { block: 'cta', props: {} },
            { block: 'cases', props: {} },
        ],
    },
    {
        service: 'outsourcing',
        config: [
            {
                block: 'outsourcingFirstScreen',
                props: {
                    title: 'Trust your project to professionals',
                    image: '/images/services/outsourcing/first-screen.png',
                    description:
                        'We take pride in offering our clients turnkey project implementations. Over the entire existence of the company, we have successfully completed over 40 major projects across various domains—from fintech to healthcare—and this number continues to grow steadily',
                    actionButton: { text: 'Get started' },
                },
            },
            {
                block: 'serviceAdvantages',
                props: {
                    title: 'Advantages of Outsourcing Development with FTECH-IT',
                    cards: [
                        {
                            title: 'Full-cycle',
                            description: 'Full-cycle development within the company',
                            actionButton: { text: 'Explore cases', href: '/cases' },
                        },
                        { title: 'Friendly rates', description: 'Maximum quality at friendly rates' },
                        { title: 'Transparency', description: 'Detailed progress reports and full client control' },
                        {
                            title: 'Expertise',
                            description: 'Expert business analysts and detailed estimates during the presale phase',
                        },
                        {
                            title: 'Post-release support',
                            description: 'We provide support after project completion',
                            icon: 'arrowCircle',
                        },
                    ],
                    hasContactSection: true,
                },
            },
            { block: 'workflow', props: {} },
            { block: 'cta', props: {} },
            { block: 'cases', props: {} },
        ],
    },
    {
        service: 'client-team-extension',
        contactUsTitle: 'Team extension together with FTECH-IT',
        config: [
            {
                block: 'outsourcingFirstScreen',
                props: {
                    title: 'Client Team Extension',
                    description:
                        'Expand your team with professionals from FTECH-IT. With our expertise, you can quickly and effectively enhance your team with top-tier specialists to achieve your business goals',
                    actionButton: { text: 'Expand your team' },
                    image: '/images/services/team-extension/first-screen.png',
                },
            },
            {
                block: 'serviceAdvantages',
                props: {
                    subtitle: 'Our proposal on team extension service',
                    title: 'About  FTECH-IT',
                    description:
                        'For over 5 years, our team has been providing high-quality IT outsourcing services. Starting under the brand of a group of companies, FTECH-IT quickly grew into an independent, high-class IT service provider',
                    cards: [
                        {
                            title: '<10 days',
                            description: 'Until the project start',
                            actionButton: { text: 'Expand team', href: '/contacts' },
                        },
                        { title: '89%', description: 'Middle and Senior specialists' },
                        { title: '30 days trial', description: 'We provide trial days of special conditions' },
                        {
                            title: 'Expertise',
                            description: 'Expert business analysts and detailed estimates during the presale phase',
                        },
                        { title: 'Large pool of candidates', description: 'A large pool of candidates', icon: 'users' },
                    ],
                    hasContactSection: false,
                },
            },
            {
                block: 'serviceInfo',
                props: {
                    subtitle: 'Why FTECH',
                    title: 'Advantages of working with FTECH-IT',
                    cards: [
                        {
                            title: 'Technological',
                            description:
                                'In FTECH-IT, we value your time and budget. Our progressive approach to team formation ensures the most efficient and effective use of our top-tier specialists on your projects. The result will be not long in coming!',
                            hasActionButton: false,
                        },
                        {
                            title: 'Cost-efficient',
                            description:
                                'By using FTECH-IT outstaffing services, you significantly reduce your budget for recruitment, selection, and hiring. Additionally, you won’t need to cover the costs of idle staff. You can bolster your team for a specific period and end the collaboration when it’s no longer needed',
                            hasActionButton: false,
                        },
                        {
                            title: 'Fast',
                            description:
                                'In FTECH-IT, we always have available specialists ready to start on your projects on short notice. The minimum time for providing a specialist is one day after signing the contract',
                            hasActionButton: false,
                        },
                        {
                            title: 'Professional',
                            description:
                                '90% of our employees are middle and senior-level specialists with higher education. Working with us, you can be confident in the professional qualifications of our team members',
                            hasActionButton: false,
                        },
                        {
                            title: 'Secure',
                            description:
                                'FTECH-IT is confident in its specialists and guarantees a high level of service. During the one-month trial period, FTECH-IT is ready to provide an immediate replacement for any specialist upon your request. We offer special financial conditions for outstaffing during the trial period, allowing you to ensure that the selected specialist is the perfect fit for your needs',
                            hasActionButton: false,
                        },
                        {
                            title: 'Convenient',
                            description:
                                'Outstaffing with FTECH-IT is simple and convenient. You no longer need to spend time and money on lengthy searches, selection processes, hiring, and maintaining IT staff. Leave the routine to us, and get the specialist of your dreams to help realize your ideas and goals',
                        },
                    ],
                    hasCTASection: false,
                },
            },
            {
                block: 'serviceSteps',
                props: {
                    title: 'Expand your team with FTECH-IT is as easy as can be',
                    actionButton: { text: 'Contact us', href: '/contacts' },
                    description:
                        'Our projects span various industries, from real estate to technology, showcasing our versatility and expertise',
                    cards: [
                        {
                            title: 'Step 1',
                            description:
                                'Contact us! Our managers will help you determine the right technical stack, provide resumes of available specialists, and share our rate card',
                        },
                        {
                            title: 'Step 2',
                            description:
                                'We will arrange a call where you can conduct a technical interview to ensure that the specialist you choose is well-suited for your needs',
                        },
                        {
                            title: 'Step 3',
                            description:
                                'Take advantage of special conditions for the first month of collaboration and achieve your goals and objectives with the expertise of FTECH-IT specialists',
                        },
                    ],
                },
            },
            { block: 'techStack', props: {} },
        ],
    },
]

export const allServices: Record<string, ServiceData[]> = {
    en: servicesEn,
}
