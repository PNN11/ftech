import { cn } from '@/lib/classNames'
import { ComponentProps, forwardRef, useId } from 'react'

type InputSize = 'l' | 'm' | 's'

type TextAreaProps = ComponentProps<'textarea'> & {
    inputSize?: InputSize
    label?: string
}

// eslint-disable-next-line react/display-name
const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ className = '', inputSize = 'm', value, label, id = '', ...props }, ref) => {
        const _id = useId()
        const inputId = `${id}-${_id}`

        return (
            <div>
                {label && (
                    <label className="mb-2.5 block text-base leading-none text-gray-700" htmlFor={inputId}>
                        {label}
                    </label>
                )}
                <textarea
                    className={cn(
                        `w-full rounded-xl border border-gray-200 bg-gray-50 leading-none tracking-h2 text-gray-600 shadow-input-default
                    outline-none hover:border-gray-500 hover:text-gray-750 hover:shadow-input-hover focus-visible:border-gray-350
                     focus-visible:text-gray-900 focus-visible:shadow-input-hover disabled:border-none disabled:bg-gray-200 disabled:text-gray-500 dark:bg-blue-200`,

                        {
                            'h-32 px-4.25 py-4.5 text-1xl': inputSize === 'l',
                            'h-21 px-3.5 text-xl': inputSize === 'm',
                            'h-18 px-3.25 text-base': inputSize === 's',
                        },
                        {
                            'border-transparent text-gray-700': !!value,
                        },

                        className
                    )}
                    value={value}
                    id={inputId}
                    {...props}
                    ref={ref}
                />
            </div>
        )
    }
)

export default TextArea
