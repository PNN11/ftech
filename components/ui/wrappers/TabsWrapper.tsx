import { cn } from '@/lib/classNames'
import { ComponentProps, FC } from 'react'

const TabsWrapper: FC<ComponentProps<'div'>> = ({ children, className, ...props }) => {
    return (
        <div
            className={cn(
                `hidden-scroll mx-auto flex w-fit max-w-full items-center gap-1 overflow-auto rounded-2.5
                   border border-gray-300 bg-white-10 p-2 shadow-button dark:bg-white-300`,
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export default TabsWrapper
