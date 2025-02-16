import initTranslations from '@/app/i18n'
import ContactReviews from '@/components/pages/contacts/ContactReviews'
import Map from '@/components/pages/contacts/Map'
import ContactForm from '@/components/pages/contacts/form/ContactForm'
import TranslationsProvider from '@/components/providers/locales'
import ClutchInfo from '@/components/ui/ClutchInfo'
import Socials from '@/components/ui/Socials'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import Button from '@/components/ui/buttons/defaultButton/button'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import { SALES_DEPARTMENT_EMAIL } from '@/lib/constants'
import Image from 'next/image'

const namespaces = ['contacts', 'common']

type SecondSectionData = {
    subtitle: string
    description: string
    company_details: {
        title: string
        description: string[]
    }
}

export default async function ContactsPage({ params: { locale } }: { params: { locale: string } }) {
    const { resources, t } = await initTranslations(locale, namespaces)

    const { subtitle, title } = t('first-section', { returnObjects: true }) as {
        subtitle: string
        title: string
    }

    const {
        description,
        company_details,
        subtitle: secondSubtitle,
    } = t('second-section', { returnObjects: true }) as SecondSectionData

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <main className="">
                <Container>
                    <section className="grid grid-cols-1 gap-9 pt-14 lg:mb-14 lg:grid-cols-2 lg:items-center lg:gap-23 xl:gap-28 xl:pt-18.75">
                        <div className="contents lg:block">
                            <TitleWithDescription
                                classes={{ wrapper: 'text-left w-full', title: 'lg:mb-9 mb-0' }}
                                title={title}
                                subtitle={subtitle}
                            />
                            <ContactForm classes={{ wrapper: 'order-1 lg:order-none' }} />
                        </div>
                        <div className="contents h-full flex-col lg:flex lg:justify-between">
                            <div className="border-b border-b-gray-200 pb-8">
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
                                <Paragraph className="mb-8 lg:mb-12" variant="p2">
                                    {t('first-section.ready-to-help.description')}
                                </Paragraph>
                                <ClutchInfo classes={{ wrapper: '' }} />
                            </div>
                            <div>
                                <Heading className="mb-4" variant="h5">
                                    💡 {t('first-section.stay-connected.title')}
                                </Heading>
                                <Paragraph className="mb-8" variant="p1">
                                    {t('first-section.stay-connected.description')}
                                </Paragraph>
                                <Socials />
                            </div>
                        </div>
                    </section>
                    <section className="grid grid-cols-1 gap-11 py-12.5 lg:grid-cols-2 lg:items-end lg:gap-23 xl:gap-28 xl:py-25">
                        <TitleWithDescription
                            title={SALES_DEPARTMENT_EMAIL}
                            description={description}
                            subtitle={secondSubtitle}
                            classes={{ wrapper: 'text-left' }}
                        />
                        <div>
                            <Heading className="mb-4" variant="h5">
                                {company_details.title}
                            </Heading>
                            <div>
                                {company_details.description.map(item => (
                                    <Paragraph variant="p1" key={item}>
                                        {item}
                                    </Paragraph>
                                ))}
                            </div>
                        </div>
                    </section>
                    <section className="py-12.5">
                        <Map />
                    </section>
                </Container>
            </main>
        </TranslationsProvider>
    )
}
