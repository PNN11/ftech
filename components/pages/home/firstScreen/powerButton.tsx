import { cn } from '@/lib/classNames'
import { ComponentProps, FC } from 'react'

const PowerButton: FC<ComponentProps<'svg'>> = ({ className, ...props }) => {
    return (
        <svg
            width="139"
            height="140"
            viewBox="0 0 139 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('text-gray-900 dark:text-blue-900', className)}
            {...props}
        >
            <g filter="url(#filter0_d_269_3806)">
                <circle cx="69.4388" cy="53.4388" r="40.2083" fill="url(#paint0_linear_269_3806)" />
                <circle
                    cx="69.4389"
                    cy="53.439"
                    r="45.211"
                    stroke="url(#paint1_radial_269_3806)"
                    strokeOpacity="0.32"
                    strokeWidth="4.95591"
                />
                <circle
                    cx="69.4409"
                    cy="53.4387"
                    r="42.0629"
                    stroke="url(#paint2_linear_269_3806)"
                    strokeWidth="6.73256"
                />
                <circle
                    cx="69.4409"
                    cy="53.4387"
                    r="45.0365"
                    stroke="#2D4454"
                    strokeOpacity="0.32"
                    strokeWidth="0.785465"
                />
                <path
                    d="M69.439 32.3999V53.4391M84.3093 38.5714C87.251 41.5141 89.2541 45.263 90.0653 49.344C90.8766 53.425 90.4595 57.655 88.8669 61.499C87.2743 65.343 84.5776 68.6285 81.1179 70.94C77.6582 73.2515 73.5907 74.4853 69.4298 74.4853C65.269 74.4853 61.2015 73.2515 57.7418 70.94C54.282 68.6285 51.5854 65.343 49.9928 61.499C48.4001 57.655 47.9831 53.425 48.7943 49.344C49.6056 45.263 51.6087 41.5141 54.5504 38.5714"
                    stroke="url(#paint3_linear_269_3806)"
                    strokeWidth="6.73256"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M69.439 32.3999V53.4391M84.3093 38.5714C87.251 41.5141 89.2541 45.263 90.0653 49.344C90.8766 53.425 90.4595 57.655 88.8669 61.499C87.2743 65.343 84.5776 68.6285 81.1179 70.94C77.6582 73.2515 73.5907 74.4853 69.4298 74.4853C65.269 74.4853 61.2015 73.2515 57.7418 70.94C54.282 68.6285 51.5854 65.343 49.9928 61.499C48.4001 57.655 47.9831 53.425 48.7943 49.344C49.6056 45.263 51.6087 41.5141 54.5504 38.5714"
                    stroke="currentColor"
                    strokeWidth="6.73256"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_269_3806"
                    x="0.093605"
                    y="0.925001"
                    width="138.691"
                    height="138.691"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="16.8314" />
                    <feGaussianBlur stdDeviation="10.8282" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.545098 0 0 0 0 0.545098 0 0 0 0 0.545098 0 0 0 0.05 0"
                    />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_269_3806" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_269_3806" result="shape" />
                </filter>
                <linearGradient
                    id="paint0_linear_269_3806"
                    x1="40.4514"
                    y1="26.3216"
                    x2="102.634"
                    y2="75.4131"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E3E3E3" />
                    <stop offset="1" stopColor="#FBFBFB" />
                </linearGradient>
                <radialGradient
                    id="paint1_radial_269_3806"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(69.4389 53.439) rotate(90) scale(47.689)"
                >
                    <stop offset="0.905985" stopColor="#72818C" stopOpacity="0.29" />
                    <stop offset="0.999838" stopColor="#72818C" stopOpacity="0.6" />
                    <stop offset="1" stopColor="#72818C" stopOpacity="0" />
                </radialGradient>
                <linearGradient
                    id="paint2_linear_269_3806"
                    x1="34.3754"
                    y1="25.3864"
                    x2="104.974"
                    y2="81.0235"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F4F4F4" />
                    <stop offset="1" stopColor="#ECECEC" />
                </linearGradient>
                <linearGradient
                    id="paint3_linear_269_3806"
                    x1="76.3188"
                    y1="30.7908"
                    x2="76.1049"
                    y2="74.4601"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#606060" />
                    <stop offset="1" stopColor="#373737" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default PowerButton
