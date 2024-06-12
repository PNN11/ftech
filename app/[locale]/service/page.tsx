import initTranslations from '@/app/i18n'
import ServicesFirstScreen from '@/components/pages/services/firstScreen'
import ServicesReasons from '@/components/pages/services/reasons'
import ServicesList from '@/components/pages/services/servicesList'
import TranslationsProvider from '@/components/providers/locales'
import Container from '@/components/ui/wrappers/container'

const namespaces = ['services', 'common']

export default async function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
    const { resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <main className="">
                <Container>
                    <ServicesFirstScreen />
                    <ServicesReasons />
                    <ServicesList />
                </Container>
            </main>
        </TranslationsProvider>
    )
}
