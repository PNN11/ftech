import Warning from '@/components/svg/Warning'
import { cn } from '@/lib/classNames'
import { ComponentProps, forwardRef, useId } from 'react'
import Paragraph from '../../typography/paragraph'

type InputSize = 'l' | 'm' | 's'

type InputProps = ComponentProps<'input'> & {
    inputSize?: InputSize
    label?: string
    error?: string
}

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className = '', inputSize = 'm', value, label, id = '', error, ...props }, ref) => {
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
                        `w-full rounded-xl border border-gray-200 bg-gray-50 leading-none tracking-h2 text-gray-600 shadow-input-default
                    outline-none hover:border-gray-500 hover:text-gray-750 hover:shadow-input-hover focus-visible:border-gray-350
                     focus-visible:text-gray-900 focus-visible:shadow-input-hover disabled:border-none disabled:bg-gray-200 disabled:text-gray-500 dark:bg-blue-200`,

                        {
                            'h-14.5 px-4.25 text-1xl': inputSize === 'l',
                            'h-12 px-3.5 text-xl': inputSize === 'm',
                            'h-8 px-3.25 text-base': inputSize === 's',
                        },
                        {
                            'border-transparent text-gray-700': !!value,
                        },
                        { 'border-error hover:border-error': !!error },

                        className
                    )}
                    value={value}
                    id={inputId}
                    {...props}
                    ref={ref}
                />
                {!!error && (
                    <div className="mt-2 flex items-center gap-3">
                        <Warning className="text-error" />
                        <Paragraph className="text-error" variant="subt">
                            {error}
                        </Paragraph>
                    </div>
                )}
            </div>
        )
    }
)

export default Input
