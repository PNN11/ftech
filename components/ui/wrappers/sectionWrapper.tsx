import { cn } from '@/lib/classNames'
import { ComponentProps, FC } from 'react'

type SectionWrapperProps = ComponentProps<'section'> & { variant?: 'm' }

const SectionWrapper: FC<SectionWrapperProps> = ({ children, className, variant = 'm', ...props }) => {
    return (
        <section
            className={cn(
                {
                    'py-10 xl:py-12.5': variant === 'm',
                },
                className
            )}
            {...props}
        >
            {children}
        </section>
    )
}

export default SectionWrapper
