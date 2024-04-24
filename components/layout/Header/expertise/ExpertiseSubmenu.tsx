import Link from 'next/link'
import React, { FC, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import MenuItem from '../MenuItem'
import ChevronUp from '@/components/svg/ChevronUp'
import MenuItemDropdown from '../MenuItemDropdown'
import Heading from '@/components/ui/typography/heading'
import Image from 'next/image'
import SubMenuItem from '../SubMenuItem'
import Container from '@/components/ui/wrappers/container'
import VerticalDashedLine from '../VerticalDashedLine'

const expertise = [
    {
        title: 'common:expertise.items.real-estate.title',
        description: 'common:expertise.items.real-estate.description',
        href: '/real-estate',
    },
    {
        title: 'common:expertise.items.web3.title',
        description: 'common:expertise.items.web3.description',
        href: '/web3',
    },
    {
        title: 'common:expertise.items.travel.title',
        description: 'common:expertise.items.travel.description',
        href: '/travel',
    },
    {
        title: 'common:expertise.items.e-commerce.title',
        description: 'common:expertise.items.e-commerce.description',
        href: '/e-commerce',
    },
    {
        title: 'common:expertise.items.healthcare.title',
        description: 'common:expertise.items.healthcare.description',
        href: '/healthcare',
    },
    {
        title: 'common:expertise.items.logistics.title',
        description: 'common:expertise.items.logistics.description',
        href: '/logistics',
    },
    {
        title: 'common:expertise.items.edtech.title',
        description: 'common:expertise.items.edtech.description',
        href: '/edtech',
    },
    {
        title: 'common:expertise.items.fintech.title',
        description: 'common:expertise.items.fintech.description',
        href: '/fintech',
    },
    {
        title: 'common:expertise.items.energetics.title',
        description: 'common:expertise.items.energetics.description',
        href: '/energetics',
    },
]

const ExpertiseSubmenu: FC = () => {
    const { t } = useTranslation()

    return (
        <MenuItemDropdown href="/expertise" title={t('common:header.expertise')}>
            <div className=" pt-5.25">
                <div className="grid w-full rounded-2xl border border-gray-100 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="relative col-span-1 rounded-l-2xl bg-gray-50 pl-9 pt-9 lg:gap-12.5 xl:gap-5.25">
                        <Heading variant="h5" className="max-w-37">
                            {t('common:expertise.our-expertise')}
                        </Heading>
                        <Image
                            src="/images/house.png"
                            width={224}
                            height={120}
                            alt=""
                            className="absolute bottom-0 -translate-x-1/2 lg:left-1/2 lg:w-70 xl:w-auto"
                        />
                    </div>
                    <div className="relative rounded-r-2xl bg-white-300 px-7.5 lg:col-span-2 lg:pb-9 lg:pt-9 xl:col-span-3 xl:pb-16.5 xl:pt-10">
                        <VerticalDashedLine className="left-0 lg:bottom-9 lg:top-9 xl:bottom-8 xl:top-4" />
                        <VerticalDashedLine className="lg:bottom-9 lg:left-1/2 lg:top-9 xl:bottom-8 xl:left-1/3 xl:top-4" />
                        <VerticalDashedLine className="hidden xl:bottom-8 xl:left-2/3 xl:top-4 xl:block" />
                        <ul className="grid gap-x-15 gap-y-3 lg:grid-cols-2 xl:grid-cols-3">
                            {expertise.map(({ description, href, title }) => (
                                <li key={href}>
                                    <SubMenuItem title={t(title)} href={href} description={t(description)} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </MenuItemDropdown>
    )
}

export default ExpertiseSubmenu
