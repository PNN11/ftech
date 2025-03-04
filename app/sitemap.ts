import type { MetadataRoute } from 'next'

import i18nConfig from '@/i18nConfig'
import { allCases } from './[locale]/cases/data'
import { allServices } from './[locale]/service/data'

const baseUrl = 'https://ftech-it.com'

const staticPages = ['', 'contacts', 'cases', 'expertise', 'service']
const casesPages = allCases.en.map(({ card }) => card.href)
const servicesPages = allServices.en.map(service => service.service)

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        ...staticPages.map(page => ({
            url: `${baseUrl}${page ? `/${page}` : ''}`,
            lastModified: new Date(),
            changeFrequency: 'daily' as MetadataRoute.Sitemap[number]['changeFrequency'],
            alternates: {
                languages: Object.fromEntries(
                    i18nConfig.locales.map(locale => [locale, `${baseUrl}/${locale}/${page}`])
                ),
            },
        })),
        ...casesPages.map(page => ({
            url: `${baseUrl}/cases/${page}`,
            lastModified: new Date(),
            changeFrequency: 'daily' as MetadataRoute.Sitemap[number]['changeFrequency'],
            alternates: {
                languages: Object.fromEntries(
                    i18nConfig.locales.map(locale => [locale, `${baseUrl}/${locale}/cases/${page}`])
                ),
            },
        })),
        ...servicesPages.map(page => ({
            url: `${baseUrl}/service/${page}`,
            lastModified: new Date(),
            changeFrequency: 'daily' as MetadataRoute.Sitemap[number]['changeFrequency'],
            alternates: {
                languages: Object.fromEntries(
                    i18nConfig.locales.map(locale => [locale, `${baseUrl}/${locale}/service/${page}`])
                ),
            },
        })),
    ]
}
