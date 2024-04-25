import Switch from '@/components/ui/inputs/Switch'
import { cn } from '@/lib/classNames'
import React, { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

type ThemeSwitchProps = {
    className?: string
}

const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
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
        <div className={cn('flex items-center gap-2 pl-4', className)}>
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
