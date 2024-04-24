import React, { ComponentProps, FC } from 'react'
import Button from '../defaultButton/button'
import Arrow from '@/components/svg/Arrow'
import { cn } from '@/lib/classNames'

type ButtonWithIconProps = ComponentProps<typeof Button> & {
    Icon?: FC<ComponentProps<'svg'>>
    iconClassName?: string
}

const ButtonWithIcon: FC<ButtonWithIconProps> = ({
    size,
    children,
    Icon = Arrow,
    iconClassName,
    className,
    ...props
}) => {
    return (
        <Button
            size={size}
            {...props}
            className={cn(
                '',
                {
                    'gap-6 pr-7.5': size === 'l',
                    'gap-5 pr-5.5': size === 'm',
                    'gap-2 pr-3.25': size === 's',
                },
                className
            )}
        >
            {children}
            <Icon
                className={cn(
                    {
                        'h-8 w-8': size === 'l',
                        'h-5.5 w-5.5': size === 's',
                        'h-6.5 w-6.5': size === 'm',
                    },

                    iconClassName
                )}
            />
        </Button>
    )
}

export default ButtonWithIcon
