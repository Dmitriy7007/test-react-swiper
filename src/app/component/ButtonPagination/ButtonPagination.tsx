import { timeSegments } from '@/app/db'
import { useAppStore } from '@/app/store/store'
import { Button } from '../ButtonCircle/Button'
import styles from './ButtonPagination.module.scss'
import cn from 'clsx'
import { ReactElement } from 'react'
import { renderYearList } from '@/app/utils/renderYearList'

interface IProps {
  setList: React.Dispatch<React.SetStateAction<ReactElement[] | null | number>>
  setList2: React.Dispatch<React.SetStateAction<ReactElement[] | null | number>>
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>
}

export const ButtonPagination = (props: IProps) => {
  const { updateCountPoints, countPoints, datePeriod } = useAppStore()

  const { setList, setList2, setIsClick } = props

  const pointIndex = timeSegments.findIndex(
    item => item.countPoints === countPoints
  )

  const ButtonList = timeSegments[pointIndex].points.map(item => (
    <div key={item.id}>
      <Button
        onClick={() => {
          updateCountPoints(item.id)
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
        className={cn(styles.buttonPagination, {
          [styles.isActive]: datePeriod == item.id,
        })}
      ></Button>
    </div>
  ))
  return <>{ButtonList}</>
}
