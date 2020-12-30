import React from 'react'

import { getMaxMonth, getMinMonth } from '../../helpers/date'
import { getMonthList } from '../../locale/calendar'

import styles from './monthSelector.css'
import arrow from './../../styles.module.css'

const limitMonth = (selected, year, min, max, list = []) => {
  const maxMonth = getMaxMonth(selected, year, max)
  const minMonth = getMinMonth(selected, year, min)
  const result = {}

  if (maxMonth || minMonth) {
    Object.entries(list).map((item, key) => {
      if (minMonth && maxMonth) {
        if (minMonth < key && key <= maxMonth) {
          result[key] = item[1]
        }
      } else {
        if (minMonth && minMonth < key) {
          result[key] = item[1]
        }
        if (maxMonth && key <= maxMonth) {
          result[key] = item[1]
        }
      }
    })
  }

  return Object.keys(result).length ? result : list
}

export const MonthSelector = (props) => {
  const { lang, selected, month, onSelect, min, max, year } = props
  const monthCurrent = new Date(selected).getMonth()
  const monthList = limitMonth(selected, year, min, max, getMonthList(lang))

  return (
    <div className={styles.monthBlock}>
      <select
        value={month || monthCurrent}
        className={styles.monthSelector}
        onChange={(value) => onSelect(value.target.value)}
      >
        {Object.entries(monthList).map((item, key) => (
          <option key={key} value={item[0]}>
            {item[1]}
          </option>
        ))}
      </select>
      <i className={arrow.arrowUp} />
      <i className={arrow.arrowDown} />
    </div>
  )
}
