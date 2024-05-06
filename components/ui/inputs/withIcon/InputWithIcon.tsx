import React, { ComponentProps, FC } from 'react'
import Input from '../defaultInput/input'
import { cn } from '@/lib/classNames'
import Arrow from '@/components/svg/Arrow'

type InputWithIconProps = ComponentProps<typeof Input> & {
    Icon?: FC<ComponentProps<'svg'>>
    iconClassName?: string
    onIconClick?: () => void
}

const InputWithIcon: FC<InputWithIconProps> = ({
    Icon = Arrow,
    onIconClick,
    iconClassName,
    inputSize = 'm',
    ...props
}) => {
    return (
        <div className="relative">
            <Input
                className={cn('w-full', {
                    'pr-15': inputSize === 'l',
                    'pr-14.5': inputSize === 'm',
                    'pr-14': inputSize === 's',
                })}
                inputSize={inputSize}
                {...props}
            />
            <Icon
                onClick={onIconClick}
                className={cn(
                    'absolute right-5.5 h-5.5 w-5.5 text-gray-900 dark:text-blue-900',
                    {
                        'cursor-pointer': !!onIconClick,
                        'bottom-1.25': inputSize === 's',
                        'bottom-3.25': inputSize === 'm',
                        'bottom-4.5': inputSize === 'l',
                    },
                    iconClassName
                )}
            />
        </div>
    )
}

export default InputWithIcon
