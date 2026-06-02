import type { ButtonHTMLAttributes, ReactNode } from 'react'
import cn from 'clsx'

import styles from './Button.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  x?: number
  y?: number
}

export const Button = ({ children, className, x, y, ...rest }: Props) => {
  const positionStyle =
    x !== undefined && y !== undefined
      ? { top: `${y}px`, left: `${x}px` }
      : undefined

  return (
    <button
      className={cn(styles.button, className)}
      style={positionStyle}
      {...rest}
    >
      {children}
    </button>
  )
}
