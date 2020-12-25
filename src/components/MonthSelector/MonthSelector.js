import React from 'react'

import { getMaxMonth, getMinMonth } from '../../helpers/date'
import { getMonthList } from '../../locale/calendar'

import styles from './monthSelector.css'
import arrow from './../../styles.module.css'

const limitMonth = (selected, year, min, max, list = []) => {
  const maxMonth = getMaxMonth(selected, year, max)
  const minMonth = getMinMonth(selected, year, min)

  if (maxMonth || minMonth) {
    list = list.filter((item, key) => {
      if (minMonth && maxMonth) {
        return minMonth < key && key <= maxMonth
      } else {
        if (minMonth) {
          return minMonth < key
        }
        if (maxMonth) {
          return key <= maxMonth
        }
      }
    })
  }

  return list
}

export const MonthSelector = ({ lang, selected, onSelect, min, max, year }) => {
  const month = new Date(selected).getMonth()
  const monthList = limitMonth(selected, year, min, max, getMonthList(lang))

  return (
    <div className={styles.monthBlock}>
      <select
        defaultValue={month}
        className={styles.monthSelector}
        onChange={(value) => onSelect(value.target.value)}
      >
        {monthList.map((item, key) => (
          <option key={key} value={key}>
            {item}
          </option>
        ))}
      </select>
      <i className={arrow.arrowUp} />
      <i className={arrow.arrowDown} />
    </div>
  )
}
