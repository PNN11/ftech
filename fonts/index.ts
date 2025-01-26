import { Outfit } from 'next/font/google'
import localFont from 'next/font/local'

export const outfit = Outfit({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const neueMontreal = localFont({
    src: [
        { path: '../public/fonts/neueMontreal/NeueMontreal-Bold.otf', style: 'normal', weight: 'bold' },
        { path: '../public/fonts/neueMontreal/NeueMontreal-BoldItalic.otf', style: 'italic', weight: 'bold' },
        { path: '../public/fonts/neueMontreal/NeueMontreal-Medium.otf', style: 'normal', weight: '500' },
        { path: '../public/fonts/neueMontreal/NeueMontreal-MediumItalic.otf', style: 'italic', weight: '500' },
        { path: '../public/fonts/neueMontreal/NeueMontreal-Regular.otf', style: 'normal', weight: 'normal' },
        { path: '../public/fonts/neueMontreal/NeueMontreal-Italic.otf', style: 'italic', weight: 'normal' },
        { path: '../public/fonts/neueMontreal/NeueMontreal-Light.otf', style: 'normal', weight: '300' },
        { path: '../public/fonts/neueMontreal/NeueMontreal-LightItalic.otf', style: 'italic', weight: '300' },
    ],
})
