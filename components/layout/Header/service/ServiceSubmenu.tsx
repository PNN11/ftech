'use client'
import { FC, SVGProps } from 'react'
import { useTranslation } from 'react-i18next'
import MenuItemDropdown from '../MenuItemDropdown'
import AppWindow from '@/components/svg/AppWindow'
import SubMenuGroup from '../subMenu/SubMenuGroup'
import Terminal from '@/components/svg/Terminal'
import UsersFour from '@/components/svg/UsersFour'
import VerticalDashedLine from '../VerticalDashedLine'
import { SubMenuItemProps } from '../subMenu/SubMenuItem'
import { SubMenuItemWithListProps } from '../subMenu/SubMenuItemWithList'
import { TService } from '@/types/common'

type ServiceDropdownData = Record<
    string,
    {
        groupTitle?: string
        groupItems: (
            | {
                  title: string
                  description: string
                  href: `/service/${TService}`
              }
            | {
                  title: string
                  description: {
                      text: string
                      href: `/service/${TService}`
                  }[]
              }
        )[]
        groupIcon?: FC<SVGProps<SVGSVGElement>>
    }
>

const services: ServiceDropdownData = {
    softwareDevelopment: {
        groupTitle: 'common:service.software-development',
        groupItems: [
            {
                title: 'common:service.product-development.title',
                description: [
                    { href: '/service/backend-development', text: 'common:service.backend-development.title' },
                    { href: '/service/frontend-development', text: 'common:service.frontend-development.title' },
                    { href: '/service/mobile-development', text: 'common:service.mobile-development.title' },
                    { href: '/service/devops', text: 'common:service.devops.title' },
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
                    { href: '/service/quality-assurance', text: 'common:service.quality-assurance.title' },
                    { href: '/service/quality-assurance', text: 'common:service.manual-testing.title' },
                ],
            },
        ],
        groupIcon: Terminal,
    },
    common: {
        groupItems: [
            {
                title: 'common:service.design.title',
                description: 'common:service.design.description',
                href: '/service/design',
            },
            {
                title: 'common:service.ai-development.title',
                description: 'common:service.ai-development.description',
                href: '/service/ai-development',
            },
            {
                title: 'common:service.third-party-services.title',
                description: 'common:service.third-party-services.description',
                href: '/service/third-party-services',
            },
            {
                title: 'common:service.business-analysis.title',
                description: 'common:service.business-analysis.description',
                href: '/service/business-analysis',
            },
        ],
    },
    cooperations: {
        groupTitle: 'common:service.cooperations',
        groupItems: [
            {
                title: 'common:service.client-team-extension.title',
                description: 'common:service.client-team-extension.description',
                href: '/service/client-team-extension',
            },
            {
                title: 'common:service.outsourcing.title',
                description: 'common:service.outsourcing.description',
                href: '/service/outsourcing',
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
