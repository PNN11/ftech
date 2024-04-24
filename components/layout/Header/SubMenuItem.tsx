import Link from 'next/link'
import { FC } from 'react'
import SubMenuItemDescription from './SubMenuItemDescription'
import SubMenuItemTitle from './SubMenuItemTitle'

type SubMenuItemProps = {
    title: string
    description: string
    href: string
}

const SubMenuItem: FC<SubMenuItemProps> = ({ description, title, href }) => {
    return (
        <Link href={href} className="flex flex-col gap-1">
            <SubMenuItemTitle>{title}</SubMenuItemTitle>
            <SubMenuItemDescription>{description}</SubMenuItemDescription>
        </Link>
    )
}

export default SubMenuItem
