import QuotesLarge from '@/components/svg/QuotesLarge'
import ClutchInfo from '@/components/ui/ClutchInfo'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { FC } from 'react'

type ProjectReviewProps = {
    title: string
    item: {
        name: string
        message: string
    }
}

const ProjectReviews: FC<ProjectReviewProps> = ({ item, title }) => {
    return (
        <section className="py-6.25">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-2.5">
                <Heading className="lg:max-w-123" variant="h2">
                    {title}
                </Heading>
                <div>
                    <div className="flex items-center justify-between py-4">
                        <Heading variant="h5">{item.name}</Heading>
                        <div className="flex items-baseline gap-3.5">
                            <p className="text-sm font-light text-gray-700">From</p>
                            <ClutchInfo classes={{ reviews: 'hidden', wrapper: 'flex-row-reverse' }} />
                        </div>
                    </div>
                    <div className="grid grid-cols-[2.5rem_1fr_2.5rem] gap-6 rounded-8 bg-gray-50 p-4.5 md:p-8">
                        <QuotesLarge className="text-dark-blue-600" />
                        <Paragraph variant="p1">{item.message}</Paragraph>
                        <QuotesLarge className="rotate-180 self-end text-dark-blue-600" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectReviews
