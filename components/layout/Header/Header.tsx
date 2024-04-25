'use client'
import Logo from '@/components/svg/Logo'
import Container from '@/components/ui/wrappers/container'
import React, { FC, useState } from 'react'
import ServiceSubmenu from './service/ServiceSubmenu'
import ExpertiseSubmenu from './expertise/ExpertiseSubmenu'
import Link from 'next/link'
import Heading from '@/components/ui/typography/heading'
import { useTranslation } from 'react-i18next'
import MenuItem from './MenuItem'
import ThemeSwitch from './ThemeSwitch'
import Button from '@/components/ui/buttons/defaultButton/button'
import Burger from '@/components/svg/Burger'
import BurgerOpened from '@/components/svg/BurgerOpened'
import { cn } from '@/lib/classNames'

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
    const [isMenuOpened, setIsMenuOpened] = useState(false)

    const toggleMenu = () => setIsMenuOpened(prev => !prev)

    return (
        <header className="h-fit pb-1.5 pt-4">
            <Container>
                <div className="relative flex items-center justify-between rounded-2xl border border-gray-100 bg-white-300 p-3 shadow-header lg:p-3.5 xl:p-4">
                    <Link href="/">
                        <Logo />
                    </Link>
                    <div
                        className={cn(`absolute left-0 top-[calc(100%+2.5rem)] flex w-full flex-col-reverse items-center gap-3 rounded-2xl border border-gray-200
                            bg-white-300 px-5 py-4 lg:static lg:w-auto lg:flex-row
                            lg:gap-1 lg:border-none lg:px-0 lg:py-0`)}
                    >
                        <ul className="flex w-full flex-col items-start gap-3 lg:w-auto lg:flex-row lg:items-center lg:gap-1">
                            {menuItems.map(item => (
                                <li key={item.href} className="w-full lg:w-auto">
                                    {item.type === 'link' ? (
                                        <MenuItem href={item.href}>{t(item.title)}</MenuItem>
                                    ) : (
                                        <item.Component />
                                    )}
                                </li>
                            ))}
                            <Button size="s" className="w-full justify-center lg:hidden">
                                {t('common:header.contact-us')}
                            </Button>
                        </ul>
                        <ThemeSwitch className="w-full lg:w-auto" />
                    </div>
                    <div>
                        <Button size="s" className="hidden lg:block">
                            {t('common:header.contact-us')}
                        </Button>
                        <Button onClick={toggleMenu} size="s" className="lg:hidden">
                            {isMenuOpened ? <BurgerOpened /> : <Burger />}
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
