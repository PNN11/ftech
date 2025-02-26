'use client'
import Logo from '@/components/svg/Logo'
import ClutchInfo from '@/components/ui/ClutchInfo'
import Socials from '@/components/ui/Socials'
import Container from '@/components/ui/wrappers/container'
import Link from 'next/link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import ContactInfo from './ContactInfo'
import FooterServiceLinks from './ServiceLinks'

const footerLinks = [
    { href: '/', title: 'common:footer.home' },
    { href: '/cases', title: 'common:footer.cases' },
    { href: '/contacts', title: 'common:footer.contacts' },
    { href: '/terms', title: 'common:footer.terms' },
]

const Footer: FC = () => {
    const { t } = useTranslation()

    return (
        <footer className="self-end pb-8 pt-12 xl:pb-12">
            <Container>
                <div
                    className="grid grid-cols-1 gap-5 md:grid-cols-[repeat(2,max-content)]  md:justify-between md:gap-3
                    xl:grid-cols-[18.25rem_1fr_18.25rem] xl:gap-x-18"
                >
                    <div className="flex flex-col gap-5.5 xl:gap-7.75">
                        <Logo className="" />
                        <div className="flex flex-col items-start gap-6 md:gap-5.5 lg:grow lg:justify-between xl:gap-7.75">
                            <ClutchInfo
                                classes={{
                                    wrapper: 'flex-col-reverse gap-1 items-start',
                                    clutchIcon: '',
                                    reviews: 'hidden',
                                }}
                            />
                            {/* <LanguagesList classes={{ wrapper: 'md:order-1 lg:order-none' }} /> */}
                            <Socials />
                        </div>
                    </div>
                    <div className="space-y-8">
                        <ul className="mb-8.5 flex flex-row items-start gap-8 md:mb-5.5 md:items-center xl:mb-7.75">
                            {footerLinks.map(({ href, title }) => (
                                <li
                                    key={href}
                                    className="relative after:absolute after:-right-4.5 after:top-1/2 after:h-1.25 after:w-1.25 after:-translate-y-1/2 after:rounded-md
                                     after:bg-gray-750 after:content-[''] last:after:hidden dark:after:bg-blue-800"
                                >
                                    <Link className="inline-block text-xl leading-none text-gray-900" href={href}>
                                        {t(title)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <FooterServiceLinks />
                        <ContactInfo />
                    </div>
                    <p className="self-end text-sm leading-none text-gray-900 xl:text-end">©2025</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
