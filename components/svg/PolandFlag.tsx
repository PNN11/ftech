import { ComponentProps, FC } from 'react'

const PolandFlag: FC<ComponentProps<'svg'>> = props => {
    return (
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath="url(#clip0_908_14882)">
                <g clipPath="url(#clip1_908_14882)">
                    <rect x="0.125" width="13.75" height="10" rx="1.25" fill="#AF010D" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.125 0H13.875V5H0.125V0Z" fill="white" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_908_14882">
                    <rect width="13.75" height="10" fill="white" transform="translate(0.125)" />
                </clipPath>
                <clipPath id="clip1_908_14882">
                    <rect x="0.125" width="13.75" height="10" rx="1.25" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default PolandFlag
