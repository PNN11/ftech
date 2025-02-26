import ChevronUp from '@/components/svg/ChevronUp'
import Accordion from '@/components/ui/accordion'
import { useWindowSize } from '@/hooks/useWindowSize'
import { cn } from '@/lib/classNames'
import { ScreenWidths } from '@/types/common'
import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import MenuItem from './MenuItem'
import { usePathname } from 'next/navigation'

type MenuItemDropdownProps = {
    title: string
    children: ReactNode
    href: string
}

const MenuItemDropdown: FC<MenuItemDropdownProps> = ({ title, children, href }) => {
    const [isOpen, setIsOpen] = useState(false)
    const { width } = useWindowSize()
    const pathname = usePathname()
    const wrapper = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = wrapper.current
        setIsOpen(false)
        element?.classList.add('pointer-events-none')
        return () => element?.classList.remove('pointer-events-none')
    }, [pathname])

    return (
        <div
            onMouseEnter={() => {
                wrapper.current?.classList.remove('pointer-events-none')
            }}
        >
            <div ref={wrapper} className="group w-full lg:w-auto">
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
                <div className="absolute -inset-x-px hidden lg:top-[calc(100%-0.875rem)] group-hover:lg:block xl:top-[calc(100%-1rem)]">
                    <div className="pt-5.25">{children}</div>
                </div>
                <Accordion className="lg:hidden" open={isOpen}>
                    {children}
                </Accordion>
            </div>
        </div>
    )
}

export default MenuItemDropdown
