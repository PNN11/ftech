'use client'

import { FC } from 'react'

const Map: FC = () => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1221.195751070412!2d20.99489837777806!3d52.25443534849395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecdcd31e1d965%3A0x64eb75ea9420db5!2sStawki%202%2C%2000-193%20Warszawa%2C%20Poland!5e0!3m2!1sen!2sby!4v1715783604149!5m2!1sen!2sby"
            width="600"
            height="450"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="lg:h-68 shadow-map h-150 w-full rounded-xl border border-gray-200 dark:border-transparent"
        ></iframe>
    )
}

export default Map
