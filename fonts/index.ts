import localFont from 'next/font/local'

export const outfit = localFont({
    src: [
        { path: '../public/fonts/outfit/Outfit-Thin.ttf', style: 'normal', weight: '100' },
        { path: '../public/fonts/outfit/Outfit-ExtraLight.ttf', style: 'normal', weight: '200' },
        { path: '../public/fonts/outfit/Outfit-Light.ttf', style: 'normal', weight: '300' },
        { path: '../public/fonts/outfit/Outfit-Regular.ttf', style: 'normal', weight: 'normal' },
        { path: '../public/fonts/outfit/Outfit-Medium.ttf', style: 'normal', weight: '500' },
        { path: '../public/fonts/outfit/Outfit-SemiBold.ttf', style: 'normal', weight: '600' },
        { path: '../public/fonts/outfit/Outfit-Bold.ttf', style: 'normal', weight: '700' },
        { path: '../public/fonts/outfit/Outfit-ExtraBold.ttf', style: 'normal', weight: '800' },
        { path: '../public/fonts/outfit/Outfit-Black.ttf', style: 'normal', weight: '900' },
    ],
})

export const neueMontreal = localFont({
    src: [
        { path: '../public/fonts/neueMontreal/NeueMontreal-Bold.otf', style: 'normal', weight: 'bold' },
        { path: '../public/fonts/neueMontreal/NeueMontreal-BoldItalic.otf', style: 'italic', weight: 'bold' },
        { path: '../public/fonts/neueMontreal/NeueMontreal-Medium.otf', style: 'normal', weight: '500' },
        { path: '../public/fonts/neueMontreal/NeueMontreal-MediumItalic.otf', style: 'italic', weight: '500' },
        { path: '../public/fonts/neueMontreal/NeueMontreal-Regular.otf', style: 'normal', weight: '400' },
        { path: '../public/fonts/neueMontreal/NeueMontreal-Italic.otf', style: 'italic', weight: '400' },
        { path: '../public/fonts/neueMontreal/NeueMontreal-Light.otf', style: 'normal', weight: '300' },
        { path: '../public/fonts/neueMontreal/NeueMontreal-LightItalic.otf', style: 'italic', weight: '300' },
    ],
})
