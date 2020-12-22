import React from 'react'
import style from './days.css'

export const Days = ({onSelect, selected, month, year}) => {
  const length = 31
  const getDays = () => {
    let i = 1;
    let dayList = []
    while (i < length) {
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
