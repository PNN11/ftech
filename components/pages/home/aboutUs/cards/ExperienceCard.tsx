import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'

import Image from 'next/image'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import AboutUsItemWrapper from '../AboutUsItemWrapper'
import { cn } from '@/lib/classNames'
import ArrowCircleRightDown from '@/components/svg/ArrowCircleRightDown'

type ExperienceCardProps = {
    classes?: { wrapper?: string }
}

const ExperienceCard: FC<ExperienceCardProps> = ({ classes }) => {
    const { t } = useTranslation()

    return (
        <AboutUsItemWrapper
            bgSrc="/images/home/experience_bg.png"
            classes={{ bg: 'opacity-[0.22]', childrenWrapper: 'pb-29' }}
            className={cn('', classes?.wrapper)}
        >
            <ArrowCircleRightDown className="-rotate-90 text-gray-900 dark:text-blue-900 md:dark:text-white" />
            <Heading className="dark:text-dark-blue-900 md:dark:text-white" variant="h3">
                {t('about-us.items.experience.title', { count: 5 })}
            </Heading>
            <Paragraph className="dark:text-dark-blue-700 md:dark:text-white" variant="p2">
                {t('about-us.items.experience.description')}
            </Paragraph>
            <Image
                src="/images/home/about_us_monochrome.svg"
                width={213}
                height={249}
                alt=""
                className="absolute bottom-0 right-3.5 max-w-max dark:hidden"
            />
            <Image
                src="/images/home/about_us_blue.svg"
                width={213}
                height={150}
                alt=""
                className="absolute bottom-0 right-3.5 hidden max-w-max md:dark:block"
            />
            <Image
                src="/images/home/about_us_blue_mobile.svg"
                width={213}
                height={160}
                alt=""
                className="absolute bottom-0 right-0 hidden max-w-max dark:block md:dark:hidden"
            />
        </AboutUsItemWrapper>
    )
}

export default ExperienceCard
