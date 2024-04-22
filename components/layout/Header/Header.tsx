'use client'
import Logo from '@/components/svg/Logo'
import Container from '@/components/ui/wrappers/container'
import React, { FC } from 'react'
import ServiceSubmenu from './ServiceSubmenu'
import ExpertiseSubmenu from './ExpertiseSubmenu'
import Link from 'next/link'
import Heading from '@/components/ui/typography/heading'
import { useTranslation } from 'react-i18next'

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
    { title: 'common:header.cases', type: 'link', href: 'cases' },
    { title: 'common:header.contacts', type: 'link', href: 'contacts' },
]

const Header: FC = () => {
    const { t } = useTranslation()

    return (
        <header className="pb-1.5 pt-4">
            <Container>
                <div className="flex items-center justify-between p-4">
                    <Logo />
                    <div>
                        <ul className="flex items-center gap-1">
                            {menuItems.map(item => {
                                if (item.type === 'link') {
                                    return (
                                        <li key={item.href}>
                                            <Link href={item.href} className="text-base leading-none text-gray-900">
                                                {t(item.title)}
                                            </Link>
                                        </li>
                                    )
                                }

                                return <item.Component key={item.href} />
                            })}
                        </ul>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
