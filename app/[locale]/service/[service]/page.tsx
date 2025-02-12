import initTranslations from '@/app/i18n'
import ServiceFirstScreen from '@/components/pages/service/firstScreen/ServiceFirstScreen'
import TranslationsProvider from '@/components/providers/locales'
import Container from '@/components/ui/wrappers/container'

const namespaces = ['services', 'common', 'case', 'homepage', 'service']

export default async function ServicePage({ params: { locale } }: { params: { locale: string; service: string } }) {
    const { resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <main>
                <Container>
                    <ServiceFirstScreen />
                </Container>
            </main>
        </TranslationsProvider>
    )
}
