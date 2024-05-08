export type Case = {
    title: string
    description: string
    tags: string[]
    href: string
    features: { value: string; text: string }[]
    image: string
    mobileImage: string
    bgColor?: string
    bgTone?: 'dark' | 'light'
}

export const casesEn: Case[] = [
    {
        description: 'Projects Completed',
        features: [
            { value: '120+', text: 'Projects Completed' },
            { value: '120+', text: 'Projects Completed' },
            { value: '120+', text: 'Projects Completed' },
        ],
        href: '/',
        tags: ['Tag', 'Tag', 'Tag', 'Tag', 'Tag'],
        title: 'Title1',
        image: '/images/home/phone.png',
        mobileImage: '/images/home/phone_mobile.png',
    },
    {
        description: 'Projects Completed',
        features: [
            { value: '120+', text: 'Projects Completed' },
            { value: '120+', text: 'Projects Completed' },
            { value: '120+', text: 'Projects Completed' },
        ],
        href: '/',
        tags: ['Tag', 'Tag', 'Tag', 'Tag', 'Tag'],
        title: 'Title2',
        image: '/images/home/phone.png',
        mobileImage: '/images/home/phone_mobile.png',
    },
    {
        description: 'Projects Completed',
        features: [
            { value: '120+', text: 'Projects Completed' },
            { value: '120+', text: 'Projects Completed' },
            { value: '120+', text: 'Projects Completed' },
        ],
        href: '/',
        tags: ['Tag', 'Tag', 'Tag', 'Tag', 'Tag'],
        title: 'Title3',
        image: '/images/home/phone.png',
        mobileImage: '/images/home/phone_mobile.png',
    },
    {
        description: 'Projects Completed',
        features: [
            { value: '120+', text: 'Projects Completed' },
            { value: '120+', text: 'Projects Completed' },
            { value: '120+', text: 'Projects Completed' },
        ],
        href: '/',
        tags: ['Tag', 'Tag', 'Tag', 'Tag', 'Tag'],
        title: 'Title4',
        image: '/images/home/phone.png',
        mobileImage: '/images/home/phone_mobile.png',
        bgColor: '#ECECEC',
        bgTone: 'light',
    },
]

export const cases: Record<string, Case[]> = {
    en: casesEn,
}
