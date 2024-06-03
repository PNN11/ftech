import React, { FC, ReactNode, useState } from 'react'
import MenuItem from './MenuItem'
import ChevronUp from '@/components/svg/ChevronUp'
import { cn } from '@/lib/classNames'
import Accordion from '@/components/ui/accordion'
import { useWindowSize } from '@/hooks/useWindowSize'
import { ScreenWidths } from '@/types/common'

type MenuItemDropdownProps = {
    title: string
    children: ReactNode
    href: string
}

const MenuItemDropdown: FC<MenuItemDropdownProps> = ({ title, children, href }) => {
    const [isOpen, setIsOpen] = useState(false)
    const { width } = useWindowSize()

    return (
        <div className="group w-full lg:w-auto">
            <MenuItem
                href={href}
                onClick={e => {
                    width < ScreenWidths.lg && e.preventDefault()
                    setIsOpen(prev => !prev)
                }}
                className={cn(
                    'flex items-center justify-between gap-1.5 py-1 pr-2 group-hover:bg-gray-50 lg:justify-start',
                    { 'bg-gray-50': isOpen }
                )}
            >
                <span>{title}</span>
                <div className="flex h-6 w-6 items-center justify-center">
                    <ChevronUp
                        className={cn('rotate-180 text-gray-600 group-hover:lg:rotate-0', { 'rotate-0': isOpen })}
                    />
                </div>
            </MenuItem>
            <div className="absolute left-0 hidden w-full lg:top-[calc(100%-0.875rem)] group-hover:lg:block xl:top-[calc(100%-1rem)]">
                <div className="pt-5.25">{children}</div>
            </div>
            <Accordion className="lg:hidden" open={isOpen}>
                {children}
            </Accordion>
        </div>
    )
}

export default MenuItemDropdown
