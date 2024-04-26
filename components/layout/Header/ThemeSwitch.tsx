import Switch from '@/components/ui/inputs/Switch'
import { cn } from '@/lib/classNames'
import { useChangeTheme, useThemeStore } from '@/stores/theme'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type ThemeSwitchProps = {
    className?: string
}

const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
    const { t } = useTranslation()
    const theme = useThemeStore(s => s.theme)
    const changeTheme = useChangeTheme()

    return (
        <div className={cn('flex items-center gap-2 pl-4', className)}>
            <span className="text-base leading-none text-gray-700">{t('common:header.theme')}</span>
            <Switch name="theme" checked={theme === 'blue'} onChange={changeTheme} />
        </div>
    )
}

export default ThemeSwitch
