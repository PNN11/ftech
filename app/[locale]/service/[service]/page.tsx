import initTranslations from '@/app/i18n'
import ServiceBlocksMapper from '@/components/pages/service/serviceBlocksMapper/ServiceBlocksMapper'

import TranslationsProvider from '@/components/providers/locales'
import Container from '@/components/ui/wrappers/container'
import { TService } from '@/types/common'
import { notFound } from 'next/navigation'
import { allServices } from '../data'
import { serviceList } from '@/lib/constants'

export function generateStaticParams() {
    return serviceList.map(service => ({ service: service.serviceKey }))
}

const namespaces = ['services', 'common', 'case', 'homepage', 'service', 'expertise']

export default async function ServicePage({
    params: { locale, service },
}: {
    params: { locale: string; service: TService }
}) {
    const { resources } = await initTranslations(locale, namespaces)

    const serviceInfo = allServices[locale].find(item => item.service === service)

    if (!serviceInfo) return notFound()

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <main>
                <Container>
                    <ServiceBlocksMapper {...serviceInfo} />
                </Container>
            </main>
        </TranslationsProvider>
    )
}
