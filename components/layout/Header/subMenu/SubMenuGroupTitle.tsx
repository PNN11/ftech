import { cn } from '@/lib/classNames'
import { ComponentProps, FC } from 'react'

type SubMenuGroupTitleProps = ComponentProps<'h5'> & {
    Icon?: FC<ComponentProps<'svg'>>
    iconClassName?: string
}

const SubMenuGroupTitle: FC<SubMenuGroupTitleProps> = ({ className, children, Icon, iconClassName, ...props }) => {
    return (
        <h5
            className={cn(
                'flex items-center gap-5 text-lg font-medium leading-none tracking-[1%] text-gray-1000',
                className
            )}
            {...props}
        >
            {children}
            {Icon && <Icon className={cn('', iconClassName)} />}
        </h5>
    )
}

export default SubMenuGroupTitle
