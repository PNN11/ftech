import TranslationsProvider from '@/components/providers/locales'
import initTranslations from '@/app/i18n'
import CasesFirstScreen from '@/components/pages/cases/firstScreen'
import CasesList from '@/components/pages/cases/casesList'
import OurExpertise from '@/components/pages/home/ourExpertise'
import CasesGetInTouch from '@/components/pages/cases/getInTouch/CasesGetInTouch'

const namespaces = ['cases', 'common', 'homepage']

export default async function CasesPage({ params: { locale } }: { params: { locale: string } }) {
    const { resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <main className="">
                <CasesFirstScreen />
                <CasesList />
                <OurExpertise />
                <CasesGetInTouch />
            </main>
        </TranslationsProvider>
    )
}
