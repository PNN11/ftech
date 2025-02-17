import Paragraph from '@/components/ui/typography/paragraph'
import { cn } from '@/lib/classNames'
import { COMPANY_EMAIL } from '@/lib/constants'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type ContactInfoProps = {
    classes?: { wrapper?: string }
}

const ContactInfo: FC<ContactInfoProps> = ({ classes }) => {
    const { t } = useTranslation()

    return (
        <div className={cn('', classes?.wrapper)}>
            <Paragraph variant="p3" className="mb-1.25">
                {t('common:footer.city')}
            </Paragraph>
            <div className="flex items-center gap-6.25">
                <Paragraph variant="p3">{t('common:footer.street')}</Paragraph>
                <Paragraph variant="p3">{COMPANY_EMAIL}</Paragraph>
            </div>
        </div>
    )
}

export default ContactInfo
