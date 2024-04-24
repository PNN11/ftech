import { cn } from '@/lib/classNames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ComponentProps, FC, ReactNode } from 'react'

type MenuItemProps = ComponentProps<typeof Link> & {
    isActive?: (path: string) => boolean
}

export const defaultIsActiveMenuItemFunc = (path: string, href: string) => path.includes(href)

const MenuItem: FC<MenuItemProps> = ({
    children,
    href,
    className,
    isActive = defaultIsActiveMenuItemFunc,
    ...props
}) => {
    const pathname = usePathname()
    return (
        <Link
            href={href}
            className={cn(
                'inline-block rounded-2.5 px-4 py-2 text-base leading-none text-gray-900',
                { 'bg-gray-50': isActive(pathname, typeof href === 'string' ? href : (href.pathname as string)) },
                className
            )}
            {...props}
        >
            {children}
        </Link>
    )
}

export default MenuItem
