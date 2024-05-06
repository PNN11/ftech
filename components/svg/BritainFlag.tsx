import { ComponentProps, FC } from 'react'

const BritainFlag: FC<ComponentProps<'svg'>> = props => {
    return (
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath="url(#clip0_908_14880)">
                <g clipPath="url(#clip1_908_14880)">
                    <rect x="0.125" width="13.75" height="10" rx="1.25" fill="#1A47B8" />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.58772 0H0.125V1.66667L12.4043 10L13.875 10V8.33333L1.58772 0Z"
                        fill="white"
                    />
                    <path d="M0.612862 0L13.875 9.02362V10H13.3986L0.125 0.967039V0H0.612862Z" fill="#F93939" />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5655 0H13.875V1.66667C13.875 1.66667 5.36951 7.2187 1.43452 10H0.125V8.33333L12.5655 0Z"
                        fill="white"
                    />
                    <path d="M13.875 0H13.4309L0.125 9.03139V10H0.612862L13.875 0.974342V0Z" fill="#F93939" />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.12547 0H8.88597V3.08454H13.875V6.91342H8.88597V10H5.12547V6.91342H0.125V3.08454H5.12547V0Z"
                        fill="white"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.91447 0H8.08553V3.84615H13.875V6.15385H8.08553V10H5.91447V6.15385H0.125V3.84615H5.91447V0Z"
                        fill="#F93939"
                    />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_908_14880">
                    <rect width="13.75" height="10" fill="white" transform="translate(0.125)" />
                </clipPath>
                <clipPath id="clip1_908_14880">
                    <rect x="0.125" width="13.75" height="10" rx="1.25" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default BritainFlag
