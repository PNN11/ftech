import Paragraph from '@/components/ui/typography/paragraph'
import { TService } from '@/types/common'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const footerServiceList: { href: `/${TService}`; serviceKey: TService }[] = [
    { href: '/backend-development', serviceKey: 'backend-development' },
    { href: '/frontend-development', serviceKey: 'frontend-development' },
    { href: '/mobile-development', serviceKey: 'mobile-development' },
    { href: '/business-analysis', serviceKey: 'business-analysis' },
    { href: '/devops', serviceKey: 'devops' },
    { href: '/quality-assurance', serviceKey: 'quality-assurance' },
    { href: '/design', serviceKey: 'design' },
    { href: '/outsourcing', serviceKey: 'outsourcing' },
    { href: '/client-team-extension', serviceKey: 'client-team-extension' },
    { href: '/third-party-services', serviceKey: 'third-party-services' },
    { href: '/ai-development', serviceKey: 'ai-development' },
]

const FooterServiceLinks = () => {
    const { t } = useTranslation()
    return (
        <div className="grid grid-cols-1 gap-x-8 gap-y-2 2sm:grid-cols-[9.25rem_max-content_9.25rem] md:gap-x-2 lg:gap-x-8">
            <div className="flex flex-col gap-2">
                {footerServiceList.slice(0, 4).map(({ href, serviceKey }) => (
                    <Link className="w-fit 2sm:w-auto" key={href} href={href}>
                        <Paragraph variant="p3">{t(`common:footer.services-list.${serviceKey}.title`)}</Paragraph>
                    </Link>
                ))}
            </div>
            <div className="flex flex-col gap-2">
                {footerServiceList.slice(4, 8).map(({ href, serviceKey }) => (
                    <Link className="w-fit 2sm:w-auto" key={href} href={href}>
                        <Paragraph variant="p3">{t(`common:footer.services-list.${serviceKey}.title`)}</Paragraph>
                    </Link>
                ))}
            </div>
            <div className="flex flex-col gap-2">
                {footerServiceList.slice(8).map(({ href, serviceKey }) => (
                    <Link className="w-fit 2sm:w-auto" key={href} href={href}>
                        <Paragraph variant="p3">{t(`common:footer.services-list.${serviceKey}.title`)}</Paragraph>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default FooterServiceLinks
