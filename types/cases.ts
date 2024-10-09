import { Expertise } from './common'

export type Case = {
    title: string
    description: string
    tags: Array<string>
    href: string
    image: string
    bgImage?: string
    tone?: 'dark' | 'light'
    mockup?: 'mobile' | 'laptop'
    category: Expertise
}
