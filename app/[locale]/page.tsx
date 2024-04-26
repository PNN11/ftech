import TranslationsProvider from '@/components/providers/locales'
import initTranslations from '../i18n'
import HomePageFirstScreen from '@/components/pages/home/firstScreen/homePageFirstScreen'
import AboutUs from '@/components/pages/home/aboutUs'

const namespaces = ['homepage']

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
    const { resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <main className="">
                <HomePageFirstScreen />
                <AboutUs />
            </main>
        </TranslationsProvider>
    )
}
