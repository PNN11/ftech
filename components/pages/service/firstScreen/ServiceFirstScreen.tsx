'use client'
import ChevronUp from '@/components/svg/ChevronUp'
import Button from '@/components/ui/buttons/defaultButton'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { neueMontreal } from '@/fonts'
import { cn } from '@/lib/classNames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type ProjectStat = {
    title: string
    description: string
}

type ServiceFirstScreenProps = {
    title: string
    image: string
    stats: [ProjectStat, ProjectStat]
}

const ServiceFirstScreen: FC<ServiceFirstScreenProps> = ({ title, image, stats }) => {
    const { t } = useTranslation()

    return (
        <section className="relative overflow-hidden rounded-8 p-5 pt-10 md:pt-19.25">
            <div className="relative z-[1]">
                <Link
                    href="/cases"
                    className="mx-auto mb-8 flex max-w-fit items-center gap-1.5 text-base leading-none text-blue-300"
                >
                    <ChevronUp className="-rotate-90" />
                    <p>{t('service:first-screen.back_to_services')}</p>
                </Link>
                <Heading
                    className="mx-auto mb-10 max-w-[37rem] text-center text-dark-blue-100 dark:text-dark-blue-100"
                    variant="h1"
                >
                    {title}
                </Heading>
                <div
                    className="grid grid-cols-2 items-center gap-2.5 rounded-3xl border border-gray-200 bg-white-10 p-2
                 md:mx-auto md:max-w-[37rem] md:grid-cols-3"
                >
                    {stats.map(({ description, title }, i) => (
                        <div key={`${title}${i}`} className="h-full space-y-1.5 pb-4 pt-3 text-center">
                            <Heading variant="h3">{title}</Heading>
                            <Paragraph variant="p2">{description}</Paragraph>
                        </div>
                    ))}
                    <Link href="/contacts" className="col-span-2 md:col-span-1">
                        <Button className="h-auto w-full flex-col gap-3.5 whitespace-normal rounded-2xl p-4">
                            <p className="text-4xl font-medium leading-[0.9] text-white-300">
                                {t('service:first-screen.action_button.title')}
                            </p>
                            <p
                                className={cn(
                                    'text-base font-normal leading-[1.1] text-gray-50',
                                    neueMontreal.className
                                )}
                            >
                                {t('service:first-screen.action_button.description')}
                            </p>
                        </Button>
                    </Link>
                </div>
            </div>
            <Image
                src={image}
                width={1192}
                height={1058}
                alt=""
                className="absolute left-0 top-0 h-full object-cover object-[50%_65%]"
                quality={100}
            />
        </section>
    )
}

export default ServiceFirstScreen
