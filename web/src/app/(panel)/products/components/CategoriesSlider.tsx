'use client'

import 'swiper/swiper.min.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Badge } from './Badge'

export function CategoriesSlider() {
  return (
    <div className="z-0 h-10 w-10/12 lg:w-[1024px] lg:flex-1">
      <Swiper
        spaceBetween={6}
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 4.25,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 24,
          },
        }}
      >
        <SwiperSlide>
          <Badge isActive>Todos</Badge>
        </SwiperSlide>

        <SwiperSlide>
          <Badge>Camisetas</Badge>
        </SwiperSlide>

        <SwiperSlide>
          <Badge>Sapatos</Badge>
        </SwiperSlide>

        <SwiperSlide>
          <Badge>Camisetas</Badge>
        </SwiperSlide>

        <SwiperSlide>
          <Badge>Sapatos</Badge>
        </SwiperSlide>

        <SwiperSlide>
          <Badge>Camisetas</Badge>
        </SwiperSlide>

        <SwiperSlide>
          <Badge>Sapatos</Badge>
        </SwiperSlide>

        <SwiperSlide>
          <Badge>Camisetas</Badge>
        </SwiperSlide>

        <SwiperSlide>
          <Badge>Sapatos</Badge>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
