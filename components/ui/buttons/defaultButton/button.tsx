import { cn } from '@/lib/classNames'

import { ComponentProps, FC } from 'react'

type ButtonVariant = 'contained' | 'outlined'
type ButtonSize = 's' | 'm' | 'l'

type ButtonColor = 'primary' | 'secondary'

type ButtonProps = ComponentProps<'button'> & {
    variant?: ButtonVariant
    size?: ButtonSize
    color?: ButtonColor
}

const Button: FC<ButtonProps> = ({
    size = 'm',
    variant = 'contained',
    className = '',
    children,
    type = 'button',
    color = 'primary',
    ...props
}) => {
    return (
        <button
            type={type}
            className={cn(
                `inline-flex items-center justify-center whitespace-nowrap leading-none tracking-h2 shadow-button`,
                {
                    'h-8 rounded-2.5 px-3.25 text-base': size === 's',
                    'h-12 rounded-xl px-6.5 text-1xl': size === 'm',
                    'h-14.5 rounded-xl px-9.5 text-2xl': size === 'l',
                },
                {
                    'border-t-2 border-t-gray-750 bg-gray-900 text-white-10 dark:border-t-blue-600 dark:bg-blue-900 dark:hover:bg-primary-blue dark:active:bg-blue-1000':
                        variant === 'contained' && color === 'primary',
                    'border-t-2 border-t-gray-350 bg-white-100 text-gray-1000 dark:border-t-blue-350 dark:text-blue-1000':
                        variant === 'contained' && color === 'secondary',
                    'border-2 border-gray-900 text-gray-900 dark:border-blue-900 dark:text-blue-900':
                        variant === 'outlined' && color === 'primary',
                },

                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
