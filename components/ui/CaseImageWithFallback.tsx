import { cn } from '@/lib/classNames'
import Image, { ImageProps } from 'next/image'
import { FC } from 'react'

type CaseImageWithFallbackProps = Omit<ImageProps, 'src'> & {
    classes?: { fallback?: string; wrapper?: string }
    src?: string
}

const CaseImageWithFallback: FC<CaseImageWithFallbackProps> = ({
    src,
    width,
    height,
    alt,
    classes,
    className,
    ...props
}) => {
    return (
        <div className={cn('shadow-case-image rounded-8 border border-gray-100', classes?.wrapper)}>
            {src ? (
                <Image
                    className={cn('rounded-8', className)}
                    src={src}
                    width={width}
                    height={height}
                    alt={alt}
                    {...props}
                />
            ) : (
                <div style={{ height }} className={cn('max-w-full rounded-8 bg-gray-50', classes?.fallback)} />
            )}
        </div>
    )
}

export default CaseImageWithFallback
