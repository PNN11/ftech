import { cn } from '@/lib/classNames'
import { COMPANY_EMAIL, COMPANY_PHONE } from '@/lib/constants'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type ContactInfoProps = {
    classes?: { wrapper?: string }
}

const ContactInfo: FC<ContactInfoProps> = ({ classes }) => {
    const { t } = useTranslation()

    return (
        <div className={cn('text-base leading-none text-gray-900', classes?.wrapper)}>
            <p className="mb-1.75">{t('common:footer.city')}</p>
            <p className="flex items-center gap-6.25">
                <span>{t('common:footer.street')}</span>
                <span>{COMPANY_EMAIL}</span>
                <span>{COMPANY_PHONE}</span>
            </p>
        </div>
    )
}

export default ContactInfo
