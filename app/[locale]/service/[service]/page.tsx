import initTranslations from '@/app/i18n'
import ServiceFirstScreen from '@/components/pages/service/firstScreen/ServiceFirstScreen'
import ServiceInfo from '@/components/pages/service/info/ServiceInfo'
import TranslationsProvider from '@/components/providers/locales'
import Container from '@/components/ui/wrappers/container'

const namespaces = ['services', 'common', 'case', 'homepage', 'service']

export default async function ServicePage({ params: { locale } }: { params: { locale: string; service: string } }) {
    const { resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <main>
                <Container>
                    <ServiceFirstScreen
                        image="/images/services/ml/first-screen.png"
                        title="ML Engineering / Computer Vision"
                        stats={[
                            { title: '5+', description: 'project on AI / ML completed, explore' },
                            { title: '4,9 / 5', description: 'stars on Clutch' },
                        ]}
                    />
                    <ServiceInfo
                        title="Ftech-IT ML Engineering service offer"
                        subtitle="ML Engineering service"
                        description="Despite the fact that the boom in these fields occurred relatively recently, the FTECH-IT team already has significant experience in machine learning and computer vision development. We help our clients leverage the power of artificial intelligence for data analysis, process automation, and product quality improvement"
                        cards={[
                            {
                                title: 'Machine Learning Model Development',
                                description:
                                    "We develop and implement custom machine learning models using both publicly available datasets and our clients' personalized datasets. Additionally, we have extensive experience in customizing OpenAI's GPT models to solve specific business challenges",
                            },
                            {
                                title: 'Computer vision',
                                description:
                                    'We offer computer vision solutions that automate image and video analysis. Using advanced technologies, we specialize in object recognition, scene analysis, and other tasks related to processing visual information',
                            },
                            {
                                title: 'AI Solution Integration',
                                description:
                                    'FTECH-IT will help you integrate AI-based solutions into your existing applications. These AI solutions will significantly reduce the costs of routine tasks and boost your software overall productivity',
                            },
                        ]}
                        hasCTASection
                    />
                </Container>
            </main>
        </TranslationsProvider>
    )
}
