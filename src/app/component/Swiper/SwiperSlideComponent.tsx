'use client'
import styles from './SwiperSlideComponent.module.scss'

interface SwiperSlideComponentProps {
  slideTitle: string
  slideText: string
}

export const SwiperSlideComponent = ({
  slideTitle,
  slideText,
}: SwiperSlideComponentProps) => {
  return (
    <>
      <h2 className={styles.slideTitle}>{slideTitle}</h2>
      <p className={styles.slideDescription}>{slideText}</p>
    </>
  )
}
