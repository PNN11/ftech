import React, { FC } from 'react'
import Paragraph from './typography/paragraph'
import Heading from './typography/heading'
import { cn } from '@/lib/classNames'

type TitleWithDescriptionProps = {
    title: string
    subtitle?: string
    description?: string
    classes?: { title?: string; subtitle?: string; description?: string; wrapper?: string }
}

const TitleWithDescription: FC<TitleWithDescriptionProps> = ({ title, description, subtitle, classes }) => {
    return (
        <div className={cn('max-w-248 mx-auto text-center', classes?.wrapper)}>
            {subtitle && (
                <Paragraph className={cn('mb-5.5', classes?.subtitle)} variant="subt">
                    {subtitle}
                </Paragraph>
            )}
            <Heading className={cn('mb-7', classes?.title)} variant="h2">
                {title}
            </Heading>
            {description && (
                <Paragraph className={classes?.description} variant="p1">
                    {description}
                </Paragraph>
            )}
        </div>
    )
}

export default TitleWithDescription
