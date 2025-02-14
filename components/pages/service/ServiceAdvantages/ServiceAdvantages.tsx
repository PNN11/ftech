'use client'
import ArrowCircleRightDown from '@/components/svg/ArrowCircleRightDown'
import UsersTwo from '@/components/svg/UsersTwo'
import Button from '@/components/ui/buttons/defaultButton'
import ButtonWithIcon from '@/components/ui/buttons/withIcon/ButtonWithIcon'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { cn } from '@/lib/classNames'
import Link from 'next/link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const icons = {
    arrowCircle: ArrowCircleRightDown,
    users: UsersTwo,
}

type AdvantageCard = {
    title: string
    description: string
    actionButton?: { text: string; href: string }
    icon?: keyof typeof icons
}

type ServiceAdvantagesProps = {
    title: string
    subtitle?: string
    description?: string
    cards: [AdvantageCard, AdvantageCard, AdvantageCard, AdvantageCard, AdvantageCard]
    hasContactSection: boolean
}

const ServiceAdvantages: FC<ServiceAdvantagesProps> = ({ title, description, subtitle, cards, hasContactSection }) => {
    const { t } = useTranslation()
    const { contact_us } = t('expertise:expertise_list', {
        returnObjects: true,
    }) as {
        contact_us: {
            title: string
            action_button: string
            explore_button: string
        }
    }
    return (
        <section className="py-12.5">
            <TitleWithDescription
                title={title}
                subtitle={subtitle}
                description={description}
                classes={{ title: 'max-w-160 mx-auto' }}
            />
            <ul
                className="grid grid-cols-1 items-end justify-center gap-2 
            sm:grid-cols-2 lg:grid-cols-[minmax(200px,229px)_minmax(155px,184px)_240px_minmax(180px,221px)_minmax(168px,229px)]"
            >
                {cards.map(({ description, title, icon, actionButton }, i) => {
                    const Icon = icon ? icons[icon] : null
                    return (
                        <li
                            key={title}
                            className={cn(
                                'h-fit rounded-8 border border-gray-200 bg-white-10 px-5.5 py-7 sm:h-full lg:h-fit',
                                {
                                    'sm:col-span-2 lg:col-span-1': i === 2,
                                }
                            )}
                        >
                            {Icon && <Icon className="mb-4.5 text-[#343330]" />}
                            <Heading className="mb-4 font-normal" variant="h4">
                                {title}
                            </Heading>
                            <Paragraph variant="p2">{description}</Paragraph>
                            {actionButton && (
                                <Link className="mt-5.5 block w-full" href={actionButton.href}>
                                    <ButtonWithIcon className="w-full sm:px-2.5 sm:pr-0.75 2sm:px-3.25" size="s">
                                        {actionButton.text}
                                    </ButtonWithIcon>
                                </Link>
                            )}
                        </li>
                    )
                })}
            </ul>
            {hasContactSection && (
                <div
                    className="mt-3 flex flex-col items-center justify-between gap-4 rounded-8 bg-gray-50 px-6 py-7 shadow-button
             md:flex-row"
                >
                    <Heading className="text-center md:text-left" variant="h5">
                        {contact_us.title}
                    </Heading>
                    <Link className="w-full md:w-fit" href="/contacts">
                        <Button className="w-full">{contact_us.action_button}</Button>
                    </Link>
                </div>
            )}
        </section>
    )
}

export default ServiceAdvantages
