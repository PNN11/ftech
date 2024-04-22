import TranslationsProvider from '@/components/providers/locales'
import initTranslations from '../i18n'

const namespaces = ['homepage']

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
    const { resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <main className=""></main>
        </TranslationsProvider>
    )
}
