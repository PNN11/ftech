import TranslationsProvider from '@/components/providers/locales'
import initTranslations from '../i18n'
import HomePageFirstScreen from '@/components/pages/home/firstScreen/homePageFirstScreen'
import AboutUs from '@/components/pages/home/aboutUs'
import OurService from '@/components/pages/home/ourService'
import OurExpertise from '@/components/pages/home/ourExpertise'
import OurCases from '@/components/pages/home/ourCases'
import Reviews from '@/components/pages/home/reviews'
import Faq from '@/components/pages/home/faq'
import HomeContactUs from '@/components/pages/home/contactUs/HomeContactUs'
import Container from '@/components/ui/wrappers/container'

const namespaces = ['homepage', 'common']

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
    const { resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <main className="">
                <HomePageFirstScreen />
                <AboutUs />
                <OurService />
                <OurExpertise />
                <Container>
                    <OurCases />
                </Container>
                <Reviews />
                <Faq />
                <HomeContactUs />
            </main>
        </TranslationsProvider>
    )
}
