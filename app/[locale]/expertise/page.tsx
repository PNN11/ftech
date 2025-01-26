import initTranslations from '@/app/i18n'
import ExpertisesList from '@/components/pages/expertise/expertisesList'
import ExpertiseFirstScreen from '@/components/pages/expertise/firstScreen/ExpertiseFirstScreen'
import TranslationsProvider from '@/components/providers/locales'
import Container from '@/components/ui/wrappers/container'

const namespaces = ['expertise', 'common']

export default async function ExpertisePage({ params: { locale } }: { params: { locale: string } }) {
    const { resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <main className="overflow-hidden">
                <Container>
                    <ExpertiseFirstScreen />
                    <ExpertisesList />
                </Container>
            </main>
        </TranslationsProvider>
    )
}
