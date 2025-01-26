import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { neueMontreal } from '@/fonts'
import { cn } from '@/lib/classNames'
import React, { FC } from 'react'

type ExpertiseStatProps = {
    value: string
    capture: string
    classes?: {
        wrapper?: string
    }
}

const ExpertiseStat: FC<ExpertiseStatProps> = ({ value, capture, classes }) => {
    return (
        <div className={cn('flex w-fit gap-2 rounded-lg bg-gray-200 px-2 py-0.5', classes?.wrapper)}>
            <Heading variant="h5" className="text-[1.125rem] leading-none">
                {value}
            </Heading>
            <Paragraph variant="p2" className="text-sm lowercase">
                {capture}
            </Paragraph>
        </div>
    )
}

export default ExpertiseStat
