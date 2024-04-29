import React, { ComponentProps, FC } from 'react'
import { cn } from '@/lib/classNames'

type ContainerProps = ComponentProps<'div'> & {
    size?: 'm'
}

const Container: FC<ContainerProps> = ({ className = '', children, size = 'm', ...props }) => {
    return (
        <div
            className={cn(
                `mx-auto`,
                { 'max-w-320 px-4 sm:px-6 md:px-7 xl:px-11': size === 'm' },

                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export default Container
