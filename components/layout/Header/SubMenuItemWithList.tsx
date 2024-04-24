import React, { FC } from 'react'
import SubMenuItemTitle from './SubMenuItemTitle'
import SubMenuItemDescription from './SubMenuItemDescription'
import Link from 'next/link'

type SubMenuItemWithListProps = {
    title: string
    description: { text: string; href: string }[]
}

const SubMenuItemWithList: FC<SubMenuItemWithListProps> = ({ description, title }) => {
    return (
        <div className="flex flex-col gap-2.5">
            <SubMenuItemTitle>{title}</SubMenuItemTitle>
            <ul>
                {description.map(({ href, text }) => (
                    <li key={href} className="list-disc">
                        <Link href={href}>
                            <SubMenuItemDescription className="text-gray-750">{text}</SubMenuItemDescription>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SubMenuItemWithList
