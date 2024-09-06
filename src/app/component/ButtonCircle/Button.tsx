import type { ButtonHTMLAttributes, ReactNode, RefObject } from 'react'
import cn from 'clsx'

import styles from './Button.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  x?: number
  y?: number
}

export const Button = ({ children, className, x, y, ...rest }: Props) => {
  return (
    <button
      className={cn(styles.button, className)}
      style={{ top: `${y}px`, left: `${x}px` }}
      {...rest}
    >
      {children}
    </button>
  )
}
