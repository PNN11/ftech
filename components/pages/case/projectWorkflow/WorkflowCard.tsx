import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { cn } from '@/lib/classNames'
import { formatNumber } from '@/lib/formatNumber'
import { FC, ReactNode } from 'react'

type WorkflowCardProps = {
    number: number
    title: string
    description: string
    classes?: {
        wrapper?: string
        title?: string
    }
    children?: ReactNode
}

const WorkflowCard: FC<WorkflowCardProps> = ({ classes, description, number, title, children }) => {
    return (
        <div className={cn('rounded-8 border border-gray-200 bg-white-10 px-7 py-6', classes?.wrapper)}>
            <Paragraph className="mb-1.75" variant="subt">
                {formatNumber(number, { minimumIntegerDigits: 2 })}
            </Paragraph>
            <Heading className={cn('mb-3', classes?.title)} variant="h5">
                {title}
            </Heading>
            <Paragraph variant="p1">{description}</Paragraph>
            {children}
        </div>
    )
}

export default WorkflowCard
