import { TTheme, useThemeStore } from '@/stores/theme'
import { FC } from 'react'

const renderEllipses = (theme: TTheme, count = 10) => {
    const id = `first-screen-ellipse${count}`
    const isMonochrome = theme === 'monochrome'
    const firstCircleHalfSize = isMonochrome ? 80 : 100
    const distanceBetweenCircles = isMonochrome ? 32 : 64

    const opacity = Math.max(1 - count * 0.1, 0)
    const padding = count * distanceBetweenCircles + firstCircleHalfSize
    const color = `rgba(${isMonochrome ? '207, 207, 207' : '0, 153, 255'}, ${opacity})`

    const circleClassName =
        'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-500'

    if (count) {
        return (
            <div style={{ borderColor: color, padding }} className={circleClassName} id={id}>
                {renderEllipses(theme, count - 1)}
            </div>
        )
    }
    return <div style={{ borderColor: color, padding }} id={id} className={circleClassName} />
}

const FirstScreenCircles: FC = () => {
    const theme = useThemeStore(s => s.theme)
    return <div className="relative mt-13.75 h-160 w-160">{renderEllipses(theme)}</div>
}

export default FirstScreenCircles
