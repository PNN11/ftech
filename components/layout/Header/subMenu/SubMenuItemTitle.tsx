import { cn } from '@/lib/classNames'
import { ComponentProps, FC } from 'react'

type SubMenuItemTitleProps = ComponentProps<'h5'>

const SubMenuItemTitle: FC<SubMenuItemTitleProps> = ({ children, className, ...props }) => {
    return (
        <h5 className={cn('text-base leading-none text-gray-900', className)} {...props}>
            {children}
        </h5>
    )
}

export default SubMenuItemTitle
