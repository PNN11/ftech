import Link from 'next/link'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import MenuItem from './MenuItem'

const ExpertiseSubmenu: FC = () => {
    const { t } = useTranslation()
    return <MenuItem href="/expertise">{t('common:header.expertise')}</MenuItem>
}

export default ExpertiseSubmenu
