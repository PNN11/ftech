import Switch from '@/components/ui/inputs/Switch'
import React, { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const ThemeSwitch: FC = () => {
    const { t } = useTranslation()
    const [theme, setTheme] = useState<'monochrome' | 'blue'>('monochrome')

    useEffect(() => {
        if (theme === 'blue') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    return (
        <div className="flex items-center gap-2 pl-4">
            <span className="text-base leading-none text-gray-700">{t('common:header.theme')}</span>
            <Switch
                name="theme"
                checked={theme === 'blue'}
                onChange={() => setTheme(theme === 'blue' ? 'monochrome' : 'blue')}
            />
        </div>
    )
}

export default ThemeSwitch
