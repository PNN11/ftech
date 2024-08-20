import initTranslations from '@/app/i18n'
import CaseFirstScreen from '@/components/pages/case/firstScreen'
import TranslationsProvider from '@/components/providers/locales'
import Container from '@/components/ui/wrappers/container'
import { allCases } from '../data'
import { notFound } from 'next/navigation'
import ProjectDefinition from '@/components/pages/case/projectDefinition'
import ProjectOutcome from '@/components/pages/case/projectOutcome'
import ProjectWorkflow from '@/components/pages/case/projectWorkflow'
import ProjectChallenges from '@/components/pages/case/projectChallenges'
import ProjectReviews from '@/components/pages/case/reviews/ProjectReviews'
import NextCaseSection from '@/components/pages/case/nextCase/NextCaseSection'
import CaseContactUs from '@/components/pages/case/contact/CaseContactUs'
import Section3 from '@/components/pages/case/section3'
import CaseSection6 from '@/components/pages/case/section6/Section6'
import Section7 from '@/components/pages/case/section7/Section7'
import Section9 from '@/components/pages/case/section9'
import Section10 from '@/components/pages/case/section10'
import Section11 from '@/components/pages/case/section11'
import Section12 from '@/components/pages/case/section12'

const namespaces = ['case', 'homepage']

