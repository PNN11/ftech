import { cn } from '@/lib/classNames'
import { ComponentProps, FC } from 'react'

type HeadingProps = ComponentProps<'h1'> & {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
}

const variantTags = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h5',
} as const

const Heading: FC<HeadingProps> = ({ variant, className = '', children, tag, ...props }) => {
    const Element = tag ?? variantTags[variant]

    return (
        <Element
            {...props}
            className={cn(
                {
                    'tracking-h2 text-9xl font-medium leading-none text-gray-1000 dark:text-dark-blue-1000':
                        variant === 'h1',
                    'tracking-h2 text-8.2xl font-medium leading-none text-gray-900 dark:text-dark-blue-900':
                        variant === 'h2',
                    'tracking-h4 text-7xl font-medium leading-none text-gray-900 dark:text-dark-blue-900':
                        variant === 'h3',
                    'tracking-h4 text-6xl font-medium leading-none text-gray-900 dark:text-dark-blue-900':
                        variant === 'h4',
                    'text-4xl font-medium leading-[0.9] tracking-[2%] text-gray-900 dark:text-dark-blue-900':
                        variant === 'h5',
                    'text-2xl leading-[0.9] text-gray-900 dark:text-dark-blue-900': variant === 'h6',
                },
                className
            )}
        >
            {children}
        </Element>
    )
}

export default Heading
