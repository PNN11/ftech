import React, { FC, ReactNode } from 'react'
import MenuItem from './MenuItem'
import ChevronUp from '@/components/svg/ChevronUp'
import { cn } from '@/lib/classNames'

type MenuItemDropdownProps = {
    title: string
    children: ReactNode
    href: string
}

const MenuItemDropdown: FC<MenuItemDropdownProps> = ({ title, children, href }) => {
    return (
        <div className="group">
            <MenuItem href={href} className="flex items-center gap-1.5 py-1 pr-2">
                <span>{title}</span>
                <div className="flex h-6 w-6 items-center justify-center">
                    <ChevronUp className={cn('rotate-180 text-gray-600 group-hover:rotate-0')} />
                </div>
            </MenuItem>
            <div className="absolute left-0 hidden w-full group-hover:block lg:top-[calc(100%-0.875rem)] xl:top-[calc(100%-1rem)]">
                {children}
            </div>
        </div>
    )
}

export default MenuItemDropdown
