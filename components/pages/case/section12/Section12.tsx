import Paragraph from '@/components/ui/typography/paragraph'
import { cn } from '@/lib/classNames'
import Image from 'next/image'
import React, { FC } from 'react'

type Section12Props = {
    image: string
    alt?: string
    capture?: string
    size?: '600' | '416' | '296'
}

const Section12: FC<Section12Props> = ({ image, alt = '', size = '600', capture }) => {
    return (
        <section className="py-6.25">
            <Image
                src={image}
                alt={alt}
                width={1192}
                height={size}
                className={cn('rounded-8 border border-gray-100')}
                quality={100}
            />
            {capture && (
                <Paragraph className="mt-4 text-center" variant="subt">
                    {capture}
                </Paragraph>
            )}
        </section>
    )
}

export default Section12
