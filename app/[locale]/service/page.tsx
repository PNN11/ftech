import initTranslations from '@/app/i18n'
import CaseContactUs from '@/components/pages/case/contact/CaseContactUs'
import ServicesFirstScreen from '@/components/pages/services/firstScreen'
import ServicesReasons from '@/components/pages/services/reasons'
import ServicesList from '@/components/pages/services/servicesList'
import ServicesTechStack from '@/components/pages/services/techStack/ServicesTechStack'
import ServicesWorkflow from '@/components/pages/services/workflow'
import TranslationsProvider from '@/components/providers/locales'
import Container from '@/components/ui/wrappers/container'

const namespaces = ['services', 'common', 'case']

export default async function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
    const { resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <main className="overflow-hidden">
                <Container>
                    <ServicesFirstScreen />
                    <ServicesReasons />
                    <ServicesList />
                    <ServicesWorkflow />
                    <ServicesTechStack />
                    <CaseContactUs />
                </Container>
            </main>
        </TranslationsProvider>
    )
}
