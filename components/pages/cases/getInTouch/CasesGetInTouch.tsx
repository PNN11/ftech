'use client'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import Button from '@/components/ui/buttons/defaultButton/button'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import Link from 'next/link'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import CasesGetInTouchLines from './CasesGetInTouchLines'
import Image from 'next/image'
import MouseParallaxWrapper from '@/components/ui/wrappers/mouseParallaxWrapper'

const CasesGetInTouch: FC = () => {
    const { t } = useTranslation()

    const { description, subtitle, title, action_button } = t('cases:get-in-touch', { returnObjects: true }) as {
        title: string
        description: string
        subtitle: string
        action_button: string
    }

    return (
        <SectionWrapper>
            <Container>
                <div className="relative overflow-hidden rounded-3xl border border-gray-200 px-4.5 md:rounded-8 md:px-12">
                    <div className="max-w-147 relative mx-auto py-4.5 md:pb-13 md:pt-12">
                        <TitleWithDescription
                            classes={{ wrapper: 'mb-7' }}
                            title={title}
                            subtitle={subtitle}
                            description={description}
                        />
                        <Link className="relative z-[2] mx-auto block w-full md:w-fit" href="/contacts">
                            <Button size="l" className="w-full">
                                {action_button}
                            </Button>
                        </Link>
                        <CasesGetInTouchLines className="-left-75.5 absolute top-0 hidden md:block" />
                        <CasesGetInTouchLines className="-right-75.5 absolute top-0 hidden rotate-180 md:block" />
                        <MouseParallaxWrapper isAbsolutelyPositioned strength={0.1} enableOnTouchDevice={false}>
                            <Image
                                src="/images/cases/cases_people_left.png"
                                width={299}
                                height={251}
                                alt=""
                                className="absolute -left-65 top-14 hidden max-w-max md:block"
                            />
                            <Image
                                src="/images/cases/cases_people_right.png"
                                width={322}
                                height={303}
                                alt=""
                                className="absolute -right-65 top-7.5 hidden max-w-max md:block"
                            />
                        </MouseParallaxWrapper>
                    </div>
                </div>
            </Container>
        </SectionWrapper>
    )
}

export default CasesGetInTouch
