'use client'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import Button from '@/components/ui/buttons/defaultButton/button'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import ContactUsBlock from '@/components/widgets/ContactUs/ContactUsBlock'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type ServicesFirstScreenData = {
    subtitle: string
    title: string
    description: string

    expertise: { title: string; description: string; action_button: string }
}

const ServicesFirstScreen: FC = () => {
    const { t } = useTranslation()

    const { description, subtitle, title, expertise } = t('services:first-screen', {
        returnObjects: true,
    }) as ServicesFirstScreenData

    return (
        <section>
            <div
                className="mb-4 grid grid-cols-1 items-center gap-5 rounded-8 border border-gray-200 bg-white-10 py-3.5
                  pt-12 lg:grid-cols-[1fr_40%] lg:pt-3.5"
            >
                <TitleWithDescription
                    classes={{
                        wrapper: 'lg:text-left md:max-w-152 max-w-full lg:max-w-108 xl:max-w-122 lg:ml-12 xl:ml-16',
                    }}
                    title={title}
                    subtitle={subtitle}
                    description={description}
                />
                <div
                    className="shadow-services-first-screen h-53 lg:h-131 bg-services-first-screen relative mx-3.5 rounded-3xl
                      border border-dark-blue-100 lg:ml-0 dark:bg-contact-us-blue"
                >
                    <Image
                        src="/images/home/contact_us_bg.png"
                        alt=""
                        fill
                        className="object-cover opacity-10"
                        quality={100}
                    />
                    <Image
                        src="/images/services/services_first_screen_desktop.png"
                        alt=""
                        width={480}
                        height={524}
                        className="absolute hidden h-full rounded-3xl object-cover object-[30%] lg:block"
                        quality={100}
                    />
                    <Image
                        src="/images/services/services_first_screen_mobile.png"
                        alt=""
                        width={676}
                        height={198}
                        className="absolute left-1/2 h-full -translate-x-1/2 rounded-3xl object-cover lg:hidden"
                        quality={100}
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-[1fr_40%]">
                <ContactUsBlock />
                <div className="relative flex flex-col gap-3 overflow-hidden rounded-8 border border-gray-200 bg-white-10 py-6 pl-6 md:py-8 md:pl-8">
                    <Heading variant="h5">{expertise.title}</Heading>
                    <Paragraph className="max-w-61.25" variant="p1">
                        {expertise.description}
                    </Paragraph>
                    <Link href="/expertise">
                        <Button variant="outlined" size="m">
                            {expertise.action_button}
                        </Button>
                    </Link>
                    <Image
                        src="/images/expertise_house.png"
                        alt=""
                        width={218}
                        height={152}
                        className="absolute left-69 top-16"
                    />
                </div>
            </div>
        </section>
    )
}

export default ServicesFirstScreen
