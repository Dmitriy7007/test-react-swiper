'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { SwiperSlideComponent } from './SwiperSlideComponent'
import styles from './SwiperSlideComponent.module.scss'
import { slides } from '@/app/db'

export const SwiperComponent = ({ datePeriod }: { datePeriod: number }) => {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={3}
      spaceBetween={80}
      navigation
      breakpoints={{
        320: {
          slidesPerView: 1.8,
          spaceBetween: 25,
        },
        420: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 80,
        },
      }}
    >
      {slides[datePeriod - 1].slidesNews.map(item => {
        return (
          <SwiperSlide key={item.id} className={styles.swiperSlide}>
            <SwiperSlideComponent
              slideTitle={item.title}
              slideText={item.text}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
