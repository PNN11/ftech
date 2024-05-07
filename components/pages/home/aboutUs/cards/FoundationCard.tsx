import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import AboutUsItemWrapper from '../AboutUsItemWrapper'

type FoundationCardProps = {
    classes?: { wrapper?: string }
}

const FoundationCard: FC<FoundationCardProps> = ({ classes }) => {
    const { t } = useTranslation()

    return (
        <AboutUsItemWrapper
            className={classes?.wrapper}
            bgSrc="/images/home/foundation_bg.png"
            classes={{ bg: 'opacity-[0.33]' }}
        >
            <Heading className="dark:text-dark-blue-900 md:dark:text-white" variant="h3">
                {t('about-us.items.foundation.title', { year: 2019 })}
            </Heading>
            <Paragraph className="dark:text-dark-blue-700 md:dark:text-white" variant="p2">
                {t('about-us.items.foundation.description')}
            </Paragraph>
        </AboutUsItemWrapper>
    )
}

export default FoundationCard
