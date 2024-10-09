import { cn } from '@/lib/classNames'
import React, { ComponentProps, FC } from 'react'

type CaseButtonProps = ComponentProps<'button'> & {
    colorTone?: 'dark' | 'light'
}

const CaseButton: FC<CaseButtonProps> = ({ children, className, colorTone, ...props }) => {
    return (
        <button
            type="button"
            className={cn(
                'inline-flex h-10 items-center justify-center rounded-xl px-5 text-lg leading-none tracking-h2',
                {
                    'bg-gray-900 text-white-10': colorTone === 'dark',
                    'bg-primary-white text-[#1F1F1F]': colorTone === 'light',
                },
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}

export default CaseButton
