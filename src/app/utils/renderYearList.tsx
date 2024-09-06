import { slides } from '../db'
import styles from '../page.module.scss'
import cn from 'clsx'

const getArrNum = (yearBegin1: number, yearBegin2: number) => {
  let arrNum = [+yearBegin1, +yearBegin2]

  if (yearBegin1 > yearBegin2) {
    arrNum.push(
      Math.floor(Math.random() * (yearBegin1 - yearBegin2) + yearBegin2)
    )
    arrNum.push(
      Math.floor(Math.random() * (yearBegin1 - yearBegin2) + yearBegin2)
    )
    arrNum.sort((a, b) => b - a)
  } else {
    arrNum.push(
      Math.floor(Math.random() * (yearBegin2 - yearBegin1) + yearBegin1)
    )
    arrNum.push(
      Math.floor(Math.random() * (yearBegin2 - yearBegin1) + yearBegin1)
    )
    arrNum.sort((a, b) => a - b)
  }
  return arrNum
}

export const renderYearList = (datePeriod: number, datePeriod2: number) => {
  const yearBegin1 = slides[datePeriod - 1].slidesNews[0].title
  const yearBegin2 = slides[datePeriod2].slidesNews[0].title
  const yearEnd1 =
    slides[datePeriod - 1].slidesNews[
      slides[datePeriod - 1].slidesNews.length - 1
    ].title
  const yearEnd2 =
    slides[datePeriod2].slidesNews[slides[datePeriod2].slidesNews.length - 1]
      .title

  const arrNum1 = getArrNum(+yearBegin1, +yearBegin2)
  const arrNum2 = getArrNum(+yearEnd1, +yearEnd2)

  const NumberList1 = arrNum1.map((num, i) => (
    <div
      key={i}
      data-num={i + 1}
      className={cn(styles.year, {
        [styles.yearNonActive]: i > 0,
      })}
    >
      {num}
    </div>
  ))

  const NumberList2 = arrNum2.map((num, i) => (
    <div
      key={i}
      data-num={i + 5}
      className={cn(styles.year, {
        [styles.yearNonActive]: i > 0,
      })}
    >
      {num}
    </div>
  ))

  return { NumberList1, NumberList2 }
}
