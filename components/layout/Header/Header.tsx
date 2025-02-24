'use client'
import Burger from '@/components/svg/Burger'
import BurgerOpened from '@/components/svg/BurgerOpened'
import Logo from '@/components/svg/Logo'
import Button from '@/components/ui/buttons/defaultButton/button'
import Container from '@/components/ui/wrappers/container'
import { cn } from '@/lib/classNames'
import Link from 'next/link'
import React, { FC, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import MenuItem from './MenuItem'
import ThemeSwitch from './ThemeSwitch'
import ExpertiseSubmenu from './expertise/ExpertiseSubmenu'
import ServiceSubmenu from './service/ServiceSubmenu'
import { usePathname } from 'next/navigation'

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
    { title: 'common:header.expertise', type: 'link', href: '/expertise' },
    { title: 'common:header.cases', type: 'link', href: '/cases' },
    { title: 'common:header.contacts', type: 'link', href: '/contacts' },
]

const Header: FC = () => {
    const { t } = useTranslation()
    const [isMenuOpened, setIsMenuOpened] = useState(false)
    const pathname = usePathname()
    const isMainPage = pathname === '/'

    const menuRef = useRef<HTMLDivElement>(null)

    const handleOpenMenu = () => setIsMenuOpened(true)

    const handleCloseMenu = () => {
        if (!isMenuOpened) return
        const animation = menuRef.current?.animate(
            [
                { height: isMainPage ? '16.875rem' : '15.125rem', opacity: 1 },
                { opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 },
            ],
            {
                duration: 500,
                easing: 'linear',
            }
        )

        animation?.addEventListener(
            'finish',
            () => {
                menuRef.current?.classList.add('hidden')
                setIsMenuOpened(false)
            },
            { once: true }
        )
    }

    return (
        <header className="translate-z-1 relative z-10 h-fit pb-1.5 pt-4">
            <Container>
                <div className="relative flex items-center justify-between rounded-2xl border border-gray-100 bg-white-300 p-3 shadow-header lg:p-3.5 xl:p-4">
                    <Link href="/">
                        <Logo />
                    </Link>
                    <nav
                        ref={menuRef}
                        className={cn(`absolute -left-0.5 top-[calc(100%+0.4rem)] w-[calc(100%+0.25rem)] flex-col-reverse items-center gap-3 overflow-hidden rounded-2xl border border-gray-200 bg-white-300 px-5
                            py-4 lg:static lg:flex lg:w-auto lg:animate-none lg:flex-row
                            lg:gap-1 lg:border-none lg:px-0 lg:py-0 ${isMenuOpened ? 'flex' : 'hidden'}
                             ${isMainPage ? 'animate-main-page-mobile-menu' : 'animate-mobile-menu'}`)}
                    >
                        <ul className="flex w-full flex-col items-start gap-3 lg:w-auto lg:flex-row lg:items-center lg:gap-1">
                            {menuItems.map(item => (
                                <li key={item.href} className="w-full lg:w-auto">
                                    {item.type === 'link' ? (
                                        <MenuItem onClick={handleCloseMenu} href={item.href}>
                                            {t(item.title)}
                                        </MenuItem>
                                    ) : (
                                        <item.Component />
                                    )}
                                </li>
                            ))}
                            <Link className="w-full lg:hidden" href="/contacts">
                                <Button size="s" className="w-full justify-center">
                                    {t('common:header.contact-us')}
                                </Button>
                            </Link>
                        </ul>
                        <ThemeSwitch className="w-full lg:w-auto" />
                    </nav>
                    <div>
                        <Link href="/contacts">
                            <Button size="s" className="hidden lg:block">
                                {t('common:header.contact-us')}
                            </Button>
                        </Link>
                        <Button
                            onClick={() => (isMenuOpened ? handleCloseMenu() : handleOpenMenu())}
                            size="s"
                            className="lg:hidden"
                        >
                            {isMenuOpened ? <BurgerOpened /> : <Burger />}
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
