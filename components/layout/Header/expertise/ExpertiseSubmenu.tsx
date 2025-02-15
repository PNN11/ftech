import Heading from '@/components/ui/typography/heading'
import Image from 'next/image'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import MenuItemDropdown from '../MenuItemDropdown'
import VerticalDashedLine from '../VerticalDashedLine'
import SubMenuItem from '../subMenu/SubMenuItem'
import { Expertise } from '@/types/common'

type ExpertiseItem = {
    title: `common:expertise.items.${Expertise}.title`
    description: `common:expertise.items.${Expertise}.description`
    longDescription: `common:expertise.items.${Expertise}.long-description`
    href: `/${Expertise}`
    number: number
    image: {
        src: string
        width: number
        height: number
    }
    projectsCount: string
    caseStudies: string
    services: `common:expertise.items.${Expertise}.services`
}

export const expertise: ExpertiseItem[] = [
    {
        title: 'common:expertise.items.e-commerce.title',
        description: 'common:expertise.items.e-commerce.description',
        longDescription: 'common:expertise.items.e-commerce.long-description',
        href: '/e-commerce',
        number: 1,
        image: { src: '/images/expertise/e-commerce.png', width: 280, height: 148 },
        projectsCount: '10+',
        caseStudies: '3',
        services: 'common:expertise.items.e-commerce.services',
    },
    {
        title: 'common:expertise.items.fintech.title',
        description: 'common:expertise.items.fintech.description',
        longDescription: 'common:expertise.items.fintech.long-description',
        href: '/fintech',
        number: 2,
        image: { src: '/images/expertise/fintech.png', width: 240, height: 187 },
        projectsCount: '10+',
        caseStudies: '6',
        services: 'common:expertise.items.fintech.services',
    },
    {
        title: 'common:expertise.items.healthcare.title',
        description: 'common:expertise.items.healthcare.description',
        longDescription: 'common:expertise.items.healthcare.long-description',
        href: '/healthcare',
        number: 3,
        image: { src: '/images/expertise/healthcare.png', width: 245, height: 184 },
        projectsCount: '10+',
        caseStudies: '4',
        services: 'common:expertise.items.healthcare.services',
    },
    {
        title: 'common:expertise.items.edtech.title',
        description: 'common:expertise.items.edtech.description',
        longDescription: 'common:expertise.items.edtech.long-description',
        href: '/edtech',
        number: 4,
        image: { src: '/images/expertise/edtech.png', width: 144, height: 182 },
        projectsCount: '10+',
        caseStudies: '2',
        services: 'common:expertise.items.edtech.services',
    },
    {
        title: 'common:expertise.items.sport.title',
        description: 'common:expertise.items.sport.description',
        longDescription: 'common:expertise.items.sport.long-description',
        href: '/sport',
        number: 5,
        image: { src: '/images/expertise/sport.png', width: 243, height: 172 },
        projectsCount: '10+',
        caseStudies: '2',
        services: 'common:expertise.items.sport.services',
    },
    {
        title: 'common:expertise.items.energetics.title',
        description: 'common:expertise.items.energetics.description',
        longDescription: 'common:expertise.items.energetics.long-description',
        href: '/energetics',
        number: 6,
        image: { src: '/images/expertise/energetics.png', width: 209, height: 194 },
        projectsCount: '10+',
        caseStudies: '6',
        services: 'common:expertise.items.energetics.services',
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
