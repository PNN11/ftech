import { TService } from '@/types/common'

export const LINKEDIN_ADDRESS = 'https://www.linkedin.com/company/ftech-it/'

export const COMPANY_EMAIL = 'Mail@mail.com'

export const SALES_DEPARTMENT_EMAIL = 'sales@ftech.com'

export const COMPANY_PHONE = '+ 1 543 625 42 24'

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
