'use client'
import AppWindow from '@/components/svg/AppWindow'
import Cloud from '@/components/svg/Cloud'
import DatabaseIcon from '@/components/svg/DatabaseIcon'
import SketchLogo from '@/components/svg/SketchLogo'
import Terminal from '@/components/svg/Terminal'
import UsersFour from '@/components/svg/UsersFour'
import React, { FC } from 'react'
import ServiceListGroupItem from './ServiceListGroupItem'

const serviceList = [
    {
        title: 'software-development',
        items: [
            { href: '/web-development', serviceKey: 'web-development', number: '01' },
            { href: '/mobile-development', serviceKey: 'mobile-development', number: '02' },
        ],
        Icon: AppWindow,
    },
    {
        title: 'software-testing',
        items: [
            { href: '/software-testing', serviceKey: 'software-testing', number: '03' },
            { href: '/manual-testing', serviceKey: 'manual-testing', number: '04' },
        ],
        Icon: Terminal,
    },
    {
        title: 'design',
        items: [{ href: '/design', serviceKey: 'design', number: '05' }],
        Icon: SketchLogo,
    },
    {
        title: 'ai',
        items: [{ href: '/ai-development', serviceKey: 'ai-development', number: '06' }],
        Icon: DatabaseIcon,
    },
    {
        title: 'cloud',
        items: [
            { href: '/cloud-and-platform', serviceKey: 'cloud-platform', number: '07' },
            { href: '/devops', serviceKey: 'devops', number: '08' },
        ],
        Icon: Cloud,
    },
    {
        title: 'cooperations',
        items: [
            { href: '/staff-augmentation', serviceKey: 'staff-augmentation', number: '09' },
            { href: '/outsourcing', serviceKey: 'outsourcing', number: '10' },
            { href: '/dedicated-teams', serviceKey: 'dedicated-teams', number: '11' },
        ],
        Icon: UsersFour,
    },
]

const ServicesList: FC = () => {
    return (
        <ul className="">
            {serviceList.map(item => (
                <ServiceListGroupItem key={item.title} {...item} />
            ))}
        </ul>
    )
}

export default ServicesList
