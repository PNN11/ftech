import { neueMontreal } from '@/fonts'
import { cn } from '@/lib/classNames'
import React, { ComponentProps, FC } from 'react'

type TabProps = ComponentProps<'div'> & {
    isActive?: boolean
}

const Tab: FC<TabProps> = ({ children, className, isActive = false, ...props }) => {
    return (
        <div
            className={cn(
                `hover-bg-gray-300 inline-flex h-8 w-fit cursor-pointer items-center whitespace-nowrap rounded-2.5 border-t-2
                 border-t-transparent bg-gray-100 px-3.25 text-center text-base leading-none tracking-h2 text-gray-900`,
                {
                    'border-t-gray-750 bg-primary-gray text-white-10 dark:border-t-blue-600 dark:bg-primary-blue':
                        isActive,
                },
                className,
                neueMontreal.className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export default Tab
