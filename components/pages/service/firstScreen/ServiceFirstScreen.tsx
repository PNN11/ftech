'use client'
import ChevronUp from '@/components/svg/ChevronUp'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import useStopVideoOutOfView from '@/hooks/useStopVideoOutOfView'
import { Case } from '@/types/cases'
import Link from 'next/link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type ServiceFirstScreenProps = {
    title: string
    image: string
}

const ServiceFirstScreen: FC<ServiceFirstScreenProps> = ({ title, image }) => {
    const { t } = useTranslation()

    return (
        <section className="relative h-150 rounded-8 px-5 pt-16 md:pt-37 lg:h-85 lg:pt-16">
            <div className="relative z-[1]">
                <div className="mb-8 flex items-center justify-between gap-12 text-base leading-none text-blue-300 md:justify-center">
                    <Link href="/cases" className="flex items-center gap-1.5">
                        <ChevronUp className="-rotate-90" />
                        <p>{t('service:first-screen.back_to_services')}</p>
                    </Link>
                </div>
                <div className="mx-auto max-w-150 md:text-center lg:max-w-[49.4375rem]">
                    <Heading className="mb-9 text-dark-blue-100 dark:text-dark-blue-100" variant="h1">
                        {title}
                    </Heading>
                </div>
            </div>
        </section>
    )
}

export default ServiceFirstScreen
