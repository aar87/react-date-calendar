import React from 'react'
import style from './days.css'
import { getMaxDay, getMinDay } from '../../helpers/date'

export const Days = ({ onSelect, selected, month, year, min, max }) => {
  const date = new Date(selected)
  const selectedYear = Number(year || date.getFullYear())
  const selectedMonth = Number(month || date.getMonth())

  const length = () => {
    return new Date(selectedYear, selectedMonth + 1, 0).getDate()
  }

  const getDays = () => {
    let i = 1
    const count = length()
    const dayList = []
    while (i <= count) {
      dayList.push(i)
      i++
    }

    return dayList
  }

  const maxDay = getMaxDay(selected, selectedYear, selectedMonth, max)
  const minDay = getMinDay(selected, selectedYear, selectedMonth, min)

  const shiftedDays = () => {
    const firstDay = new Date(selectedYear, selectedMonth, 0).getDay()

    const list = []
    for (let i = 0; i < firstDay; i++) {
      list.push(i)
    }

    return list
  }

  const isCurrentDay = (key) => {
    const date = new Date(selected)

    if (month && Number(month) !== Number(date.getMonth())) {
      return false
    }

    if (year && Number(year) !== Number(date.getFullYear())) {
      return false
    }

    return date.getDate() === key
  }

  return (
    <div className={style.days}>
      {shiftedDays().map((i) => (
        <p className={style.dayShift} key={`shift-${i}`}>
          {}
        </p>
      ))}
      {getDays().map((item, key) => {
        if (isCurrentDay(key + 1)) {
          return (
            <p
              key={key}
              className={style.daySelected}
              onClick={() => onSelect(item)}
            >
              {item}
            </p>
          )
        }

        if ((maxDay && key + 1 > maxDay) || (minDay && minDay > key + 1)) {
          return (
            <p key={key} className={style.dayDisabled}>
              {item}
            </p>
          )
        }

        return (
          <p key={key} className={style.day} onClick={() => onSelect(item)}>
            {item}
          </p>
        )
      })}
    </div>
  )
}
