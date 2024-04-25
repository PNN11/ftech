import React, { FC } from 'react'
import SubMenuItemTitle from './SubMenuItemTitle'
import SubMenuItemDescription from './SubMenuItemDescription'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export type SubMenuItemWithListProps = {
    title: string
    description: { text: string; href: string }[]
}

const SubMenuItemWithList: FC<SubMenuItemWithListProps> = ({ description, title }) => {
    const { t } = useTranslation()

    return (
        <div className="flex flex-col gap-2.5">
            <SubMenuItemTitle>{t(title)}</SubMenuItemTitle>
            <ul className="flex flex-col gap-1.5">
                {description.map(({ href, text }) => (
                    <li key={href}>
                        <Link href={href} className="flex items-center gap-2">
                            <div className="h-0.75 w-0.75 rounded-full bg-gray-750" />
                            <SubMenuItemDescription className="text-gray-750">{t(text)}</SubMenuItemDescription>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SubMenuItemWithList
