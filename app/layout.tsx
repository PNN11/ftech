import TranslationsProvider from '@/components/providers/locales'

import { dir } from 'i18next'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './globals.css'
import initTranslations from './i18n'
import { outfit } from '@/fonts'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/footer'
import { Slide, ToastContainer } from 'react-toastify'

export const metadata: Metadata = {
    title: 'FTECH',
}

const namespaces = ['common', 'services']

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
                        <Footer />
                    </div>
                    <div id="modals" />
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        transition={Slide}
                    />
                </TranslationsProvider>
            </body>
        </html>
    )
}
