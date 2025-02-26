import { expertise } from '@/components/layout/Header/expertise/ExpertiseSubmenu'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ExpertiseCard from './ExpertiseCard'

const ExpertiseSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0)

    return (
        <Swiper
            onSlideChange={s => setActiveSlide(s.realIndex)}
            slidesPerView="auto"
            spaceBetween={8}
            wrapperClass="items-end !h-100"
            loop
        >
            {new Array<typeof expertise>(8)
                .fill(expertise)
                .flat()
                .map(({ description, href, title, number, image }, i) => (
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
