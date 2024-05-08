import TranslationsProvider from '@/components/providers/locales'
import initTranslations from '@/app/i18n'
import CasesFirstScreen from '@/components/pages/cases/firstScreen'

const namespaces = ['cases']

export default async function CasesPage({ params: { locale } }: { params: { locale: string } }) {
    const { resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <main className="">
                <CasesFirstScreen />
            </main>
        </TranslationsProvider>
    )
}
