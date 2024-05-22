import initTranslations from '@/app/i18n'
import CaseFirstScreen from '@/components/pages/case/firstScreen'
import TranslationsProvider from '@/components/providers/locales'
import Container from '@/components/ui/wrappers/container'
import { allCases } from '../data'
import { notFound } from 'next/navigation'
import ProjectDefinition from '@/components/pages/case/projectDefinition'
import ProjectOutcome from '@/components/pages/case/projectOutcome'

const namespaces = ['case']

export default async function CasePage({
    params: { locale, case: caseName },
}: {
    params: { locale: string; case: string }
}) {
    const { resources } = await initTranslations(locale, namespaces)

    const caseInfo = allCases[locale].find(({ href }) => href === caseName)

    if (!caseInfo) return notFound()

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <main className="">
                <Container>
                    <CaseFirstScreen
                        description={caseInfo.description}
                        shortTitle={caseInfo.shortTitle}
                        title={caseInfo.title}
                    />
                    <ProjectDefinition
                        budget={caseInfo.budget}
                        client={caseInfo.client}
                        clutchReview={caseInfo.clutchReview}
                        delivering={caseInfo.delivering}
                        environment={caseInfo.environment}
                        industry={caseInfo.industry}
                        location={caseInfo.location}
                        problem={caseInfo.problem}
                        release={caseInfo.release}
                        solution={caseInfo.solution}
                        tags={caseInfo.tags}
                    />
                    <ProjectOutcome
                        title={caseInfo.outcome.title}
                        description={caseInfo.outcome.description}
                        features={caseInfo.outcome.features}
                        owner={caseInfo.owner}
                    />
                </Container>
            </main>
        </TranslationsProvider>
    )
}
