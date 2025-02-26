'use client'
import ArrowCircleRightDown from '@/components/svg/ArrowCircleRightDown'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import Button from '@/components/ui/buttons/defaultButton'
import ButtonWithIcon from '@/components/ui/buttons/withIcon/ButtonWithIcon'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import { formatNumber } from '@/lib/formatNumber'
import { TService } from '@/types/common'
import Link from 'next/link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const visibleServices: TService[] = [
    'outsourcing',
    'client-team-extension',
    'frontend-development',
    'backend-development',
    'mobile-development',
    'ai-development',
    'design',
    'quality-assurance',
]

const OurService: FC = () => {
    const { t } = useTranslation()

    return (
        <SectionWrapper>
            <Container>
                <TitleWithDescription
                    classes={{ wrapper: 'mb-7' }}
                    title={t('our-service.title')}
                    subtitle={t('our-service.subtitle')}
                />

                <ul className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {visibleServices
                        .map(service => ({ title: t(`our-service.${service}`), href: `/service/${service}` }))
                        .map(({ title, href }, i) => (
                            <li key={`${title}${i}`}>
                                <div className="group flex h-full flex-col justify-between gap-7 border-b border-r border-dashed border-[#C2C2C2] px-4.5 py-6 shadow-button lg:p-6 xl:p-8">
                                    <div>
                                        <ArrowCircleRightDown className="mb-12.5 text-gray-750 lg:mb-11 xl:mb-7" />
                                        <Paragraph className="mb-2" variant="subt">
                                            {formatNumber(i + 1, { minimumIntegerDigits: 2 })}
                                        </Paragraph>
                                        <Heading variant="h5">{title}</Heading>
                                    </div>
                                    <Link
                                        className="block w-full transition-all duration-300 lg:translate-y-10 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
                                        href={href}
                                    >
                                        <ButtonWithIcon className="w-full justify-center" size="s">
                                            {t('our-service.get-service')}
                                        </ButtonWithIcon>
                                    </Link>
                                </div>
                            </li>
                        ))}
                </ul>
                <div className="flex justify-center">
                    <Link className="w-full 2sm:w-fit" href="/service">
                        <Button className="w-full" size="l">
                            {t('our-service.all-services')}
                        </Button>
                    </Link>
                </div>
            </Container>
        </SectionWrapper>
    )
}

export default OurService
