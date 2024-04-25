'use client'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import MenuItemDropdown from '../MenuItemDropdown'
import AppWindow from '@/components/svg/AppWindow'
import SubMenuGroup from '../subMenu/SubMenuGroup'
import Terminal from '@/components/svg/Terminal'
import UsersFour from '@/components/svg/UsersFour'
import VerticalDashedLine from '../VerticalDashedLine'

const services = {
    softwareDevelopment: {
        groupTitle: 'common:service.software-development',
        groupItems: [
            {
                title: 'common:service.product-development.title',
                description: [
                    { href: '/web-development', text: 'common:service.product-development.description.0' },
                    { href: '/mobile-development', text: 'common:service.product-development.description.1' },
                ],
            },
        ],
        groupIcon: AppWindow,
    },
    softwareTesting: {
        groupTitle: 'common:service.software-testing',
        groupItems: [
            {
                title: 'common:service.qa.title',
                description: [
                    { href: '/manual-testing', text: 'common:service.qa.description.0' },
                    { href: '/software-testing', text: 'common:service.qa.description.1' },
                ],
            },
        ],
        groupIcon: Terminal,
    },
    common: {
        groupItems: [
            { title: 'common:service.design.title', description: 'common:service.design.description', href: '/design' },
            {
                title: 'common:service.ai-development.title',
                description: 'common:service.ai-development.description',
                href: '/ai-development',
            },
            {
                title: 'common:service.cloud-infrastructure.title',
                description: [
                    { href: '/devops', text: 'common:service.cloud-infrastructure.description.0' },
                    { href: '/cloud-and-platform', text: 'common:service.cloud-infrastructure.description.1' },
                ],
            },
        ],
    },
    cooperations: {
        groupTitle: 'common:service.cooperations',
        groupItems: [
            {
                title: 'common:service.staff-augmentation.title',
                description: 'common:service.staff-augmentation.description',
                href: '/staff-augmentation',
            },
            {
                title: 'common:service.outsourcing.title',
                description: 'common:service.outsourcing.description',
                href: '/outsourcing',
            },
            {
                title: 'common:service.dedicated-teams.title',
                description: 'common:service.dedicated-teams.description',
                href: '/dedicated-teams',
            },
        ],
        groupIcon: UsersFour,
    },
}

const ServiceSubmenu: FC = () => {
    const { t } = useTranslation()
    return (
        <MenuItemDropdown title={t('common:header.service')} href="/service">
            <div
                className="relative grid w-full gap-x-15 gap-y-7 rounded-2xl bg-white-300 px-6.5 py-3 md:grid-cols-2 md:px-11.5 lg:grid-cols-3
                 lg:border lg:border-gray-200 lg:py-6.5 xl:grid-cols-4"
            >
                <VerticalDashedLine className="bottom-4 left-0 top-4 lg:bottom-5 lg:left-5 xl:bottom-7.5" />
                <VerticalDashedLine className="bottom-4 top-4 hidden md:left-1/2 md:block lg:bottom-5 lg:left-1/3 xl:bottom-7.5 xl:left-1/4" />
                <VerticalDashedLine className="bottom-4 top-4 hidden lg:bottom-5 lg:left-2/3 lg:block xl:bottom-7.5 xl:left-1/2" />
                <VerticalDashedLine className="top-4 hidden xl:bottom-7.5 xl:left-3/4 xl:block" />

                <SubMenuGroup {...services.softwareDevelopment} />
                <SubMenuGroup className="md:order-2 lg:order-1 xl:order-none" {...services.softwareTesting} />
                <SubMenuGroup className="md:order-1 lg:order-none" {...services.common} />
                <SubMenuGroup className="md:order-3 lg:order-none" {...services.cooperations} />
            </div>
        </MenuItemDropdown>
    )
}

export default ServiceSubmenu
