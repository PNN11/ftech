import SealCheck from '@/components/svg/SealCheck'
import ButtonWithIcon from '@/components/ui/buttons/withIcon'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { cn } from '@/lib/classNames'
import Link from 'next/link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import AboutUsItemWrapper from '../AboutUsItemWrapper'

type CompletedProjectsCardProps = {
    classes?: { wrapper?: string }
}

const CompletedProjectsCard: FC<CompletedProjectsCardProps> = ({ classes }) => {
    const { t } = useTranslation()

    return (
        <AboutUsItemWrapper
            bgSrc="/images/home/projects_bg.png"
            classes={{
                bg: 'opacity-[0.11] mix-blend-overlay',
                childrenWrapper: 'justify-between gap-6',
            }}
            className={cn('', classes?.wrapper)}
        >
            <div className="space-y-3.5">
                <SealCheck className="text-dark-blue-900 dark:text-blue-900 md:dark:text-white" />
                <Heading className="dark:text-dark-blue-900 md:dark:text-white" variant="h3">
                    {t('about-us.items.completed-projects.title')}
                </Heading>
                <Paragraph className="dark:text-dark-blue-700 md:dark:text-white" variant="p2">
                    {t('about-us.items.completed-projects.description')}
                </Paragraph>
            </div>
        </AboutUsItemWrapper>
    )
}

export default CompletedProjectsCard
