import BritainFlag from '@/components/svg/BritainFlag'
import PolandFlag from '@/components/svg/PolandFlag'
import Paragraph from '@/components/ui/typography/paragraph'
import useChangeLang from '@/hooks/useChangeLang'
import { cn } from '@/lib/classNames'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const langs = [
    { value: 'en', Icon: BritainFlag },
    { value: 'pl', Icon: PolandFlag },
]

type LanguagesListProps = {
    classes?: { wrapper?: string }
}

const LanguagesList: FC<LanguagesListProps> = ({ classes }) => {
    const { t, i18n } = useTranslation()
    const changeLang = useChangeLang()

    return (
        <div className={cn('flex items-center gap-2', classes?.wrapper)}>
            <Paragraph variant="p3">{t('common:footer.lang')}</Paragraph>
            <ul className="flex items-center gap-2">
                {langs.map(({ value, Icon }) => (
                    <li key={value} className="cursor-pointer" onClick={() => changeLang(value)}>
                        <Paragraph
                            className={cn('capitalize', { 'text-gray-600': i18n.language === value })}
                            variant="p3"
                        >
                            {value}
                        </Paragraph>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LanguagesList
