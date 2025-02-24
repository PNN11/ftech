import TranslationsProvider from '@/components/providers/locales'
import i18nConfig from '@/i18nConfig'
import initTranslations from '../i18n'
import { Metadata } from 'next/types'

type Params = { locale: string }

const descriptions: Record<string, string> = {
    en: 'Ftech-it (Ftech Solutions LLS) is a European IT - outsourcing and outstaffing company. We deliver high-quality custom software development services to clients worldwide.',
}
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const { locale } = await params

    return {
        description: descriptions[locale],
    }
}

export function generateStaticParams() {
    return i18nConfig.locales.map(locale => ({ locale }))
}

const namespaces = ['common', 'contacts', 'homepage', 'services']
export default async function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode
    params: Params
}>) {
    const { resources } = await initTranslations(locale, namespaces)
    return (
        <TranslationsProvider namespaces={namespaces} locale={locale} resources={resources}>
            <>{children}</>
        </TranslationsProvider>
    )
}
