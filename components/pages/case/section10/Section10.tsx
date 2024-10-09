import TitleWithDescription from '@/components/ui/TitleWithDescription'
import Image, { ImageProps } from 'next/image'
import React, { ComponentProps, FC } from 'react'
type Section10Props = {
    title: string
    description?: string
    subtitle?: string
    imageProps: { src: string; width?: number; height?: number }
    imageTitle: string
    imageDescription: string
}

const Section10: FC<Section10Props> = ({ imageProps, imageTitle, imageDescription, title, description, subtitle }) => {
    return (
        <section className="py-12.5">
            <TitleWithDescription
                title={title}
                subtitle={subtitle}
                description={description}
                classes={{ wrapper: 'text-left max-w-full mb-14.5' }}
            />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="flex items-center justify-center rounded-8 border border-gray-350 bg-gray-50 px-4 py-25 xl:py-17">
                    <Image src={imageProps.src} alt={title} width={imageProps.width} height={imageProps.height} />
                </div>
                <TitleWithDescription
                    classes={{ wrapper: 'text-left max-w-full' }}
                    title={imageTitle}
                    description={imageDescription}
                />
            </div>
        </section>
    )
}

export default Section10
