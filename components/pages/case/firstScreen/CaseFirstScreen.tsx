'use client'
import ChevronUp from '@/components/svg/ChevronUp'
import Link from 'next/link'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

type CaseFirstScreenProps = {
    title: string
    description: string
    shortTitle: string
}

const CaseFirstScreen: FC<CaseFirstScreenProps> = ({ description, shortTitle, title }) => {
    const { t } = useTranslation()

    return (
        <section className="relative h-150 rounded-8 px-5 pt-16 md:pt-37 lg:h-85 lg:pt-16">
            <video
                src="/video/case_video.mp4"
                autoPlay
                loop
                muted
                className="absolute inset-0 max-h-full w-full rounded-8 object-cover"
            />
            <div className="relative z-[1]">
                <div className="flex items-center justify-between gap-12 text-base leading-none text-blue-300 md:justify-center">
                    <Link href="/cases" className="flex items-center gap-1.5">
                        <ChevronUp className="-rotate-90" />
                        <p>{t('case:first-screen.back_to_cases')}</p>
                    </Link>
                    <p>{shortTitle}</p>
                    <Link href={'/cases'} className="flex items-center gap-1.5">
                        <p>{t('case:first-screen.next_case', { title: 'Title' })}</p>
                        <ChevronUp className="rotate-90" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CaseFirstScreen
