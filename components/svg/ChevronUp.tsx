import React, { ComponentProps, FC } from 'react'

const ChevronUp: FC<ComponentProps<'svg'>> = props => {
    return (
        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M1.5 6.5L6.5 1.5L11.5 6.5" stroke="currentColor" strokeWidth="2" />
        </svg>
    )
}

export default ChevronUp
