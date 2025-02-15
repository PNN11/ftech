import initTranslations from '@/app/i18n'
import CasesList from '@/components/pages/cases/casesList'
import CasesGetInTouch from '@/components/pages/cases/getInTouch/CasesGetInTouch'
import OurExpertise from '@/components/pages/home/ourExpertise'
import TranslationsProvider from '@/components/providers/locales'

const namespaces = ['cases', 'common', 'homepage']

export default async function CasesPage({ params: { locale } }: { params: { locale: string } }) {
    const { resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <main className="">
                <CasesList />
                <OurExpertise />
                <CasesGetInTouch />
            </main>
        </TranslationsProvider>
    )
}
