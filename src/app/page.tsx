'use client'
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react'
import { SwiperComponent } from './component/Swiper/SwiperComponent'
import styles from './page.module.scss'
import { ButtonsNavigation } from './component/ButtonCircle/ButtonsNavigation'
import { useAppStore } from './store/store'
import { ReactElement, useRef, useState } from 'react'
import cn from 'clsx'
import gsap from 'gsap'
import { ButtonPagination } from './component/ButtonPagination/ButtonPagination'
import { useGSAP } from '@gsap/react'
import { renderYearList } from './utils/renderYearList'

export default function Home() {
  const { datePeriod, countPoints, inc, dec } = useAppStore()

  const ref = useRef<HTMLDivElement>(null)
  const container = useRef<HTMLDivElement>(null)
  const tl1 = useRef<gsap.core.Timeline>()
  const tl2 = useRef<gsap.core.Timeline>()

  const [list, setList] = useState<ReactElement[] | null | number>(1815)
  const [list2, setList2] = useState<ReactElement[] | null | number>(1820)
  const [isClick, setIsClick] = useState(false)

  useGSAP(
    () => {
      if (!isClick) return
      tl1.current = gsap
        .timeline()
        .to(`[data-num='1']`, { opacity: 0, duration: 0.2, ease: 'power1.out' })
        .to(`[data-num='2']`, { opacity: 1, duration: 0.2, ease: 'power1.out' })
        .to(`[data-num='2']`, { opacity: 0, duration: 0.2, ease: 'power1.out' })
        .to(`[data-num='3']`, { opacity: 1, duration: 0.2, ease: 'power1.out' })
        .to(`[data-num='3']`, { opacity: 0, duration: 0.2, ease: 'power1.out' })
        .to(`[data-num='4']`, { opacity: 1, duration: 0.2, ease: 'power1.out' })
      tl2.current = gsap
        .timeline()
        .to(`[data-num='5']`, { opacity: 0, duration: 0.2, ease: 'power1.out' })
        .to(`[data-num='6']`, { opacity: 1, duration: 0.2, ease: 'power1.out' })
        .to(`[data-num='6']`, { opacity: 0, duration: 0.2, ease: 'power1.out' })
        .to(`[data-num='7']`, { opacity: 1, duration: 0.2, ease: 'power1.out' })
        .to(`[data-num='7']`, { opacity: 0, duration: 0.2, ease: 'power1.out' })
        .to(`[data-num='8']`, { opacity: 1, duration: 0.2, ease: 'power1.out' })
    },
    { scope: container, dependencies: [datePeriod] }
  )

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.lineVertical}></div>
          <h1 className={styles.title}>Исторические даты</h1>
        </div>

        <ButtonsNavigation
          countPoints={countPoints}
          ref={ref}
          setList={setList}
          setList2={setList2}
          setIsClick={setIsClick}
        />

        <div className={styles.circleContent} ref={container}>
          <span className={styles.year_left}>{list}</span>
          <span className={styles.year_right}>{list2}</span>
        </div>

        <div className={styles.buttonsNavigation}>
          <div className={styles.countSlide}>
            0{datePeriod}/0{countPoints}
          </div>
          <button
            onClick={() => {
              setIsClick(true)
              dec()
              if (ref.current?.firstChild && datePeriod > 1) {
                gsap.to(ref.current?.firstChild, {
                  rotation: '+=60',
                  duration: 2,
                })
                let arrNumber = Array.from(
                  { length: countPoints },
                  (x, i) => `[data-number='${i + 1}']`
                )

                gsap.to(arrNumber, { rotation: '+=-60', duration: 2 })
                setList(
                  () =>
                    renderYearList(datePeriod, datePeriod - 2)
                      ?.NumberList1 as ReactElement[]
                )
                setList2(
                  () =>
                    renderYearList(datePeriod, datePeriod - 2)
                      ?.NumberList2 as ReactElement[]
                )
              }
            }}
            className={cn(styles.buttonArrowLeft, styles.buttonArrow, {
              [styles.isDisabled]: datePeriod == 1,
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
            onClick={() => {
              setIsClick(true)
              inc()
              if (ref.current?.firstChild && datePeriod < countPoints) {
                gsap.to(ref.current?.firstChild, {
                  rotation: '+=-60',
                  duration: 2,
                })
                let arrNumber = Array.from(
                  { length: countPoints },
                  (x, i) => `[data-number='${i + 1}']`
                )

                gsap.to(arrNumber, { rotation: '+=60', duration: 2 })
                setList(
                  () =>
                    renderYearList(datePeriod, datePeriod)
                      ?.NumberList1 as ReactElement[]
                )
                setList2(
                  () =>
                    renderYearList(datePeriod, datePeriod)
                      ?.NumberList2 as ReactElement[]
                )
              }
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
            <ButtonPagination
              setList={setList}
              setList2={setList2}
              setIsClick={setIsClick}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
