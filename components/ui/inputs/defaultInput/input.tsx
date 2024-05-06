import { cn } from '@/lib/classNames'
import { ComponentProps, FC, useId } from 'react'

type InputSize = 'l' | 'm' | 's'

type InputProps = ComponentProps<'input'> & {
    inputSize?: InputSize
    label?: string
}

const Input: FC<InputProps> = ({ className = '', width, inputSize = 'm', value, label, id = '', ...props }) => {
    const _id = useId()
    const inputId = `${id}-${_id}`

    return (
        <div>
            {label && (
                <label className="mb-2.5 block text-base leading-none text-gray-700" htmlFor={inputId}>
                    {label}
                </label>
            )}
            <input
                className={cn(
                    `rounded-xl border border-gray-200 bg-gray-50 leading-none tracking-h2 text-gray-600 outline-none hover:border-gray-500
                    hover:text-gray-750 focus-visible:border-gray-350 focus-visible:text-gray-900 disabled:border-none disabled:bg-gray-200
                     disabled:text-gray-500 dark:bg-blue-200`,

                    {
                        'h-14.5 px-4.25 text-1xl': inputSize === 'l',
                        'h-12 px-3.5 text-xl': inputSize === 'm',
                        'h-8 px-3.25 text-base': inputSize === 's',
                    },
                    {
                        'border-transparent text-gray-700': !!value,
                    },

                    className
                )}
                value={value}
                id={inputId}
                {...props}
            />
        </div>
    )
}

export default Input
