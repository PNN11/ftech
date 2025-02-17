import { OptionalId } from 'mongodb'

export type ContactFormCollectionSchema = OptionalId<{
    name: string
    email: string
    message?: string
    phone: string
}>
