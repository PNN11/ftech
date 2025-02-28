import { cn } from '@/lib/classNames'
import { ComponentProps, FC } from 'react'

const BackgroundBlur: FC<ComponentProps<'div'>> = ({ className, children, ...props }) => {
    return (
        <div className={cn('relative', className)} {...props}>
            <div className="absolute inset-0 transition-all duration-500 dark:bg-white-100/90 dark:blur" />
            <div className="relative z-[2]">{children}</div>
        </div>
    )
}

export default BackgroundBlur
