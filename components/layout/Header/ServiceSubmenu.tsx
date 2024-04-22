'use client'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import MenuItem from './MenuItem'

const ServiceSubmenu: FC = () => {
    const { t } = useTranslation()
    return <MenuItem href="/service">{t('common:header.service')}</MenuItem>
}

export default ServiceSubmenu
