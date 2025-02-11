'use client'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import Button from '@/components/ui/buttons/defaultButton/button'
import ButtonWithIcon from '@/components/ui/buttons/withIcon'
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
    consultation_button: string

    expertise: { title: string; description: string; action_button: string }
}

const ServicesFirstScreen: FC = () => {
    const { t } = useTranslation()

    const { description, subtitle, title, expertise, consultation_button } = t('services:first-screen', {
        returnObjects: true,
    }) as ServicesFirstScreenData

    return (
        <section
            className="grid grid-cols-1 gap-2 overflow-hidden rounded-8 border border-gray-200
         bg-white-10 lg:grid-cols-[58%_1fr]"
        >
            <div className="relative">
                <div className="relative p-4.5 md:p-12 xl:px-16 xl:py-15">
                    <div className="relative z-[1] space-y-9 md:max-w-80">
                        <Heading variant="h1">{title}</Heading>
                        <Paragraph variant="p1">{description}</Paragraph>
                        <Link className="block" href="/contacts">
                            <ButtonWithIcon>{consultation_button}</ButtonWithIcon>
                        </Link>
                    </div>
                </div>
                <Image
                    src="/images/expertise/lines.svg"
                    alt=""
                    width={571}
                    height={363}
                    quality={100}
                    className="absolute -top-5 left-1/2 hidden max-w-max -translate-x-1/4 md:bottom-0 md:left-auto
                 md:right-0 md:top-auto md:block md:translate-x-1/2 lg:translate-x-2/3"
                />
            </div>
            <div className="relative z-[1] h-full lg:p-4">
                <div className="hidden h-full overflow-hidden rounded-2xl border border-dark-blue-100 bg-gray-350 lg:block">
                    <Image
                        src="/images/services/services_first_screen_desktop.png"
                        width={476}
                        height={406}
                        alt=""
                        className="h-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}

export default ServicesFirstScreen
