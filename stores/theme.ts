import { useEffect } from 'react'
import { create } from 'zustand'

type Theme = 'blue' | 'monochrome'

type ThemeStore = {
    theme: Theme
}

type ThemeStoreActions = {
    setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeStore & ThemeStoreActions>(set => ({
    theme: 'monochrome',
    setTheme: theme => set({ theme }),
}))

export const useApplyTheme = () => {
    const theme = useThemeStore(s => s.theme)

    useEffect(() => {
        if (theme === 'blue') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])
}

export const useChangeTheme = () => {
    const { setTheme, theme } = useThemeStore()

    return () => setTheme(theme === 'blue' ? 'monochrome' : 'blue')
}
