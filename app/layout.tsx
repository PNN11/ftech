import TranslationsProvider from '@/components/providers/locales'

import { dir } from 'i18next'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import 'swiper/css'
import 'swiper/css/navigation'
import './globals.css'
import initTranslations from './i18n'
import { outfit } from '@/fonts'
import Header from '@/components/layout/Header'

export const metadata: Metadata = {
    title: 'FTECH',
}

const namespaces = ['common']

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: { locale: string }
}>) {
    const locale = cookies().get('NEXT_LOCALE')?.value ?? 'en'

    const { resources } = await initTranslations(locale, namespaces)

    return (
        <html lang={locale} dir={dir(locale)}>
            <body className={`${outfit.className} bg-bg-page dark:bg-white-100`}>
                <TranslationsProvider namespaces={namespaces} locale={locale} resources={resources}>
                    <div className="grid min-h-screen grid-cols-1">
                        <Header />
                        {children}
                    </div>
                    <div id="modals" />
                </TranslationsProvider>
            </body>
        </html>
    )
}
