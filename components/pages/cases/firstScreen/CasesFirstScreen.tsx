'use client'
import CasesCardBg from '@/components/svg/cases/CasesCardBg'
import CasesStar from '@/components/svg/cases/CasesStar'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import Button from '@/components/ui/buttons/defaultButton/button'
import Heading from '@/components/ui/typography/heading'
import Container from '@/components/ui/wrappers/container'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

type FirstScreenCasesData = {
    title: string
    subtitle: string
    description: string
    action_button: string
    client_stories: string
    card_text: string
}

const CasesFirstScreen: FC = () => {
    const { t } = useTranslation()

    const { action_button, client_stories, description, subtitle, title, card_text } = t('first-screen', {
        returnObjects: true,
    }) as FirstScreenCasesData

    return (
        <section className="pt-3 lg:pt-4">
            <Container>
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_40%]">
                    <div
                        className="rounded-3xl border border-gray-200 bg-white-10 px-4.5 pb-4.5 pt-31.5 md:rounded-8 md:p-8 lg:rounded-[1rem_3rem_1rem_3rem]
                                  lg:p-12 xl:rounded-[1rem_4rem_1rem_4rem] xl:p-16 xl:pr-28"
                    >
                        <TitleWithDescription
                            classes={{ wrapper: 'lg:text-left mb-6' }}
                            title={title}
                            subtitle={subtitle}
                            description={description}
                        />
                        <div className="mb-9 flex flex-col items-center justify-between gap-2 lg:mb-6 lg:flex-row">
                            <Image src="/images/cases/people.png" width={206} height={90} alt="" />
                            <p className="text-2xl leading-none tracking-h2 text-gray-900">{client_stories}</p>
                        </div>
                        <Link className="mx-auto block w-full md:w-fit lg:ml-0" href="/contacts">
                            <Button className="w-full" size="l">
                                {action_button}
                            </Button>
                        </Link>
                    </div>
                    <Link
                        href="/contacts"
                        className="relative overflow-hidden rounded-3xl border border-gray-200 bg-primary-black p-6 pb-73
                                   md:rounded-8 md:px-12 md:py-10 lg:rounded-[3rem_1rem_3rem_1rem] lg:p-12 lg:pb-87
                                    xl:rounded-[4rem_1rem_4rem_1rem] xl:p-17 xl:pb-89.5 dark:border-none dark:bg-contact-us-blue"
                    >
                        <Heading variant="h2" className="text-white-200 md:max-w-88 lg:max-w-max dark:text-white-200">
                            {card_text}
                        </Heading>
                        <CasesCardBg className="absolute -bottom-4 -right-29 md:-bottom-13.5 md:-right-36 lg:-bottom-7.5 lg:-right-23 xl:bottom-0 xl:right-0" />
                        <CasesStar className="absolute bottom-29 right-65 text-gray-100 md:bottom-18 md:right-60 lg:bottom-50 lg:right-61.25 xl:bottom-52.5 xl:right-78" />
                        <Image
                            src="/images/home/contact_us_bg.png"
                            alt=""
                            fill
                            className="object-cover opacity-10"
                            quality={100}
                        />
                    </Link>
                </div>
            </Container>
        </section>
    )
}

export default CasesFirstScreen
