'use client'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import Heading from '@/components/ui/typography/heading'
import Link from 'next/link'
import Button from '@/components/ui/buttons/defaultButton/button'

const ContactUsBlock: FC = () => {
    const { t } = useTranslation()

    const { action_button, title } = t('common:contact_us', { returnObjects: true }) as {
        title: string
        action_button: string
    }

    return (
        <div className="relative overflow-hidden rounded-8 border border-gray-300 bg-primary-black py-10.5 md:pl-16">
            <Image src="/images/home/contact_us_bg.png" alt="" fill className="object-cover opacity-10" quality={100} />
            <div className="relative z-[1] flex flex-col items-center gap-7.25 md:items-start">
                <Heading className="!text-white-300" variant="h2">
                    {title}
                </Heading>
                <Link href="/contact">
                    <Button size="l" color="secondary" className="font-medium">
                        {action_button}
                    </Button>
                </Link>
            </div>
            <Image
                src="/images/contact_us_block.png"
                alt=""
                width={382}
                height={215}
                className="absolute left-80 top-0 hidden h-full md:block"
                quality={100}
            />
        </div>
    )
}

export default ContactUsBlock
