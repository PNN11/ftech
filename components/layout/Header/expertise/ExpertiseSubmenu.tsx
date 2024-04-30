import Heading from '@/components/ui/typography/heading'
import Image from 'next/image'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import MenuItemDropdown from '../MenuItemDropdown'
import VerticalDashedLine from '../VerticalDashedLine'
import SubMenuItem from '../subMenu/SubMenuItem'

export const expertise = [
    {
        title: 'common:expertise.items.real-estate.title',
        description: 'common:expertise.items.real-estate.description',
        href: '/real-estate',
        number: 1,
    },
    {
        title: 'common:expertise.items.web3.title',
        description: 'common:expertise.items.web3.description',
        href: '/web3',
        number: 2,
    },
    {
        title: 'common:expertise.items.travel.title',
        description: 'common:expertise.items.travel.description',
        href: '/travel',
        number: 3,
    },
    {
        title: 'common:expertise.items.e-commerce.title',
        description: 'common:expertise.items.e-commerce.description',
        href: '/e-commerce',
        number: 4,
    },
    {
        title: 'common:expertise.items.healthcare.title',
        description: 'common:expertise.items.healthcare.description',
        href: '/healthcare',
        number: 5,
    },
    {
        title: 'common:expertise.items.logistics.title',
        description: 'common:expertise.items.logistics.description',
        href: '/logistics',
        number: 6,
    },
    {
        title: 'common:expertise.items.edtech.title',
        description: 'common:expertise.items.edtech.description',
        href: '/edtech',
        number: 7,
    },
    {
        title: 'common:expertise.items.fintech.title',
        description: 'common:expertise.items.fintech.description',
        href: '/fintech',
        number: 8,
    },
    {
        title: 'common:expertise.items.energetics.title',
        description: 'common:expertise.items.energetics.description',
        href: '/energetics',
        number: 9,
    },
]

const ExpertiseSubmenu: FC = () => {
    const { t } = useTranslation()

    return (
        <MenuItemDropdown href="/expertise" title={t('common:header.expertise')}>
            <div className="grid w-full rounded-2xl py-3 lg:grid-cols-3 lg:border lg:border-gray-100 lg:py-0 xl:grid-cols-4">
                <div className="relative col-span-1 hidden rounded-l-2xl bg-gray-50 pl-9 pt-9 lg:block lg:gap-12.5 xl:gap-5.25">
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
                <div className="relative rounded-r-2xl bg-white-300 px-7.5 md:col-span-2 lg:pb-9 lg:pt-9 xl:col-span-3 xl:pb-16.5 xl:pt-10">
                    <VerticalDashedLine className="bottom-3 left-0 top-3 lg:bottom-9 lg:top-9 xl:bottom-8 xl:top-4" />
                    <VerticalDashedLine className="md:bottom-3 md:left-1/2 md:top-3 lg:bottom-9 lg:top-9 xl:bottom-8 xl:left-1/3 xl:top-4" />
                    <VerticalDashedLine className="hidden xl:bottom-8 xl:left-2/3 xl:top-4 xl:block" />
                    <ul className="grid gap-x-15 gap-y-3 md:grid-cols-2 xl:grid-cols-3">
                        {expertise.map(({ description, href, title }) => (
                            <li key={href}>
                                <SubMenuItem title={title} href={`/expertise${href}`} description={description} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </MenuItemDropdown>
    )
}

export default ExpertiseSubmenu
