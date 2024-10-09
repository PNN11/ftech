'use client'
import ChevronUp from '@/components/svg/ChevronUp'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import useStopVideoOutOfView from '@/hooks/useStopVideoOutOfView'
import { Case } from '@/types/cases'
import Link from 'next/link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type CaseFirstScreenProps = {
    title: string
    description: string
    shortTitle: string
    nextProject?: Case
    image?: string
}

const CaseFirstScreen: FC<CaseFirstScreenProps> = ({ description, shortTitle, title, nextProject }) => {
    const { t } = useTranslation()

    const ref = useStopVideoOutOfView()

    return (
        <section className="relative h-150 rounded-8 px-5 pt-16 md:pt-37 lg:h-85 lg:pt-16">
            <video
                src="/video/case_video.mp4"
                autoPlay
                loop
                muted
                className="absolute inset-0 h-full max-h-full w-full rounded-8 object-cover mix-blend-luminosity dark:mix-blend-normal"
                ref={ref}
            />
            <div className="relative z-[1]">
                <div className="mb-8 flex items-center justify-between gap-12 text-base leading-none text-blue-300 md:justify-center">
                    <Link href="/cases" className="flex items-center gap-1.5">
                        <ChevronUp className="-rotate-90" />
                        <p>{t('case:first-screen.back_to_cases')}</p>
                    </Link>
                    <p className="hidden md:block">{shortTitle}</p>
                    <Link href={`/cases/${nextProject?.href}`} className="flex items-center gap-1.5">
                        <p>{t('case:first-screen.next_case')}</p>
                        <ChevronUp className="rotate-90" />
                    </Link>
                </div>
                <div className="mx-auto max-w-150 md:text-center lg:max-w-[49.4375rem]">
                    <Heading className="mb-9 text-dark-blue-100 dark:text-dark-blue-100" variant="h1">
                        {title}
                    </Heading>
                    <Paragraph className="text-gray-100 dark:text-white-200" variant="p1">
                        {description}
                    </Paragraph>
                </div>
            </div>
        </section>
    )
}

export default CaseFirstScreen
