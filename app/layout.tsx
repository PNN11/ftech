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
import Script from 'next/script'

const SITE_URL = 'https://ftech-it.com'
const title = 'Ftech-it'

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title,
    openGraph: {
        url: SITE_URL,
        title,
        type: 'website',
    },
    twitter: { card: 'summary_large_image', site: SITE_URL, title },
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

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'SiteNavigationElement',
        name: 'Main Menu',
        url: SITE_URL,
        hasPart: [
            {
                '@type': 'WebPageElement',
                name: 'Home',
                url: `${SITE_URL}`,
            },
            {
                '@type': 'WebPageElement',
                name: 'Services',
                url: `${SITE_URL}/service`,
            },
            {
                '@type': 'WebPageElement',
                name: 'Expertise',
                url: `${SITE_URL}/expertise`,
            },
            {
                '@type': 'WebPageElement',
                name: 'Cases',
                url: `${SITE_URL}/cases`,
            },
            {
                '@type': 'WebPageElement',
                name: 'Contact',
                url: `${SITE_URL}/contacts`,
            },
        ],
    }

    return (
        <html lang={locale} dir={dir(locale)}>
            <Script type="application/ld+json" id="rich-result-schema">
                {JSON.stringify(schema)}
            </Script>
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
