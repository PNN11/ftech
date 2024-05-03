import React, { FC, useState } from 'react'
import { FAQItem } from './data'
import Accordion from '@/components/ui/accordion'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import MinusCircle from '@/components/svg/MinusCircle'
import PlusCircle from '@/components/svg/PlusCircle'
import { cn } from '@/lib/classNames'

type FaqItemProps = FAQItem & {
    classes?: {
        wrapper?: string
    }
}

const FaqItem: FC<FaqItemProps> = ({ answer, question, classes }) => {
    const [isOpened, setIsOpened] = useState(false)
    return (
        <div className={cn(classes?.wrapper)}>
            <div
                onClick={() => setIsOpened(prev => !prev)}
                className="flex cursor-pointer items-center justify-between gap-4 text-gray-900 dark:text-blue-900"
            >
                <Heading variant="h5">{question}</Heading>
                {isOpened ? <MinusCircle /> : <PlusCircle />}
            </div>
            <Accordion open={isOpened}>
                <Paragraph className="mt-4.5" variant="p2">
                    {answer}
                </Paragraph>
            </Accordion>
        </div>
    )
}

export default FaqItem
