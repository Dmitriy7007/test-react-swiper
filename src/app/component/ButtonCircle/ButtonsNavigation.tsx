'use client'
import React, { HTMLAttributes, useEffect, useRef, useState } from 'react'
import { Button } from './Button'
import { slides, timeSegments } from '@/app/db'
import { useAppStore } from '@/app/store/store'
import cn from 'clsx'
import styles from './Button.module.scss'
import gsap from 'gsap'

const ACTIVE_POINT = 3
const ROTATION_DURATION = 2

interface CountPoints extends HTMLAttributes<HTMLDivElement> {
  countPoints: number
}

export const ButtonsNavigation = (props: CountPoints) => {
  const { countPoints, className } = props
  const { updateCountPoints, datePeriod } = useAppStore()
  const pointIndex = timeSegments.findIndex(
    item => item.countPoints === countPoints
  )
  const buttonCircle = useRef<HTMLDivElement>(null)
  const desc = useRef<HTMLDivElement>(null)
  const isMounted = useRef(false)
  const hasPositionedCircle = useRef(false)

  useEffect(() => {
    isMounted.current = true
  })

  const [isClickAnimate, setIsClickAnimate] = useState(false)

  useEffect(() => {
    if (!buttonCircle.current) return

    const step = 360 / countPoints
    const circleRotation = (ACTIVE_POINT - datePeriod) * step
    const numberRotation = -circleRotation
    const duration = hasPositionedCircle.current ? ROTATION_DURATION : 0
    const numbers = buttonCircle.current.querySelectorAll('[data-number]')

    gsap.to(buttonCircle.current, {
      rotation: circleRotation,
      duration,
      ease: 'power2.out',
      overwrite: 'auto',
    })
    gsap.to(numbers, {
      rotation: numberRotation,
      duration,
      ease: 'power2.out',
      overwrite: 'auto',
    })

    hasPositionedCircle.current = true
  }, [countPoints, datePeriod])

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
        { opacity: 1, delay: 0.5, duration: 2, overwrite: 'auto' }
      )
      gsap.fromTo(
        desc.current,
        { opacity: 0 },
        { opacity: 1, delay: 0.5, duration: 2, overwrite: 'auto' }
      )
    }
  }, [datePeriod, isClickAnimate])

  const ButtonList = timeSegments[pointIndex].points.map((item, index) => (
    <Button
      data-animate={(index + 1).toString()}
      key={item.id}
      x={item.x}
      y={item.y}
      onClick={() => {
        updateCountPoints(item.id)
        setIsClickAnimate(true)
      }}
      className={cn(className, {
        [styles.isActive]: datePeriod === item.id,
      })}
    >
      <div>
        <span data-number={(index + 1).toString()}>{index + 1}</span>
      </div>
    </Button>
  ))

  return (
    <div>
      <div className={styles.circle} ref={buttonCircle}>
        {ButtonList}
      </div>

      <div className={styles.desc} ref={desc}>
        {slides[datePeriod - 1].desc}
      </div>
    </div>
  )
}
