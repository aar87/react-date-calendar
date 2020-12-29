import React, { useRef, useState } from 'react'

import { Calendar } from '../Calendar/Calendar'

import { formatDay, formatMonth, formatYear } from './format'
import CalendarIcon from '../Icons/CalendarIcon'
import styles from './Input.css'

export const Input = (props) => {
  const [showCalendar, setShowCalendar] = useState(false)
  const [daySelected, setDaySelected] = useState(null)
  const [monthSelected, setMonthSelected] = useState(null)
  const [yearSelected, setYearSelected] = useState(null)

  const monthInput = useRef(null)
  const yearInput = useRef(null)

  const handleChangeDay = (e) => {
    console.log('value', e)
    const value = formatDay(e)

    setDaySelected(value)

    if (value.toString().length > 1) {
      monthInput.current.focus()
    }
  }

  const handleChangeMonth = (e) => {
    console.log('value', e)
    const value = formatMonth(e)

    setMonthSelected(value)

    if (value.toString().length > 1) {
      yearInput.current.focus()
    }
  }

  const handleChangeYear = (e) => {
    console.log('value', e)
    const value = formatYear(e)

    setYearSelected(value)

    if (value.toString().length > 3) {
      // TODO count selected day | check if month, check if day
    }
  }

  return (
    <div>
      <div className={styles.inputWrapper}>
        <input
          className={styles.inputDay}
          type='text'
          name='browser'
          placeholder='DD'
          value={daySelected}
          onChange={handleChangeDay}
        />
        <input
          className={styles.inputMonth}
          ref={monthInput}
          type='text'
          name='browser'
          placeholder='MM'
          value={monthSelected}
          onChange={handleChangeMonth}
        />
        <input
          className={styles.inputYear}
          ref={yearInput}
          type='text'
          name='browser'
          placeholder='YYYY'
          value={yearSelected}
          onChange={handleChangeYear}
        />
        <div
          className={styles.calendarIcon}
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <CalendarIcon />
        </div>
      </div>
      {showCalendar && <Calendar {...props} />}
    </div>
  )
}
