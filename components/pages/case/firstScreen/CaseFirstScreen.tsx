'use client'
import ChevronUp from '@/components/svg/ChevronUp'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import useStopVideoOutOfView from '@/hooks/useStopVideoOutOfView'
import { Case } from '@/types/cases'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type CaseFirstScreenProps = {
    title: string
    description: string
    shortTitle: string
    nextProject?: Case
    image: string
}

const CaseFirstScreen: FC<CaseFirstScreenProps> = ({ description, shortTitle, title, nextProject, image }) => {
    const { t } = useTranslation()

    return (
        <section className="relative h-150 overflow-hidden rounded-8 px-5 pt-16 md:pt-37 lg:h-85 lg:pt-16">
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
            <Image
                src={image}
                width={1192}
                height={600}
                alt=""
                className="absolute left-0 top-0 h-full object-cover object-[50%_50%]"
                quality={100}
                priority
            />
        </section>
    )
}

export default CaseFirstScreen
