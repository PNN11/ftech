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
                    <ProjectWorkflow
                        stages={caseInfo.stages}
                        basicImage={{ capture: caseInfo.images.basicCapture, src: caseInfo.images.basic }}
                    />
                    <ProjectChallenges challenges={caseInfo.challenges} additionalInfo={caseInfo.additionalInfo} />
                    <ProjectReviews title={caseInfo.reviews.title} item={caseInfo.reviews.item} />
                    <NextCaseSection caseInfo={nextCase} />
                    <CaseContactUs />
                </Container>
            </main>
        </TranslationsProvider>
    )
}
