import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'

import ClutchInfo from '@/components/ui/ClutchInfo'
import { CLUTCH_LINK } from '@/lib/constants'
import Link from 'next/link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import ReviewWrapper from '../../firstScreen/ReviewWrapper'
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
                <Heading className="dark:text-dark-blue-900 md:dark:text-white" variant="h4">
                    {t('about-us.items.returning-customers.title')}
                </Heading>
                <Paragraph className="dark:text-dark-blue-700 md:dark:text-white" variant="p2">
                    {t('about-us.items.returning-customers.description')}
                </Paragraph>
                <Link target="_blank" rel="noopener noreferrer" href={CLUTCH_LINK}>
                    <ReviewWrapper>
                        <ClutchInfo
                            classes={{
                                reviews: 'hidden',
                                clutchIcon: 'h-4',
                                wrapper: 'flex-row-reverse justify-center w-full',
                            }}
                        />
                    </ReviewWrapper>
                </Link>
            </div>
        </AboutUsItemWrapper>
    )
}

export default ReturningCustomersCard
