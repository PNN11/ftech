import initTranslations from '@/app/i18n'
import ContactForm from '@/components/pages/contacts/form/ContactForm'
import TranslationsProvider from '@/components/providers/locales'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import Image from 'next/image'

const namespaces = ['contacts']

export default async function ContactsPage({ params: { locale } }: { params: { locale: string } }) {
    const { resources, t } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <main className="">
                <Container>
                    <section className="grid grid-cols-1 gap-9 pt-14 lg:mb-14 lg:grid-cols-2 lg:gap-23 xl:gap-28 xl:pt-18.75">
                        <ContactForm />
                        <div>
                            <Image
                                src="/images/contacts_people.png"
                                alt="people"
                                width={126}
                                height={68}
                                className="mb-3.5 lg:mb-7"
                            />
                            <Heading className="mb-5" variant="h5">
                                {t('first-section.ready-to-help.title')}
                            </Heading>
                            <Paragraph className="mb-3.5 lg:mb-7" variant="p2">
                                {t('first-section.ready-to-help.description')}
                            </Paragraph>
                        </div>
                    </section>
                </Container>
            </main>
        </TranslationsProvider>
    )
}
