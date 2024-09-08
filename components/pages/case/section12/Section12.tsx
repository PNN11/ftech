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
                className={cn('rounded-8 border border-gray-100 object-cover', {
                    'md:h-106.25 lg:h-123.75 h-60 xl:h-150': size === '600',
                    'lg:h-81.25 h-60 md:h-75 xl:h-104': size === '416',
                    'lg:h-61 h-50 md:h-55 xl:h-74': size === '296',
                })}
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
