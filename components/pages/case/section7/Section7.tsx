import TitleWithDescription from '@/components/ui/TitleWithDescription'
import { cn } from '@/lib/classNames'
import React, { ComponentProps, FC } from 'react'

type Section7Props = ComponentProps<typeof TitleWithDescription> & {
    position?: 'left' | 'center'
}

const Section7: FC<Section7Props> = ({ position = 'center', ...props }) => {
    return (
        <section className="py-12.5">
            <TitleWithDescription
                classes={{ wrapper: cn({ 'max-w-full text-left': position === 'left' }) }}
                {...props}
            />
        </section>
    )
}

export default Section7
