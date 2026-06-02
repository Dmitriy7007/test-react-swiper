'use client'
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react'
import { SwiperComponent } from './component/Swiper/SwiperComponent'
import styles from './page.module.scss'
import { ButtonsNavigation } from './component/ButtonCircle/ButtonsNavigation'
import { useAppStore } from './store/store'
import { useState, useRef } from 'react'
import cn from 'clsx'
import gsap from 'gsap'
import { ButtonPagination } from './component/ButtonPagination/ButtonPagination'
import { useGSAP } from '@gsap/react'
import { slides } from './db'

type YearRange = {
  start: number
  end: number
}

const getYearRange = (period: number): YearRange => {
  const periodSlides = slides[period - 1].slidesNews
  const firstSlide = periodSlides[0]
  const lastSlide = periodSlides[periodSlides.length - 1]

  return {
    start: Number(firstSlide.title),
    end: Number(lastSlide.title),
  }
}

export default function Home() {
  const { datePeriod, countPoints, inc, dec } = useAppStore()

  const initialYearRange = getYearRange(datePeriod)
  const animatedYearRange = useRef<YearRange>({ ...initialYearRange })
  const [yearRange, setYearRange] = useState<YearRange>(initialYearRange)

  useGSAP(
    () => {
      const nextYearRange = getYearRange(datePeriod)

      gsap.killTweensOf(animatedYearRange.current)
      gsap.to(animatedYearRange.current, {
        ...nextYearRange,
        duration: 0.9,
        ease: 'power2.out',
        snap: {
          start: 1,
          end: 1,
        },
        onUpdate: () => {
          setYearRange({
            start: animatedYearRange.current.start,
            end: animatedYearRange.current.end,
          })
        },
        onComplete: () => {
          setYearRange(nextYearRange)
        },
      })
    },
    { dependencies: [datePeriod] }
  )

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.lineVertical}></div>
          <h1 className={styles.title}>Исторические даты</h1>
        </div>

        <ButtonsNavigation countPoints={countPoints} />

        <div className={styles.circleContent}>
          <span className={styles.year_left}>{yearRange.start}</span>
          <span className={styles.year_right}>{yearRange.end}</span>
        </div>

        <div className={styles.buttonsNavigation}>
          <div className={styles.countSlide}>
            0{datePeriod}/0{countPoints}
          </div>
          <button
            disabled={datePeriod === 1}
            onClick={() => {
              dec()
            }}
            className={cn(styles.buttonArrowLeft, styles.buttonArrow, {
              [styles.isDisabled]: datePeriod === 1,
            })}
          >
            <CircleChevronLeft
              size={50}
              color='#42567A'
              strokeWidth={1}
              style={{ marginRight: '15px' }}
            />
          </button>
          <button
            disabled={datePeriod === countPoints}
            onClick={() => {
              inc()
            }}
            className={cn(styles.buttonArrow, {
              [styles.isDisabled]: datePeriod === countPoints,
            })}
          >
            <CircleChevronRight size={50} color='#42567A' strokeWidth={1} />
          </button>
        </div>

        <div className={styles.swiperWrapper}>
          <SwiperComponent datePeriod={datePeriod} />
        </div>

        <div className={styles.pagination}>
          <div className={styles.paginationGroup}>
            <ButtonPagination />
          </div>
        </div>
      </div>
    </main>
  )
}
