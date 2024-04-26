import { cn } from '@/lib/classNames'
import { ComponentProps, FC } from 'react'

const ReviewWrapper: FC<ComponentProps<'div'>> = ({ children, className, ...props }) => {
    return (
        <div
            className={cn(
                'rounded-2.25 flex items-center border border-gray-200 bg-gray-100 px-3.5 py-1.5 text-gray-900',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export default ReviewWrapper
