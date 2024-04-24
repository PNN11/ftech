import { cn } from '@/lib/classNames'
import { ComponentProps, FC } from 'react'

const VerticalDashedLine: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
    return <div className={cn('absolute w-0 border-l-2 border-dashed border-l-gray-100', className)} {...props} />
}

export default VerticalDashedLine
