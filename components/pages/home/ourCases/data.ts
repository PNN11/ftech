import { Expertise } from '@/types/common'

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
    category: Expertise
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
        category: 'e-commerce',
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
        category: 'e-commerce',
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
        category: 'edtech',
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
        category: 'edtech',
        bgColor: '#ECECEC',
        bgTone: 'light',
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
        title: 'Title5',
        image: '/images/home/phone.png',
        mobileImage: '/images/home/phone_mobile.png',
        category: 'energetics',
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
        title: 'Title6',
        image: '/images/home/phone.png',
        mobileImage: '/images/home/phone_mobile.png',
        category: 'fintech',
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
        title: 'Title7',
        image: '/images/home/phone.png',
        mobileImage: '/images/home/phone_mobile.png',
        category: 'logistics',
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
        title: 'Title8',
        image: '/images/home/phone.png',
        mobileImage: '/images/home/phone_mobile.png',
        category: 'web3',
        bgColor: '#ECECEC',
        bgTone: 'light',
    },
]

export const cases: Record<string, Case[]> = {
    en: casesEn,
}
