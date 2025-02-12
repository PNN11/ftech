import React, { FC } from 'react'
import Heading from '../typography/heading'
import Paragraph from '../typography/paragraph'
import Link from 'next/link'
import Button from '../buttons/defaultButton'
import ContactUsEllipse from '@/components/svg/ContactUsEllipse'
import ContactUsEllipseBlue from '@/components/svg/ContactUsEllipseBlue'
import Image from 'next/image'
import { cn } from '@/lib/classNames'

type ContactUsBlockWrapperProps = {
    title: string
    description: string
    action_button: string
    href: string
    classes?: { textWrapper?: string; title?: string; description?: string }
}

const ContactUsBlockWrapper: FC<ContactUsBlockWrapperProps> = ({
    action_button,
    description,
    title,
    href,
    classes,
}) => {
    return (
        <div className="lg:pt-19 relative overflow-hidden rounded-8 border border-gray-300 bg-primary-black px-5.5 pb-5.5 pt-8 lg:pb-15 dark:bg-contact-us-blue">
            <div
                className={cn(
                    'relative z-[1] mx-auto mb-10 text-center md:max-w-145 lg:max-w-159',
                    classes?.textWrapper
                )}
            >
                <Heading className={cn('mb-5.5 !text-white-300', classes?.title)} variant="h2">
                    {title}
                </Heading>
                <Paragraph className={cn('!text-gray-100', classes?.description)} variant="p1">
                    {description}
                </Paragraph>
            </div>
            <Link href={href} className="relative z-[1] mx-auto block w-full lg:w-fit">
                <Button className="w-full" color="secondary">
                    {action_button}
                </Button>
            </Link>
            <ContactUsEllipse className="absolute -left-37 top-0 lg:left-0 dark:hidden" />
            <ContactUsEllipse className="absolute bottom-0 right-0 rotate-180 md:-bottom-28 lg:bottom-0 dark:hidden" />
            <ContactUsEllipseBlue className="absolute -left-37 top-0 hidden opacity-20 lg:left-0 lg:opacity-100 dark:block" />
            <ContactUsEllipseBlue className="absolute bottom-0 right-0 hidden rotate-180 opacity-20 md:-bottom-28 lg:bottom-0 lg:opacity-100 dark:block" />
            <Image src="/images/home/contact_us_bg.png" alt="" fill className="object-cover opacity-10" quality={100} />
        </div>
    )
}

export default ContactUsBlockWrapper
