import ArrowCircleRightDown from '@/components/svg/ArrowCircleRightDown'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'

import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import AboutUsItemWrapper from '../AboutUsItemWrapper'

type ReturningCustomersCardProps = {
    classes?: { wrapper?: string }
}

const ReturningCustomersCard: FC<ReturningCustomersCardProps> = ({ classes }) => {
    const { t } = useTranslation()

    return (
        <AboutUsItemWrapper
            className={classes?.wrapper}
            bgSrc="/images/home/returning_bg.png"
            classes={{ bg: 'opacity-55' }}
        >
            <div className="grid grid-flow-row gap-3.5">
                <ArrowCircleRightDown className="text-gray-900 dark:text-blue-900 md:dark:text-white" />
                <Heading className="dark:text-dark-blue-900 md:dark:text-white" variant="h4">
                    {t('about-us.items.returning-customers.title')}
                </Heading>
                <Paragraph className="dark:text-dark-blue-700 md:dark:text-white" variant="p2">
                    {t('about-us.items.returning-customers.description')}
                </Paragraph>
            </div>
        </AboutUsItemWrapper>
    )
}

export default ReturningCustomersCard
