import { cn } from '@/lib/classNames'
import React, { ComponentProps, FC } from 'react'

type ParagraphProps = ComponentProps<'p'> & {
    variant: 'p1' | 'p2' | 'p3' | 'subt'
}

const Paragraph: FC<ParagraphProps> = ({ variant, className = '', children, ...props }) => {
    return (
        <p
            className={cn(
                {
                    'tracking-h2 text-xl leading-[1.3] text-gray-500 dark:text-dark-blue-500': variant === 'p1',
                    'tracking-h2 text-base leading-[1.1] text-gray-700 dark:text-dark-blue-700': variant === 'p2',
                    'text-sm leading-[1.2] tracking-[2%] text-gray-700 dark:text-dark-blue-700': variant === 'p3',
                    'text-base leading-none text-gray-600 dark:text-blue-900': variant === 'subt',
                },
                className
            )}
            {...props}
        >
            {children}
        </p>
    )
}

export default Paragraph
