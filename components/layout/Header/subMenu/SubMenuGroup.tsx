import { ComponentProps, FC } from 'react'
import SubMenuGroupTitle from './SubMenuGroupTitle'
import SubMenuItem, { SubMenuItemProps } from './SubMenuItem'
import SubMenuItemWithList, { SubMenuItemWithListProps } from './SubMenuItemWithList'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/classNames'

type SubMenuGroupProps = {
    groupTitle?: string
    groupIcon?: FC<ComponentProps<'svg'>>
    groupIconClassName?: string
    groupItems: (SubMenuItemProps | SubMenuItemWithListProps)[]
    className?: string
}

const isSubmenuItem = (item: SubMenuItemProps | SubMenuItemWithListProps): item is SubMenuItemProps => {
    return item.hasOwnProperty('href')
}

const SubMenuGroup: FC<SubMenuGroupProps> = ({
    groupTitle,
    groupItems,
    groupIcon,
    groupIconClassName,
    className = '',
}) => {
    const { t } = useTranslation()

    return (
        <div className={cn('flex flex-col gap-6', className)}>
            {groupTitle && (
                <SubMenuGroupTitle Icon={groupIcon} iconClassName={cn('text-gray-600', groupIconClassName)}>
                    {t(groupTitle)}
                </SubMenuGroupTitle>
            )}
            <div className="flex flex-col gap-3">
                {groupItems.map(item =>
                    isSubmenuItem(item) ? (
                        <SubMenuItem key={item.title} {...item} />
                    ) : (
                        <SubMenuItemWithList key={item.title} {...item} />
                    )
                )}
            </div>
        </div>
    )
}

export default SubMenuGroup
