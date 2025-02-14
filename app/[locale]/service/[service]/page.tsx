import initTranslations from '@/app/i18n'
import OutsourcingFirstScreen from '@/components/pages/service/firstScreen/OutsourcingFirstScreen'
import ServiceFirstScreen from '@/components/pages/service/firstScreen/ServiceFirstScreen'
import ServiceInfo from '@/components/pages/service/info/ServiceInfo'
import ServiceAdvantages from '@/components/pages/service/ServiceAdvantages/ServiceAdvantages'
import ServiceBlocksMapper from '@/components/pages/service/serviceBlocksMapper/ServiceBlocksMapper'
import TranslationsProvider from '@/components/providers/locales'
import Container from '@/components/ui/wrappers/container'
import { allServices } from '../data'
import { notFound } from 'next/navigation'

const namespaces = ['services', 'common', 'case', 'homepage', 'service', 'expertise']

export default async function ServicePage({
    params: { locale, service },
}: {
    params: { locale: string; service: string }
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
