import { cn } from '@/lib/classNames'
import { ComponentProps, FC } from 'react'

type SubMenuItemDescriptionProps = ComponentProps<'p'>

const SubMenuItemDescription: FC<SubMenuItemDescriptionProps> = ({ children, className, ...props }) => {
    return (
        <p className={cn('text-xs leading-none text-gray-600', className)} {...props}>
            {children}
        </p>
    )
}

export default SubMenuItemDescription
