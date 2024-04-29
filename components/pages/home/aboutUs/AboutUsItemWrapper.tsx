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
                `rounded-8 shadow-about-us-card dark:shadow-about-us-card-blue relative overflow-hidden  border
                 border-gray-800 bg-white-300  dark:border-[#42A1E9] dark:bg-primary-blue`,
                className
            )}
            {...props}
        >
            <div
                className={cn(
                    'relative z-[1] flex h-full w-full flex-col items-start gap-3.5 px-5 py-6 xl:px-6',
                    classes?.childrenWrapper
                )}
            >
                {children}
            </div>
            <Image
                src={bgSrc}
                fill
                alt=""
                className={cn('rounded-8 hidden mix-blend-soft-light dark:block', classes?.bg)}
            />
        </div>
    )
}

export default AboutUsItemWrapper
