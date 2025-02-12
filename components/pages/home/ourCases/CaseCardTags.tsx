import { cn } from '@/lib/classNames'
import { FC } from 'react'

type CaseCardTagsProps = {
    tags: string[]
    tone: 'light' | 'dark'
    classes?: { wrapper?: string }
}

const CaseCardTags: FC<CaseCardTagsProps> = ({ tags, tone, classes }) => {
    return (
        <div className={cn('flex flex-wrap items-center gap-2', classes?.wrapper)}>
            {tags.map((tag, i) => (
                <div
                    className={cn('h-7.5 rounded-lg px-3 py-2 text-sm leading-none tracking-h2 text-white-300', {
                        'bg-gray-100 bg-opacity-[0.33]': tone === 'light',
                        'bg-[#6C6C6C] bg-opacity-[0.66]': tone === 'dark',
                    })}
                    key={`${tag}${i}`}
                >
                    {tag}
                </div>
            ))}
        </div>
    )
}

export default CaseCardTags