export default async function CasePage({
    params: { locale, case: caseName },
}: {
    params: { locale: string; case: string }
}) {
    const { resources } = await initTranslations(locale, namespaces)

    const caseIndex = allCases[locale].findIndex(({ href }) => href === caseName)

    const caseInfo = allCases[locale][caseIndex]

    const nextCaseIndex = caseIndex < allCases[locale].length - 1 ? caseIndex + 1 : 0

    const nextCase = allCases[locale][nextCaseIndex]

    if (!caseInfo) return notFound()

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <main className="">
                <Container>
                    <CaseFirstScreen
                        description={caseInfo.description}
                        shortTitle={caseInfo.shortTitle}
                        title={caseInfo.title}
                        nextCaseShortTitle={nextCase.shortTitle}
                    />
                    <Section3
                        title="Specify of project"
                        image="/images/case/section3-image.png"
                        description="The customer is a company specializing in the manufacture of medical equipment, including blood transfusion devices and devices for the biochemical analysis of physiological fluids"
                    />
                    <ProjectDefinition
                        listItems={{
                            brand: 'Brand',
                            client: 'client',
                            environment: ['web', 'ios', 'android'],
                            industry: 'Industry',
                            location: 'Location',
                            projectType: ['Project type', 'web', 'ios', 'android'],
                            release: 'Release',
                            team: 'Team',
                        }}
                        descriptionItems={{ delivering: ' Delivering', problem: 'Problem', solution: 'Solution' }}
                        contact={{
                            title: 'Have same idea? ',
                            description:
                                'Lorem ipsum dolor sit amet consectetur. Enim sed morbi eu pellentesque porttitor aenean sit tellus. ',
                        }}
                        tags={['qwe']}
                    />
                    <ProjectOutcome
                        cards={[
                            {
                                title: '5+',
                                description: 'back-enders on project for creating gorges server part',
                                actionButton: { text: 'Back service', href: '/services/backend-development' },
                                image: '/images/case/outcome-icon-1.png',
                            },
                            {
                                title: 'High team lvl',
                                description: 'only senr / middle grade and higher ',
                                image: '/images/case/outcome-icon-2.png',
                            },
                            {
                                title: 'M-team',
                                description: 'size of team on this project include 5+ members',
                                actionButton: { text: 'More teams', href: '/services/backend-development' },
                            },
                        ]}
                        title="Mostly back-enders on the team"
                        description="The main scope of work on this project was allocated by the customer to us for the development of the backend. Therefore, in a team of size M, most developers were involved in the backend"
                    />
                    <ProjectWorkflow cards={caseInfo.stages} />
                    <ProjectChallenges
                        cards={caseInfo.challenges}
                        title="Showcasing versatility and ability to adapt to different challenges"
                        subtitle="Project challanges"
                        description="Our projects span various industries, from real estate to technology, showcasing our versatility and expertise"
                    />
                    <CaseSection6
                        cards={[
                            { title: 'Tech 1', image: '/images/cases/e-commerce-molding/tech1.png' },
                            { title: 'Tech 2', image: '/images/cases/e-commerce-molding/tech2.png' },
                            { title: 'Tech 3', image: '/images/cases/e-commerce-molding/tech3.png' },
                            { title: 'Tech 4', image: '/images/cases/e-commerce-molding/tech4.png' },
                            { title: 'Tech 5', image: '/images/cases/e-commerce-molding/tech5.png' },
                            { title: 'Tech 6', image: '/images/cases/e-commerce-molding/tech6.png' },
                        ]}
                    />
                    <Section7
                        title="Showcasing versatility and ability to adapt to different challenges"
                        description="Our projects span various industries, from real estate to technology, showcasing our versatility and expertise"
                        subtitle="Title + P"
                        position="left"
                    />
                    <Section9
                        title="Developed features of app’s backend"
                        subtitle="Project highlights"
                        description="Let's see what was included in the backend and the entire server development of the call for help application"
                        cards={[
                            {
                                title: '“Turnkey” backend level',
                                description: 'Implemented the "turnkey" server part of the application',
                            },
                            {
                                title: 'Range the risks',
                                description: 'Implemented an administrator-configurable risk assessment system',
                            },
                            { title: 'Robotic calls', description: 'Integrated robotic calls with a message' },
                            {
                                title: '- 911 emergency?',
                                description:
                                    'Integrated short-number redirects via local telecom operators, depending on the region of use (pre-installed supported countries)',
                            },
                            {
                                title: 'Data management',
                                description:
                                    'Developed an algorithm for determining the necessary specialization of the emergency software team',
                            },
                            {
                                title: 'Integration',
                                description: 'Payment and whole connecting server backend to mobile app',
                            },
                        ]}
                        variant="3"
                    />
                    <Section10
                        title="Features of product development in medtech"
                        description="The topic of telemedicine has been actively gaining momentum in recent years. The key feature of this niche is conservatism, while the technology market is the most open to innovation and technological solutions, discoveries. Current research shows that the market is heading towards better communications and an improved medical process. 
                            In such an unusual and delicate topic as men's health, it is important to establish communication and maintain privacy and comfort.
                             Our client asked us to create a product that will allow you to remotely visit the clinic, take surveys and receive consultations and treatment,
                              if necessary, quickly, comfortably and privately."
                        subtitle="About domain"
                        imageTitle="Specify of project"
                        imageDescription="A special feature of the project was the need to provide detailed diagnostics at a distance. The client should be able to take tests at the nearest partner laboratory, the results of which are automatically entered into the portal database. Then, the client must complete a survey regarding his symptoms and condition. The algorithm analyzes the answers, after which it makes a preliminary diagnosis. This significantly saves the time of the attending physician and reduces the likelihood of an erroneous diagnosis. After that, the client will receive a consultation via video call and can receive an electronic prescription for medicines with the possibility of ordering them with home delivery"
                        imageProps={{ src: '/images/case/section10-image.png', width: 329, height: 247 }}
                    />
                    <Section11
                        title="Electricity tariff adviser app"
                        description="Find only the best rates and spend less on electricity"
                        services={[
                            { title: 'Back-end service', href: 'web-development' },
                            { title: 'Mobile app service', href: 'mobile-development' },
                            { title: 'Integration service', href: 'dedicated-teams' },
                            { title: 'DevOps service', href: 'devops' },
                            { title: 'Dedicated teams ', href: 'dedicated-teams' },
                        ]}
                    />
                    <Section12 image="/images/case/test-image.png" capture="App design - schedule and excises" />
                    <ProjectReviews title={caseInfo.reviews.title} item={caseInfo.reviews.item} />
                    <NextCaseSection caseInfo={nextCase} />
                    <CaseContactUs />
                </Container>
            </main>
        </TranslationsProvider>
    )
}
