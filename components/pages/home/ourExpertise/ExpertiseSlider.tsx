import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ExpertiseCard from './ExpertiseCard'
import { expertise } from '@/components/layout/Header/expertise/ExpertiseSubmenu'

const ExpertiseSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0)

    return (
        <Swiper
            onSlideChange={s => setActiveSlide(s.activeIndex)}
            slidesPerView="auto"
            spaceBetween={8}
            className="lg:hidden"
            wrapperClass="items-end !h-100"
        >
            {expertise.map(({ description, href, title, number, image }, i) => (
                <SwiperSlide key={`${href}${i}`} className="!h-fit !w-fit">
                    <ExpertiseCard
                        description={description}
                        href={href}
                        isActive={i === activeSlide}
                        number={number}
                        title={title}
                        wrapperStyle={{ height: i === activeSlide ? 400 : 380 }}
                        image={image}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ExpertiseSlider
