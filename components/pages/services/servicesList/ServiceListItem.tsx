import ButtonWithIcon from '@/components/ui/buttons/withIcon/ButtonWithIcon'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { formatNumber } from '@/lib/formatNumber'
import Link from 'next/link'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

type ServiceListItemProps = {
    serviceKey: string
    href: string
    number: number
}

type ServiceItemData = {
    title: string
    description: string
    short_description: string[]
    tags: string[]
}

const ServiceListItem: FC<ServiceListItemProps> = ({ serviceKey, href, number }) => {
    const { t } = useTranslation()
    const { description, short_description, tags, title } = t(`services:services-list.${serviceKey}`, {
        returnObjects: true,
    }) as ServiceItemData

    return (
        <li
            className="md:min-h-66 grid grid-cols-1 gap-6 rounded-3xl border border-gray-200 bg-white-10 p-5.5
          shadow-button md:grid-cols-2 md:gap-3 md:px-6 md:py-7 lg:min-h-56"
        >
            <div className="flex flex-col justify-between gap-3">
                <Paragraph variant="subt">{formatNumber(number, { minimumIntegerDigits: 2 })}</Paragraph>
                <div>
                    <ul className="mb-6 space-y-1.5">
                        {short_description.map(item => (
                            <li className="list-inside list-disc text-xs leading-none text-gray-700" key={item}>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex flex-wrap items-center gap-2 md:min-h-7.5">
                        {tags.map(tag => (
                            <li
                                className="rounded-lg bg-gray-100 px-3 py-2 text-sm leading-none tracking-h2 text-gray-700"
                                key={tag}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex h-full flex-col justify-center gap-6">
                <Heading variant="h3">{title}</Heading>
                {description && <Paragraph variant="p2">{description}</Paragraph>}
                <Link className="block w-full md:w-fit" href={`/service${href}`}>
                    <ButtonWithIcon className="w-full" size="s">
                        {t('services:services-list.explore-service')}
                    </ButtonWithIcon>
                </Link>
            </div>
        </li>
    )
}

export default ServiceListItem
