import { cn } from '@/lib/classNames'
import Link from 'next/link'
import React, { ComponentProps, FC, ReactNode } from 'react'

type MenuItemProps = ComponentProps<typeof Link>

const MenuItem: FC<MenuItemProps> = ({ children, href, className, ...props }) => {
    return (
        <Link href={href} className={cn('px-4 text-base leading-none text-gray-900', className)} {...props}>
            {children}
        </Link>
    )
}

export default MenuItem
