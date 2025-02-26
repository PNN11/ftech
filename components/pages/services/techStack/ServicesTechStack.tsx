'use client'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import Paragraph from '@/components/ui/typography/paragraph'
import Image from 'next/image'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { technologies } from './data'
import ServicesCTASection from './ServicesCTASection'

const ServicesTechStack: FC = () => {
    const { t } = useTranslation()
    const { description, subtitle, title } = t('services:tech-stack', { returnObjects: true }) as {
        subtitle: string
        title: string
        description: string
    }
    return (
        <>
            <section className="grid grid-cols-1 gap-2.5 py-12.5 lg:grid-cols-2">
                <TitleWithDescription
                    classes={{ wrapper: 'text-start max-w-full lg:max-w-123 ml-0' }}
                    title={title}
                    subtitle={subtitle}
                    description={description}
                />
                <ul className="hidden-scroll space-y-10.5 overflow-x-scroll py-10 lg:overflow-visible">
                    {technologies.map(({ group, list }) => (
                        <li key={group} className="flex items-center gap-12 lg:gap-7 xl:gap-12">
                            <Paragraph variant="subt">{group}</Paragraph>
                            <ul className="flex items-center gap-8 lg:gap-5 xl:gap-8">
                                {list.map(({ alt, image }) => (
                                    <li key={alt}>
                                        <Image
                                            className="max-w-fit grayscale dark:filter-none"
                                            src={image}
                                            alt={alt}
                                            style={{ width: image.width, height: image.height }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </section>
            <ServicesCTASection />
        </>
    )
}

export default ServicesTechStack
