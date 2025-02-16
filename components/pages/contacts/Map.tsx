'use client'

import { FC } from 'react'

const Map: FC = () => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.669110125894!2d21.04703517691265!3d52.21306035890885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd173a7dfec5%3A0xcf3879f7d366e1a!2sBartycka%20116%2C%2000-716%20Warszawa%2C%20Poland!5e0!3m2!1sen!2sby!4v1739732944832!5m2!1sen!2sby"
            width="600"
            height="450"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-150 w-full rounded-xl border border-gray-200 shadow-map lg:h-68 dark:border-transparent"
        ></iframe>
    )
}

export default Map
