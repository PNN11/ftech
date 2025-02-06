'use client'
import { expertise } from '@/components/layout/Header/expertise/ExpertiseSubmenu'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import { useTranslation } from 'react-i18next'
import ExpertiseCard from './ExpertiseCard'
import Heading from '@/components/ui/typography/heading'
import Button from '@/components/ui/buttons/defaultButton/button'
import Link from 'next/link'

type ExpertiseListTranslation = {
    title: string
    description: string
    subtitle: string
    contact_us: {
        title: string
        action_button: string
        explore_button: string
    }
}

const ExpertisesList = () => {
    const { t } = useTranslation()

    const { title, description, subtitle, contact_us } = t('expertise:expertise_list', {
        returnObjects: true,
    }) as ExpertiseListTranslation

    return (
        <section className="py-5">
            <TitleWithDescription
                title={title}
                subtitle={subtitle}
                description={description}
                classes={{ wrapper: 'py-8' }}
            />
            <ul className="mb-8 grid grid-cols-1 gap-5.5 sm:grid-cols-2 md:gap-0 xl:grid-cols-3">
                {expertise.map(props => (
                    <li key={props.title}>
                        <ExpertiseCard {...props} />
                    </li>
                ))}
            </ul>
            <div
                className="flex flex-col items-center justify-between gap-4 rounded-8 bg-gray-50 px-6 py-7 shadow-button
             lg:flex-row lg:gap-0"
            >
                <Heading className="text-center" variant="h5">
                    {contact_us.title}
                </Heading>
                <div className="flex flex-col gap-3 2sm:flex-row">
                    <Link className="w-full 2sm:w-fit" href="/contacts">
                        <Button className="w-full">{contact_us.action_button}</Button>
                    </Link>
                    <Link className="w-full 2sm:w-fit" href="/cases">
                        <Button className="w-full" variant="outlined">
                            {contact_us.explore_button}
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ExpertisesList
