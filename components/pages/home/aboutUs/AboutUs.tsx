'use client'
import ArrowCircleRightDown from '@/components/svg/ArrowCircleRightDown'
import SealCheck from '@/components/svg/SealCheck'
import ButtonWithIcon from '@/components/ui/buttons/withIcon/ButtonWithIcon'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import AboutUsItemWrapper from './AboutUsItemWrapper'
import TitleWithDescription from '@/components/ui/TitleWithDescription'

const AboutUs = () => {
    const { t } = useTranslation()

    return (
        <SectionWrapper>
            <Container>
                <TitleWithDescription
                    title={t('about-us.title')}
                    description={t('about-us.description')}
                    classes={{ wrapper: 'max-w-159' }}
                />
                <div className="grid grid-cols-[19.37%_20.14%_1fr_20.14%_19.37%] items-end gap-2 xl:gap-4">
                    <AboutUsItemWrapper
                        bgSrc="/images/home/experience_bg.png"
                        classes={{ bg: 'opacity-[0.22]' }}
                        className="h-84"
                    >
                        <Heading className="dark:text-white" variant="h3">
                            {t('about-us.items.experience.title', { count: 5 })}
                        </Heading>
                        <Paragraph className="dark:text-white" variant="p2">
                            {t('about-us.items.experience.description')}
                        </Paragraph>
                        <Image
                            src="/images/home/about_us_monochrome.svg"
                            width={205}
                            height={142}
                            alt=""
                            className="absolute bottom-0 right-6 max-w-max dark:hidden"
                        />
                        <Image
                            src="/images/home/about_us_blue.svg"
                            width={213}
                            height={150}
                            alt=""
                            className="absolute bottom-0 right-6 hidden max-w-max dark:block"
                        />
                    </AboutUsItemWrapper>
                    <AboutUsItemWrapper
                        bgSrc="/images/home/returning_bg.png"
                        classes={{ bg: 'opacity-55' }}
                        className="h-55"
                    >
                        <div className="grid grid-flow-row gap-3.5">
                            <ArrowCircleRightDown className="text-gray-900 dark:text-white" />
                            <Heading className="dark:text-white" variant="h4">
                                {t('about-us.items.returning-customers.title')}
                            </Heading>
                            <Paragraph className="dark:text-white" variant="p2">
                                {t('about-us.items.returning-customers.description')}
                            </Paragraph>
                        </div>
                    </AboutUsItemWrapper>
                    <AboutUsItemWrapper
                        bgSrc="/images/home/referral_bg.png"
                        classes={{ bg: 'opacity-[0.11]' }}
                        className="h-37"
                    >
                        <Heading className="dark:text-white" variant="h3">
                            89%
                        </Heading>
                        <Paragraph className="dark:text-white" variant="p2">
                            {t('about-us.items.referral.description')}
                        </Paragraph>
                    </AboutUsItemWrapper>
                    <AboutUsItemWrapper
                        bgSrc="/images/home/foundation_bg.png"
                        classes={{ bg: 'opacity-[0.33]' }}
                        className="h-62.5"
                    >
                        <Heading className="dark:text-white" variant="h3">
                            {t('about-us.items.foundation.title', { year: 2019 })}
                        </Heading>
                        <Paragraph className="dark:text-white" variant="p2">
                            {t('about-us.items.foundation.description')}
                        </Paragraph>
                    </AboutUsItemWrapper>
                    <AboutUsItemWrapper
                        bgSrc="/images/home/projects_bg.png"
                        classes={{ bg: 'opacity-[0.11] mix-blend-overlay', childrenWrapper: 'justify-between' }}
                        className="h-84"
                    >
                        <div className="space-y-3.5">
                            <SealCheck className="text-dark-blue-900 dark:text-white" />
                            <Heading className="dark:text-white" variant="h3">
                                120+
                            </Heading>
                            <Paragraph className="dark:text-white" variant="p2">
                                {t('about-us.items.completed-projects.description')}
                            </Paragraph>
                        </div>
                        <Link href="/cases" className="w-full">
                            <ButtonWithIcon
                                className="dark:bg-primary-white w-full border-t-gray-750 bg-primary-gray text-white-300 dark:border-none"
                                size="s"
                                variant="contained"
                                color="secondary"
                            >
                                {t('about-us.items.completed-projects.button')}
                            </ButtonWithIcon>
                        </Link>
                    </AboutUsItemWrapper>
                </div>
            </Container>
        </SectionWrapper>
    )
}

export default AboutUs
