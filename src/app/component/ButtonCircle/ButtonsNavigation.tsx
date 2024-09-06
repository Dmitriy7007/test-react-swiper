'use client'
import React, {
  forwardRef,
  HTMLAttributes,
  ReactElement,
  useEffect,
  useState,
} from 'react'
import { Button } from './Button'
import { slides, timeSegments } from '@/app/db'
import { useAppStore } from '@/app/store/store'
import cn from 'clsx'
import styles from './Button.module.scss'
import gsap from 'gsap'
import { useRef } from 'react'
import { renderYearList } from '@/app/utils/renderYearList'

interface countPoints extends HTMLAttributes<HTMLDivElement> {
  countPoints: number
  setList: React.Dispatch<React.SetStateAction<ReactElement[] | null | number>>
  setList2: React.Dispatch<React.SetStateAction<ReactElement[] | null | number>>
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>
}

export const ButtonsNavigation = forwardRef<HTMLDivElement, countPoints>(
  function ButtonsNavigation(props: countPoints, ref) {
    const { countPoints, className, setList, setList2, setIsClick } = props
    const { updateCountPoints, datePeriod } = useAppStore()
    const pointIndex = timeSegments.findIndex(
      item => item.countPoints === countPoints
    )
    const buttonCircle = useRef<HTMLDivElement>(null)
    const desc = useRef<HTMLDivElement>(null)
    const isMounted = useRef(false)

    useEffect(() => {
      isMounted.current = true
    })

    const [isClickAnimate, setIsClickAnimate] = useState(false)

    useEffect(() => {
      if (
        isMounted.current &&
        desc.current &&
        buttonCircle.current &&
        isClickAnimate
      ) {
        gsap.fromTo(
          `[data-animate='${datePeriod}']`,
          { opacity: 0 },
          { opacity: 1, delay: 0.5, duration: 2 }
        )
        gsap.fromTo(
          desc.current,
          { opacity: 0 },
          { opacity: 1, delay: 0.5, duration: 2 }
        )
      }
    }, [datePeriod])

    function animateRotationSector(id: number) {
      const sector = ((id - datePeriod) * 360) / countPoints
      gsap.to(buttonCircle.current, { rotation: `+=${-sector}`, duration: 2 })

      let arrNumber = Array.from(
        { length: countPoints },
        (x, i) => `[data-number='${i + 1}']`
      )

      gsap.to(arrNumber, { rotation: `+=${sector}`, duration: 2 })
    }

    const ButtonList = timeSegments[pointIndex].points.map((item, index) => (
      <Button
        data-animate={(index + 1).toString()}
        key={item.id}
        x={item.x}
        y={item.y}
        onClick={() => {
          updateCountPoints(item.id)
          animateRotationSector(item.id)
          setIsClickAnimate(true)
          setIsClick(true)
          setList(
            () =>
              renderYearList(datePeriod, item.id - 1)
                ?.NumberList1 as ReactElement[]
          )
          setList2(
            () =>
              renderYearList(datePeriod, item.id - 1)
                ?.NumberList2 as ReactElement[]
          )
        }}
        className={cn({
          [styles.isActive]: datePeriod == item.id,
          className,
        })}
      >
        <div>
          <span data-number={(index + 1).toString()}>{index + 1}</span>
        </div>
      </Button>
    ))
    return (
      <div ref={ref}>
        <div className={styles.circle} ref={buttonCircle}>
          {ButtonList}
        </div>

        <div className={styles.desc} ref={desc}>
          {slides[datePeriod - 1].desc}
        </div>
      </div>
    )
  }
)
