import ButtonWithIcon from '@/components/ui/buttons/withIcon'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { formatNumber } from '@/lib/formatNumber'

import Image from 'next/image'

import React, { FC } from 'react'
import ExpertiseStat from './ExpertiseStat'
import { useTranslation } from 'react-i18next'

type ExpertiseCardProps = {
    image: {
        src: string
        width: number
        height: number
    }
    title: string
    projectsCount: string
    caseStudies: string
    number: number
    longDescription: string
    services: string
}

const ExpertiseCard: FC<ExpertiseCardProps> = ({
    projectsCount,
    caseStudies,
    number,
    longDescription,
    services,
    image,
    title,
}) => {
    const { t } = useTranslation()
    const { projects, case_studies, action_button } = t('expertise:expertise_list', { returnObjects: true }) as {
        projects: string
        case_studies: string
        action_button: string
    }

    return (
        <div
            className="flex h-full flex-col px-3 pb-10 md:border-b md:border-r
                md:border-dashed md:border-[#C2C2C2] lg:px-8"
        >
            <div
                className="relative flex h-45 flex-col items-center justify-center gap-4
     shadow-button md:h-55 md:py-10 lg:h-[14.375rem] lg:items-start xl:pt-5"
            >
                <Image
                    src={image.src}
                    alt=""
                    width={image.width}
                    height={image.height}
                    quality={100}
                    className="max-h-32 object-contain md:max-h-max"
                />
                <div
                    className="absolute bottom-0 left-0 md:hidden lg:bottom-auto lg:left-auto
         lg:right-20 lg:top-1/2 lg:block lg:w-18.75 lg:-translate-y-1/2 xl:-right-4"
                >
                    <ExpertiseStat value={projectsCount} capture={projects} />
                    <ExpertiseStat
                        value={caseStudies}
                        capture={case_studies}
                        classes={{ wrapper: 'hidden lg:block' }}
                    />
                </div>
            </div>
            <div className="flex grow flex-col justify-between gap-4">
                <div className="pt-3 md:pt-0">
                    <Paragraph className="mb-2" variant="subt">
                        {formatNumber(number, { minimumIntegerDigits: 2 })}
                    </Paragraph>

                    <Heading className="mb-4" variant="h5">
                        {t(title)}
                    </Heading>
                    <Paragraph className="mb-4" variant="p2">
                        {t(longDescription)}
                    </Paragraph>
                    <div className="mb-4 hidden gap-1 md:flex lg:hidden">
                        <ExpertiseStat value={projectsCount} capture={projects} />
                        <ExpertiseStat value={caseStudies} capture={case_studies} />
                    </div>
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
                <ButtonWithIcon className="w-full md:w-fit" size="s">
                    {action_button}
                </ButtonWithIcon>
            </div>
        </div>
    )
}

export default ExpertiseCard
