import initTranslations from '@/app/i18n'
import CaseFirstScreen from '@/components/pages/case/firstScreen'
import TranslationsProvider from '@/components/providers/locales'
import Container from '@/components/ui/wrappers/container'
import { allCases } from '../data'
import { notFound } from 'next/navigation'

const namespaces = ['case']

export default async function CasePage({
    params: { locale, case: caseName },
}: {
    params: { locale: string; case: string }
}) {
    const { resources } = await initTranslations(locale, namespaces)

    const caseInfo = allCases[locale].find(({ href }) => href === caseName)

    if (!caseInfo) return notFound()

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <main className="">
                <Container>
                    <CaseFirstScreen
                        description={caseInfo.description}
                        shortTitle={caseInfo.shortTitle}
                        title={caseInfo.title}
                    />
                </Container>
            </main>
        </TranslationsProvider>
    )
}
