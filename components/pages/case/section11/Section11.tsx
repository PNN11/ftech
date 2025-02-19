import ArrowLineUpRight from '@/components/svg/ArrowLineUpRight'
import Tab from '@/components/ui/Tab'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import { TService } from '@/types/common'
import Link from 'next/link'
import React, { FC } from 'react'

type Section11Props = {
    title: string
    description?: string
    subtitle?: string
    services: { title: string; href: TService }[]
}

const Section11: FC<Section11Props> = ({ description, services, title }) => {
    return (
        <section className="py-12.5">
            <TitleWithDescription
                classes={{ wrapper: 'mb-6.25 max-w-203.5' }}
                title={title}
                description={description}
            />
            <ul className="flex flex-wrap items-center justify-center gap-2">
                {services.map(({ href, title }) => (
                    <li key={title}>
                        <Link href={`/service/${href}`}>
                            <Tab className="gap-2.5">
                                {title} <ArrowLineUpRight />
                            </Tab>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Section11
