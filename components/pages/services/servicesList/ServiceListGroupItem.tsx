'use client'
import MinusCircle from '@/components/svg/MinusCircle'
import PlusCircle from '@/components/svg/PlusCircle'
import Accordion from '@/components/ui/accordion'
import Heading from '@/components/ui/typography/heading'
import React, { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ServiceListItem from './ServiceListItem'
import { cn } from '@/lib/classNames'

type ServiceListGroupItemProps = {
    title: string
    items: { href: string; serviceKey: string; number: string }[]
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
}

const ServiceListGroupItem: FC<ServiceListGroupItemProps> = ({ Icon, items, title }) => {
    const [open, setOpen] = useState(false)
    const { t } = useTranslation()

    return (
        <li className={cn('rounded-t-xl bg-gray-50', { 'mb-2 rounded-b-3xl': open })}>
            <div
                onClick={() => setOpen(prev => !prev)}
                className={cn(
                    'flex cursor-pointer items-center justify-between rounded-t-xl border-x border-t border-gray-900 px-5 pb-3 pt-4 shadow-button',
                    { 'mb-2': open }
                )}
            >
                <div className="flex items-center gap-8">
                    <Icon className="h-5.5 w-5.5 text-gray-600" />
                    <Heading variant="h6">{t(`services:services-list.groups.${title}`)}</Heading>
                </div>
                {open ? <MinusCircle /> : <PlusCircle />}
            </div>
            <Accordion open={open}>
                <ul className="space-y-2">
                    {items.map(item => (
                        <ServiceListItem key={item.href} {...item} />
                    ))}
                </ul>
            </Accordion>
        </li>
    )
}

export default ServiceListGroupItem
