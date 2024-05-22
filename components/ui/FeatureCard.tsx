import { FC, ReactNode } from 'react'
import Heading from './typography/heading'
import Paragraph from './typography/paragraph'
import FeatureCardWrapper from './wrappers/FeatureCardWrapper'

type FeatureCardProps = {
    title: string
    description: string
    children?: ReactNode
    classes?: {
        wrapper?: string
        title?: string
        description?: string
    }
}

const FeatureCard: FC<FeatureCardProps> = ({ description, title, children, classes }) => {
    return (
        <FeatureCardWrapper className={classes?.wrapper}>
            <Heading className={`mb-3.5 ${classes?.title}`} variant="h3">
                {title}
            </Heading>
            <Paragraph className={classes?.description} variant="p2">
                {description}
            </Paragraph>
            {children}
        </FeatureCardWrapper>
    )
}

export default FeatureCard
