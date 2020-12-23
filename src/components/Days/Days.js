import React from 'react'
import style from './days.css'

export const Days = ({onSelect, selected, month, year}) => {
  const length = () => {
    let date = new Date(selected)
    const selectedYear = Number(year ? year : date.getFullYear())
    const selectedMonth = Number(month ? month : date.getMonth())

    return new Date(selectedYear, selectedMonth + 1, 0).getDate()
  }
  const getDays = () => {
    let i = 1;
    const count = length()
    let dayList = []
    while (i <= count) {
      dayList.push(i)
      i++
    }

    return dayList
  }

  const isCurrentDay = key => {
    const date = new Date(selected)

    if (month && Number(month) !== Number(date.getMonth())) {
      return false
    }

    if (year && Number(year) !== Number(date.getFullYear())) {
      return false
    }

    return date.getDate() === key
  }

  return <div className={style.days}>
    {getDays().map((item, key) =>
      isCurrentDay(key + 1)
        ? <p key={key} className={style.daySelected} onClick={() => onSelect(item)}>{item}</p>
        : <p key={key} className={style.day} onClick={() => onSelect(item)}>{item}</p>
    )}
  </div>
}
