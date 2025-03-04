import ButtonWithIcon from '@/components/ui/buttons/withIcon/ButtonWithIcon'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type OutsourcingFirstScreenProps = {
    title: string
    description: string
    image: string
    actionButton: { text: string; href?: string }
}

const OutsourcingFirstScreen: FC<OutsourcingFirstScreenProps> = ({ title, description, image, actionButton }) => {
    return (
        <section className="relative overflow-hidden rounded-8 p-5 md:p-12">
            <div className="relative z-[1] max-w-160 space-y-9">
                <Heading className="max-w-116 text-dark-blue-100 dark:text-dark-blue-100" variant="h1">
                    {title}
                </Heading>
                <Paragraph className="text-gray-100 dark:text-white-200" variant="p1">
                    {description}
                </Paragraph>
                <Link className="block w-full md:w-fit" href={actionButton.href ?? '/contacts'}>
                    <ButtonWithIcon size="l" className="w-full" color="secondary">
                        {actionButton.text}
                    </ButtonWithIcon>
                </Link>
            </div>
            <Image
                src={image}
                width={1192}
                height={1058}
                alt=""
                className="absolute left-0 top-0 h-full object-cover"
                quality={100}
                priority
            />
            <Image
                src="/images/services/lines.svg"
                alt=""
                width={571}
                height={363}
                quality={100}
                className="absolute bottom-0 right-0 max-w-max"
            />
        </section>
    )
}

export default OutsourcingFirstScreen
