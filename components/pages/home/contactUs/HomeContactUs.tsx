'use client'
import ContactUsEllipse from '@/components/svg/ContactUsEllipse'
import ContactUsEllipseBlue from '@/components/svg/ContactUsEllipseBlue'
import Button from '@/components/ui/buttons/defaultButton/button'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

type ContactUsData = {
    title: string
    description: string
    action_button: string
}

const HomeContactUs: FC = () => {
    const { t } = useTranslation()
    const { action_button, description, title } = t('homepage:contact-us', { returnObjects: true }) as ContactUsData

    return (
        <SectionWrapper>
            <Container>
                <div className="dark:bg-contact-us-blue lg:pt-19 relative overflow-hidden rounded-8 border border-gray-300 bg-primary-black px-5.5 pb-5.5 pt-8 lg:pb-15">
                    <div className="md:max-w-145 relative z-[1] mx-auto mb-10 text-center lg:max-w-159">
                        <Heading className="mb-5.5 !text-white-300" variant="h2">
                            {title}
                        </Heading>
                        <Paragraph className="!text-gray-100" variant="p1">
                            {description}
                        </Paragraph>
                    </div>
                    <Link href={'/contact-us'} className="relative z-[1] mx-auto block w-full lg:w-fit">
                        <Button className="w-full" color="secondary">
                            {action_button}
                        </Button>
                    </Link>
                    <ContactUsEllipse className="absolute -left-37 top-0 lg:left-0 dark:hidden" />
                    <ContactUsEllipse className="absolute bottom-0 right-0 rotate-180 md:-bottom-28 lg:bottom-0 dark:hidden" />
                    <ContactUsEllipseBlue className="absolute -left-37 top-0 hidden opacity-20 lg:left-0 lg:opacity-100 dark:block" />
                    <ContactUsEllipseBlue className="absolute bottom-0 right-0 hidden rotate-180 opacity-20 md:-bottom-28 lg:bottom-0 lg:opacity-100 dark:block" />
                    <Image
                        src="/images/home/contact_us_bg.png"
                        alt=""
                        fill
                        className="object-cover opacity-10"
                        quality={100}
                    />
                </div>
            </Container>
        </SectionWrapper>
    )
}

export default HomeContactUs
