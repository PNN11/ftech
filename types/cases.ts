import { Expertise } from './common'

export type Case = {
    title: string
    shortTitle: string
    description: string
    tags: Array<string>
    features: Array<{
        value: string
        text: string
    }>
    href: string
    image: string
    location: string
    clutchReview: string
    client: string
    budget: string
    industry: Array<string>
    environment: Array<string>
    release: string
    problem: string
    solution: string
    delivering: string
    outcome: {
        title: string
        description: string
        features: Array<{
            value: string
            text: string
        }>
    }
    owner: {
        name: string
        message: string
    }
    stages: Array<{
        title: string
        description: string
    }>
    images: {
        basic: string
        large: string
        basicCapture: string
    }
    challenges: Array<{
        title: string
        description: string
    }>
    additionalInfo: {
        title: string
        description: string
        subtitle: string
    }
    reviews: {
        title: string
        item: {
            name: string
            message: string
        }
    }
    bgColor?: string
    bgTone?: 'dark' | 'light'
    category: Expertise
}
