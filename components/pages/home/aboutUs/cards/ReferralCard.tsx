import React, { ComponentProps, FC } from 'react'
import { useTranslation } from 'react-i18next'
import AboutUsItemWrapper from '../AboutUsItemWrapper'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'

type ReferralCardProps = {
    classes?: { wrapper?: string }
}

const ReferralCard: FC<ReferralCardProps> = ({ classes }) => {
    const { t } = useTranslation()
    return (
        <AboutUsItemWrapper
            className={classes?.wrapper}
            bgSrc="/images/home/referral_bg.png"
            classes={{ bg: 'opacity-[0.11]' }}
        >
            <Heading className="dark:text-dark-blue-900 md:dark:text-white" variant="h3">
                89%
            </Heading>
            <Paragraph className="dark:text-dark-blue-700 md:dark:text-white" variant="p2">
                {t('about-us.items.referral.description')}
            </Paragraph>
        </AboutUsItemWrapper>
    )
}

export default ReferralCard
