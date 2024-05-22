import { cn } from '@/lib/classNames'
import { ComponentProps, FC } from 'react'

type FeatureCardWrapperProps = ComponentProps<'div'>

const FeatureCardWrapper: FC<FeatureCardWrapperProps> = ({ children, className, ...props }) => {
    return (
        <div
            className={cn(
                'relative max-w-48 rounded-8 bg-white-10 px-3 py-7 shadow-button outline outline-1 outline-gray-200 sm:px-6',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export default FeatureCardWrapper
