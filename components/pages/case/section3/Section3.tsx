import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Image from 'next/image'
import React, { FC } from 'react'

type Section3Props = {
    image: string
    title: string
    description: string
}

const Section3: FC<Section3Props> = ({ description, image, title }) => {
    return (
        <section className="flex flex-col gap-6 py-9.5 lg:flex-row lg:items-center lg:justify-end lg:gap-18">
            <Image src={image} alt="" width={188} height={178} />
            <div className="lg:max-w-171">
                <Heading className="mb-4" variant="h5">
                    {title}
                </Heading>
                <Paragraph variant="p1">{description}</Paragraph>
            </div>
        </section>
    )
}

export default Section3
