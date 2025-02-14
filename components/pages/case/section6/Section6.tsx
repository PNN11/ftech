'use client'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Image from 'next/image'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

type CaseSection6Props = {
    title?: string
    cards: { title: string; image: string }[]
}

const CaseSection6: FC<CaseSection6Props> = ({ title, cards }) => {
    const { t } = useTranslation('case')

    return (
        <section className="py-12.5">
            <Heading className="mb-10.5 text-center" variant="h5">
                {title ?? t('tech-stack')}
            </Heading>
            <ul className="grid grid-cols-1 flex-wrap items-center justify-center gap-2 sm:grid-cols-2 2sm:flex">
                {cards.map(({ image, title }) => (
                    <li
                        className="flex flex-col items-center gap-2.5 rounded-3xl bg-gray-50 p-3 2sm:max-w-48"
                        key={title}
                    >
                        <Image
                            src={image}
                            alt={title}
                            width={168}
                            height={64}
                            quality={100}
                            className="h-16 object-contain"
                        />
                        <Paragraph variant="subt">{title}</Paragraph>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default CaseSection6
