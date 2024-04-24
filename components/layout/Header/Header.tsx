'use client'
import Logo from '@/components/svg/Logo'
import Container from '@/components/ui/wrappers/container'
import React, { FC } from 'react'
import ServiceSubmenu from './service/ServiceSubmenu'
import ExpertiseSubmenu from './expertise/ExpertiseSubmenu'
import Link from 'next/link'
import Heading from '@/components/ui/typography/heading'
import { useTranslation } from 'react-i18next'
import MenuItem from './MenuItem'
import ThemeSwitch from './ThemeSwitch'
import Button from '@/components/ui/buttons/defaultButton/button'

type MenuItem = { title: string; href: string } & (
    | {
          type: 'dropdown'
          Component: React.FC
      }
    | {
          type: 'link'
      }
)

const menuItems: MenuItem[] = [
    { title: 'common:header.service', type: 'dropdown', Component: ServiceSubmenu, href: 'service' },
    { title: 'common:header.expertise', type: 'dropdown', Component: ExpertiseSubmenu, href: 'expertise' },
    { title: 'common:header.cases', type: 'link', href: '/cases' },
    { title: 'common:header.contacts', type: 'link', href: '/contacts' },
]

const Header: FC = () => {
    const { t } = useTranslation()

    return (
        <header className="h-fit pb-1.5 pt-4">
            <Container>
                <div className="shadow-header relative flex items-center justify-between rounded-2xl border border-gray-100 bg-white-300 p-3 lg:p-3.5 xl:p-4">
                    <Link href="/">
                        <Logo />
                    </Link>
                    <div className="flex items-center gap-1 bg-white-300">
                        <ul className="flex items-center gap-1">
                            {menuItems.map(item => (
                                <li key={item.href} className="">
                                    {item.type === 'link' ? (
                                        <MenuItem href={item.href}>{t(item.title)}</MenuItem>
                                    ) : (
                                        <item.Component />
                                    )}
                                </li>
                            ))}
                        </ul>
                        <ThemeSwitch />
                    </div>
                    <Button size="s">{t('common:header.contact-us')} </Button>
                </div>
            </Container>
        </header>
    )
}

export default Header
