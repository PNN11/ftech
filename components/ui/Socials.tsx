import React from 'react'
import Linkedin from '../svg/Linkedin'
import {
    COMPANY_EMAIL,
    INSTAGRAM_ADDRESS,
    LINKEDIN_ADDRESS,
    TELEGRAM_ADDRESS,
    UPWORK_ADDRESS,
    WHATSAPP_ADDRESS,
} from '@/lib/constants'
import WhatsUp from '../svg/WhatsUp'
import Instagram from '../svg/Instagram'
import Upwork from '../svg/Upwork'
import Telegram from '../svg/Telegram'
import Envelope from '../svg/Envelope'
import Link from 'next/link'

const socials = [
    {
        Icon: Linkedin,
        href: LINKEDIN_ADDRESS,
    },
    {
        Icon: Instagram,
        href: INSTAGRAM_ADDRESS,
    },
    {
        Icon: Upwork,
        href: UPWORK_ADDRESS,
    },
    {
        Icon: Telegram,
        href: TELEGRAM_ADDRESS,
    },
    {
        Icon: Envelope,
        href: `mailto:${COMPANY_EMAIL}`,
    },
]

const Socials = () => {
    return (
        <ul className="flex items-center gap-5">
            {socials.map(({ Icon, href }) => (
                <li key={href}>
                    <Link href={href} target="_blank" rel="noopener noreferrer">
                        <Icon />
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Socials
