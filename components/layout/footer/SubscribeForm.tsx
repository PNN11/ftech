import InputWithIcon from '@/components/ui/inputs/withIcon/InputWithIcon'
import Heading from '@/components/ui/typography/heading'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

const SubscribeForm: FC = () => {
    const { t } = useTranslation()
    const [email, setEmail] = useState('')

    return (
        <div>
            <Heading className="mb-4 xl:mb-6.25" variant="h4">
                {t('common:footer.subscribe')}
            </Heading>
            <form>
                <InputWithIcon placeholder="email@" value={email} onChange={e => setEmail(e.target.value)} />
            </form>
        </div>
    )
}

export default SubscribeForm
