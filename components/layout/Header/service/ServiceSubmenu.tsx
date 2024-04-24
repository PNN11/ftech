'use client'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import MenuItemDropdown from '../MenuItemDropdown'

const ServiceSubmenu: FC = () => {
    const { t } = useTranslation()
    return (
        <MenuItemDropdown title={t('common:header.service')} href="/service">
            q
        </MenuItemDropdown>
    )
}

export default ServiceSubmenu
