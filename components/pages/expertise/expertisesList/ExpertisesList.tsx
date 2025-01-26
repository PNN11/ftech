'use client'
import { expertise } from '@/components/layout/Header/expertise/ExpertiseSubmenu'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import ExpertiseStat from './ExpertiseStat'
import Paragraph from '@/components/ui/typography/paragraph'
import Heading from '@/components/ui/typography/heading'
import { formatNumber } from '@/lib/formatNumber'

const ExpertisesList = () => {
    const { t } = useTranslation()

    const { title, description, subtitle, projects, case_studies } = t('expertise:expertise_list', {
        returnObjects: true,
    }) as {
        title: string
        description: string
        subtitle: string
        projects: string
        case_studies: string
    }
    return (
        <section className="py-5">
            <TitleWithDescription
                title={title}
                subtitle={subtitle}
                description={description}
                classes={{ wrapper: 'py-8' }}
            />
            <ul className="grid grid-cols-1 gap-5.5 sm:grid-cols-2 md:gap-2 xl:grid-cols-3">
                {expertise.map(({ title, image, projectsCount, caseStudies, number, longDescription, services }) => (
                    <li key={title}>
                        <div>
                            <div className="relative h-45 md:h-55 md:px-5 md:py-10 lg:h-auto lg:px-8 xl:pt-5">
                                <Image src={image.src} alt="" width={image.width} height={image.height} quality={100} />
                                <div>
                                    <ExpertiseStat value={projectsCount} capture={projects} />
                                    <ExpertiseStat
                                        value={caseStudies}
                                        capture={case_studies}
                                        classes={{ wrapper: 'hidden' }}
                                    />
                                </div>
                            </div>
                            <div>
                                <Paragraph variant="subt">
                                    {formatNumber(number, { minimumIntegerDigits: 2 })}
                                </Paragraph>
                                <Heading variant="h5">{t(title)}</Heading>
                                <Paragraph variant="p2">{t(longDescription)}</Paragraph>
                                <ul className="space-y-1.5">
                                    {(t(services, { returnObjects: true }) as string[]).map(service => (
                                        <li className="flex items-center gap-2" key={service}>
                                            <div className="h-0.75 w-0.75 rounded-full bg-gray-750" />
                                            <Paragraph className="text-gray-750" variant="p3">
                                                {service}
                                            </Paragraph>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ExpertisesList
