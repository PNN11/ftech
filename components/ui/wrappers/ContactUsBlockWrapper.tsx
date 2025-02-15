import React, { FC } from 'react'
import Heading from '../typography/heading'
import Paragraph from '../typography/paragraph'
import Link from 'next/link'
import Button from '../buttons/defaultButton'
import ContactUsEllipse from '@/components/svg/ContactUsEllipse'
import ContactUsEllipseBlue from '@/components/svg/ContactUsEllipseBlue'
import Image from 'next/image'
import { cn } from '@/lib/classNames'
import ContactUsEllipseLight from '@/components/svg/ContactUsEllipseLight'

type ContactUsBlockWrapperProps = {
    title: string
    description: string
    action_button: string
    href: string
    classes?: { textWrapper?: string; title?: string; description?: string }
    variant?: 'light' | 'dark'
}

const ContactUsBlockWrapper: FC<ContactUsBlockWrapperProps> = ({
    action_button,
    description,
    title,
    href,
    classes,
    variant = 'dark',
}) => {
    const isDarkVariant = variant === 'dark'
    const isLightVariant = variant === 'light'
    return (
        <div
            className={cn('relative overflow-hidden rounded-8 border px-5.5 pb-5.5 pt-8 lg:pb-15 lg:pt-19', {
                'border-gray-200 bg-white-100': isLightVariant,
                'border-gray-300 bg-primary-black dark:bg-contact-us-blue': isDarkVariant,
            })}
        >
            <div
                className={cn(
                    'relative z-[1] mx-auto mb-10 text-center md:max-w-145 lg:max-w-159',
                    classes?.textWrapper
                )}
            >
                <Heading
                    className={cn('mb-5.5', { '': isLightVariant, '!text-white-300': isDarkVariant }, classes?.title)}
                    variant="h2"
                >
                    {title}
                </Heading>
                <Paragraph
                    className={cn(
                        '',
                        { '!text-gray-700': isLightVariant, '!text-gray-100': isDarkVariant },
                        classes?.description
                    )}
                    variant="p1"
                >
                    {description}
                </Paragraph>
            </div>
            <Link href={href} className="relative z-[1] mx-auto block w-full lg:w-fit">
                <Button className="w-full" color={isDarkVariant ? 'secondary' : 'primary'}>
                    {action_button}
                </Button>
            </Link>
            {isLightVariant && (
                <>
                    <ContactUsEllipseLight className="absolute -left-37 top-0 lg:left-0" />
                    <ContactUsEllipseLight className="absolute bottom-0 right-0 rotate-180 md:-bottom-28 lg:bottom-0" />
                    <Image
                        src="/images/home/light-contact-bg.png"
                        alt=""
                        fill
                        className="object-cover opacity-[0.14] mix-blend-color-burn"
                        quality={100}
                    />
                </>
            )}
            {isDarkVariant && (
                <>
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
                </>
            )}
        </div>
    )
}

export default ContactUsBlockWrapper
