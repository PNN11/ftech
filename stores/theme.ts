import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { create } from 'zustand'

export type TTheme = 'blue' | 'monochrome'

type ThemeStore = {
    theme: TTheme
}

type ThemeStoreActions = {
    setTheme: (theme: TTheme) => void
}

export const useThemeStore = create<ThemeStore & ThemeStoreActions>(set => ({
    theme: 'monochrome',
    setTheme: theme => set({ theme }),
}))

export const useApplyTheme = () => {
    const theme = useThemeStore(s => s.theme)
    const setTheme = useThemeStore(s => s.setTheme)
    const pathname = usePathname()

    useEffect(() => {
        if (theme === 'blue') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    useEffect(() => {
        if (pathname !== '/') setTheme('blue')
    }, [pathname, setTheme])

    useEffect(() => {
        const handler = () => {
            if (window.scrollY > 400) setTheme('blue')
        }
        if (theme === 'monochrome') {
            handler()
            window.addEventListener('scroll', handler)
        }
        return () => {
            window.removeEventListener('scroll', handler)
        }
    }, [theme, setTheme])
}

export const useChangeTheme = () => {
    const { setTheme, theme } = useThemeStore()

    return () => setTheme(theme === 'blue' ? 'monochrome' : 'blue')
}
