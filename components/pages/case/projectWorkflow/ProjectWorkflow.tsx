'use client'
import CaseImageWithFallback from '@/components/ui/CaseImageWithFallback'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import Paragraph from '@/components/ui/typography/paragraph'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import WorkflowCard from './WorkflowCard'

type ProjectWorkflowProps = {
    stages: { title: string; description: string }[]
    basicImage?: { src?: string; capture?: string }
}

const ProjectWorkflow: FC<ProjectWorkflowProps> = ({ stages, basicImage }) => {
    const { t } = useTranslation('')

    const { description, subtitle, title } = t('case:workflow', { returnObjects: true }) as {
        title: string
        subtitle: string
        description: string
    }

    return (
        <>
            <section className="py-12.5">
                <TitleWithDescription
                    classes={{ wrapper: 'text-left max-w-full mb-8' }}
                    title={title}
                    subtitle={subtitle}
                    description={description}
                />
                <Swiper slidesPerView="auto" spaceBetween={8}>
                    {stages.map(({ description, title }, i) => (
                        <SwiperSlide className="!w-73" key={title}>
                            <WorkflowCard
                                classes={{ title: 'mb-6', wrapper: 'h-62' }}
                                title={title}
                                description={description}
                                number={i + 1}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            <section className="py-6.25">
                <CaseImageWithFallback src={basicImage?.src} alt="" width={1192} height={296} />
                {basicImage?.capture && (
                    <Paragraph variant="subt" className="mt-4 text-center">
                        {basicImage.capture}
                    </Paragraph>
                )}
            </section>
        </>
    )
}

export default ProjectWorkflow
