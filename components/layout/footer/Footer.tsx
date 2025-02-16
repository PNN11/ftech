'use client'
import Clutch from '@/components/svg/Clutch'
import Linkedin from '@/components/svg/Linkedin'
import Logo from '@/components/svg/Logo'
import Star from '@/components/svg/Star'
import Container from '@/components/ui/wrappers/container'
import { COMPANY_EMAIL, COMPANY_PHONE, LINKEDIN_ADDRESS } from '@/lib/constants'
import Link from 'next/link'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import ContactInfo from './ContactInfo'
import LanguagesList from './LanguagesList'
import SubscribeForm from './SubscribeForm'
import ClutchInfo from '@/components/ui/ClutchInfo'
import Socials from '@/components/ui/Socials'

const footerLinks = [
    { href: '/', title: 'common:footer.home' },
    { href: '/cases', title: 'common:footer.cases' },
    { href: '/contacts', title: 'common:footer.contacts' },
    { href: '/terms', title: 'common:footer.terms' },
    { href: '/privacy', title: 'common:footer.privacy' },
]

const Footer: FC = () => {
    const { t } = useTranslation()

    return (
        <footer className="self-end pb-8 pt-12 xl:pb-12">
            <Container>
                <div
                    className="grid grid-cols-1 gap-7.5 md:grid-cols-[repeat(2,max-content)] md:justify-between lg:grid-cols-[repeat(3,max-content)]
                    xl:grid-cols-[18.25rem_1fr_18.25rem] xl:gap-x-19.5"
                >
                    <div className="row-span-2 flex flex-col gap-5.5 xl:gap-7.75">
                        <Logo className="" />
                        <div className="flex items-end gap-6 md:flex-col md:items-start md:gap-5.5 lg:grow lg:justify-between xl:gap-7.75">
                            <ClutchInfo
                                classes={{
                                    wrapper: 'flex-col-reverse gap-1 items-start',
                                    clutchIcon: '',
                                    reviews: 'hidden',
                                }}
                            />
                            <Socials />
                        </div>
                    </div>
                    <div>
                        <ul className="mb-8.5 flex flex-col items-start gap-4.5 md:mb-5.5 md:flex-row md:items-center md:gap-8 xl:mb-7.75">
                            {footerLinks.map(({ href, title }) => (
                                <li
                                    key={href}
                                    className="relative after:absolute after:-right-4.5 after:top-1/2 after:h-1.25 after:w-1.25 after:-translate-y-1/2 after:rounded-md
                                     after:bg-gray-750 after:content-none last:after:hidden md:after:content-[''] dark:after:bg-blue-800"
                                >
                                    <Link className="inline-block text-xl leading-none text-gray-900" href={href}>
                                        {t(title)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <ContactInfo />
                    </div>

                    <LanguagesList classes={{ wrapper: 'md:order-1 lg:order-none' }} />
                    <p className="self-center text-sm leading-none text-gray-900">©2019-{new Date().getFullYear()}</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
