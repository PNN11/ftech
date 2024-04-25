import Link from 'next/link'
import { FC } from 'react'
import SubMenuItemDescription from './SubMenuItemDescription'
import SubMenuItemTitle from './SubMenuItemTitle'
import { useTranslation } from 'react-i18next'

export type SubMenuItemProps = {
    title: string
    description: string
    href: string
}

const SubMenuItem: FC<SubMenuItemProps> = ({ description, title, href }) => {
    const { t } = useTranslation()
    return (
        <Link href={href} className="flex flex-col gap-1">
            <SubMenuItemTitle>{t(title)}</SubMenuItemTitle>
            <SubMenuItemDescription>{t(description)}</SubMenuItemDescription>
        </Link>
    )
}

export default SubMenuItem
