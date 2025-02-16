import { TService } from '@/types/common'

export const LINKEDIN_ADDRESS = 'https://www.linkedin.com/company/ftech-it/'
export const TELEGRAM_ADDRESS = 'https://t.me/Ftech_IT'
export const INSTAGRAM_ADDRESS = 'https://www.instagram.com/ftech_it/'
export const UPWORK_ADDRESS = 'https://www.upwork.com/freelancers/ftech-it'
export const WHATSAPP_ADDRESS = 'https://wa.me/5436254224'

export const COMPANY_EMAIL = 'Sales@ftech-it.com'

export const SALES_DEPARTMENT_EMAIL = 'sales@ftech-it.com'

export const COMPANY_PHONE = '+ 1 543 625 42 24'

export const clutchRating = '4.9'
export const clutchLink = 'https://clutch.co/'

export const serviceList: { href: `/${TService}`; serviceKey: TService }[] = [
    { href: '/ai-development', serviceKey: 'ai-development' },
    { href: '/design', serviceKey: 'design' },
    { href: '/devops', serviceKey: 'devops' },
    { href: '/mobile-development', serviceKey: 'mobile-development' },
    { href: '/frontend-development', serviceKey: 'frontend-development' },
    { href: '/backend-development', serviceKey: 'backend-development' },
    { href: '/outsourcing', serviceKey: 'outsourcing' },
    { href: '/client-team-extension', serviceKey: 'client-team-extension' },
    { href: '/business-analysis', serviceKey: 'business-analysis' },
    { href: '/quality-assurance', serviceKey: 'quality-assurance' },
    { href: '/third-party-services', serviceKey: 'third-party-services' },
]
