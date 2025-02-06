import initTranslations from '@/app/i18n'
import ProjectWorkflow from '@/components/pages/case/projectWorkflow'
import ExpertiseContactUs from '@/components/pages/expertise/contacts/ExpertiseContactUs'

import ExpertisesList from '@/components/pages/expertise/expertisesList'
import ExpertiseFirstScreen from '@/components/pages/expertise/firstScreen/ExpertiseFirstScreen'
import Faq from '@/components/pages/home/faq'
import ServicesReasons from '@/components/pages/services/reasons'
import TranslationsProvider from '@/components/providers/locales'
import Container from '@/components/ui/wrappers/container'

const namespaces = ['expertise', 'common', 'services', 'case', 'homepage']

export default async function ExpertisePage({ params: { locale } }: { params: { locale: string } }) {
    const { resources, t } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <main className="overflow-hidden">
                <Container>
                    <ExpertiseFirstScreen />
                    <ExpertisesList />
                    <ServicesReasons />
                    <ProjectWorkflow />
                </Container>
                <Faq />
                <ExpertiseContactUs />
            </main>
        </TranslationsProvider>
    )
}
