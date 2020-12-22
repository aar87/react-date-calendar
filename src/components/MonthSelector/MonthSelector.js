import React from 'react'
import {getMonthList} from '../../locale/calendar'
import styles from './monthSelector.css'
import arrow from './../../styles.module.css'

export const MonthSelector = ({lang, selected, onSelect}) => {
  const monthList = getMonthList(lang)
  const month = new Date(selected).getMonth()

  return <div className={styles.monthBlock}>
    <select defaultValue={month} className={styles.monthSelector} onChange={value => onSelect(value.target.value)}>
      {monthList.map((item, key) => <option key={key} value={key}>{item}</option>)}
    </select>
    <i className={arrow.arrowUp}/>
    <i className={arrow.arrowDown}/>
  </div>
}
