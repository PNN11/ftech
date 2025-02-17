import initTranslations from '@/app/i18n'
import CaseBlocksMapper from '@/components/pages/case/caseBlocksMapper/CaseBlockMapper'
import TranslationsProvider from '@/components/providers/locales'
import Container from '@/components/ui/wrappers/container'
import { notFound } from 'next/navigation'
import { allCases } from '../data'
import i18nConfig from '@/i18nConfig'

const namespaces = ['case', 'homepage']

export function generateStaticParams() {
    return i18nConfig.locales.map(locale => allCases[locale].map(({ card }) => ({ locale, case: card.href }))).flat()
}

export default async function CasePage({
    params: { locale, case: caseName },
}: {
    params: { locale: string; case: string }
}) {
    const { resources } = await initTranslations(locale, namespaces)

    const caseIndex = allCases[locale].findIndex(({ card }) => card.href === caseName)

    const caseInfo = allCases[locale][caseIndex]

    if (!caseInfo) notFound()

    const nextCaseIndex = caseIndex < allCases[locale].length - 1 ? caseIndex + 1 : 0

    const nextCase = allCases[locale][nextCaseIndex]

    if (!caseInfo) return notFound()

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <main className="">
                <Container>
                    <CaseBlocksMapper config={caseInfo.config} nextProject={nextCase.card} />
                </Container>
            </main>
        </TranslationsProvider>
    )
}
