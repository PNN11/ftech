import React, { ComponentProps, FC } from 'react'
import Image from 'next/image'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Link from 'next/link'
import Button from '@/components/ui/buttons/defaultButton'
import { cn } from '@/lib/classNames'

type CTASectionProps = {
    image?: string
    title: string
    description: string
    actionButton: {
        title: string
        href: string
        size?: ComponentProps<typeof Button>['size']
    }
    classes?: {
        wrapper?: string
        image?: string
        textWrapper?: string
    }
}

const CTASection: FC<CTASectionProps> = ({ actionButton, description, image, title, classes }) => {
    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center gap-11 border-b border-t border-gray-300 py-9.5 md:flex-row md:gap-29 lg:gap-25',
                classes?.wrapper
            )}
        >
            <Image
                src={image ?? '/images/case/case_people.png'}
                width={267}
                height={253}
                alt=""
                quality={100}
                className={classes?.image ?? ''}
            />
            <div className={cn('md:max-w-87 lg:max-w-122', classes?.textWrapper)}>
                <Heading className="mb-4" variant="h5">
                    💡 {title}
                </Heading>
                <Paragraph className="mb-7" variant="p1">
                    {description}
                </Paragraph>
                <Link href={actionButton.href}>
                    <Button size={actionButton.size ?? 's'}>{actionButton.title}</Button>
                </Link>
            </div>
        </div>
    )
}

export default CTASection
