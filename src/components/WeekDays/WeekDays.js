import React from 'react'
import { getWeekDays } from '../../locale/calendar'
import styles from './weekDays.css'

export const WeekDays = ({ lang }) => {
  const weekDays = getWeekDays(lang)

  return (
    <div className={styles.weekDays}>
      {weekDays.map((item, key) => (
        <p key={key} className={styles.day}>
          {item}
        </p>
      ))}
    </div>
  )
}
