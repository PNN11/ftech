import BritainFlag from '@/components/svg/BritainFlag'
import PolandFlag from '@/components/svg/PolandFlag'
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
            <p>{t('common:footer.lang')}</p>
            <ul className="flex items-center gap-3.5">
                {langs.map(({ value, Icon }) => (
                    <li
                        key={value}
                        onClick={() => changeLang(value)}
                        className={cn('flex h-7 w-7 cursor-pointer items-center justify-center rounded bg-gray-100', {
                            'border border-gray-200 bg-transparent': value === i18n.language,
                        })}
                    >
                        <Icon />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LanguagesList
