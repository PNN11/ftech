import ButtonWithIcon from '@/components/ui/buttons/withIcon'
import FeatureCard from '@/components/ui/FeatureCard'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export type OutcomeCardProps = {
    title: string
    description: string
    actionButton?: { text: string; href: string }
    image?: string
}

const OutcomeCard: FC<OutcomeCardProps> = ({ description, title, actionButton, image }) => {
    return (
        <FeatureCard title={title} description={description}>
            {image && (
                <Image src={image} width={40} height={38} alt="" className="absolute -top-5.5 left-5" quality={100} />
            )}
            {actionButton && (
                <Link className="-mx-1 mt-5 block" href={actionButton.href}>
                    <ButtonWithIcon className="w-full" size="s">
                        {actionButton.text}
                    </ButtonWithIcon>
                </Link>
            )}
        </FeatureCard>
    )
}

export default OutcomeCard
