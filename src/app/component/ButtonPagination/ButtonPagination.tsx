import { timeSegments } from '@/app/db'
import { useAppStore } from '@/app/store/store'
import { Button } from '../ButtonCircle/Button'
import styles from './ButtonPagination.module.scss'
import cn from 'clsx'

export const ButtonPagination = () => {
  const { updateCountPoints, countPoints, datePeriod } = useAppStore()

  const pointIndex = timeSegments.findIndex(
    item => item.countPoints === countPoints
  )

  const ButtonList = timeSegments[pointIndex].points.map(item => (
    <div key={item.id}>
      <Button
        onClick={() => {
          updateCountPoints(item.id)
        }}
        className={cn(styles.buttonPagination, {
          [styles.isActive]: datePeriod === item.id,
        })}
      ></Button>
    </div>
  ))
  return <>{ButtonList}</>
}
