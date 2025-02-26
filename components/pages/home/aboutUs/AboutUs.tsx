'use client'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import CompletedProjectsCard from './cards/CompletedProjectsCard'
import ExperienceCard from './cards/ExperienceCard'
import FoundationCard from './cards/FoundationCard'
import ReferralCard from './cards/ReferralCard'
import ReturningCustomersCard from './cards/ReturningCustomersCard'

const AboutUs: FC = () => {
    const { t } = useTranslation()

    return (
        <SectionWrapper id="home-page-about-us">
            <Container>
                <TitleWithDescription
                    title={t('about-us.title')}
                    description={t('about-us.description')}
                    classes={{ wrapper: 'max-w-159 mb-5 md:mb-0' }}
                />
                <div className="grid grid-cols-1 items-end gap-3 2sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[20.3%_1fr_41.1%] lg:gap-2 xl:gap-3.25">
                    <div className="h-full">
                        <ExperienceCard classes={{ wrapper: 'mb-3 md:mb-0' }} />
                        <CompletedProjectsCard classes={{ wrapper: 'md:hidden h-100' }} />
                    </div>
                    <div className="grid h-full grid-cols-1 grid-rows-[1fr_max-content_1fr] items-end gap-3 md:h-auto md:grid-rows-none lg:grid-cols-[54%_1fr] lg:gap-2 xl:gap-3.25">
                        <ReturningCustomersCard classes={{ wrapper: 'h-full md:h-fit' }} />
                        <ReferralCard />
                        <FoundationCard classes={{ wrapper: 'md:hidden h-full' }} />
                    </div>
                    <div className="hidden grid-cols-1 items-end gap-2 md:grid lg:grid-cols-[51%_1fr] xl:gap-3.25">
                        <FoundationCard classes={{ wrapper: 'order-1 lg:order-none' }} />
                        <CompletedProjectsCard classes={{ wrapper: 'lg:h-100' }} />
                    </div>
                </div>
            </Container>
        </SectionWrapper>
    )
}

export default AboutUs
