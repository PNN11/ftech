import { cn } from '@/lib/classNames'
import Image from 'next/image'
import React, { ComponentProps, FC } from 'react'

type AboutUsItemWrapperProps = ComponentProps<'div'> & {
    bgSrc: string
    classes?: { bg?: string; childrenWrapper?: string }
}

const AboutUsItemWrapper: FC<AboutUsItemWrapperProps> = ({ children, className, classes, bgSrc, ...props }) => {
    return (
        <div
            className={cn(
                `relative overflow-hidden rounded-8 border border-gray-800  bg-white-300
                 shadow-about-us-card dark:bg-white-300 md:dark:border-[#42A1E9] md:dark:bg-primary-blue md:dark:shadow-about-us-card-blue`,
                className
            )}
            {...props}
        >
            <div
                className={cn(
                    'relative z-[1] flex h-full w-full flex-col items-start gap-3.5 px-4.5 py-6 md:px-6',
                    classes?.childrenWrapper
                )}
            >
                {children}
            </div>
            <Image
                src={bgSrc}
                fill
                alt=""
                className={cn('hidden rounded-8 mix-blend-soft-light dark:block', classes?.bg)}
            />
        </div>
    )
}

export default AboutUsItemWrapper
