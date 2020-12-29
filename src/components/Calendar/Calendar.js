import React from 'react'
import styles from '../../styles.module.css'
import { MonthSelector } from '../MonthSelector/MonthSelector'
import { YearSelector } from '../YearSelector/YearSelector'
import { WeekDays } from '../WeekDays/WeekDays'
import { Days } from '../Days/Days'

export const Calendar = (props) => {
  const { selectedDate, selectDay, selectMonth, selectYear } = props
  const { month, year, minDate, maxDate, lang } = props

  return (
    <div className={styles.calendar + ' react-date-calendar'}>
      <div className={styles.calendarHeader}>
        <MonthSelector
          selected={selectedDate}
          onSelect={(value) => selectMonth(value)}
          year={year}
          min={minDate}
          max={maxDate}
          lang={lang}
        />
        <YearSelector
          selected={selectedDate}
          onSelect={(value) => selectYear(value)}
          min={minDate}
          max={maxDate}
        />
      </div>
      <div>
        <WeekDays lang={lang} />
      </div>
      <div>
        <Days
          selected={selectedDate}
          onSelect={(value) => selectDay(value)}
          month={month}
          year={year}
          min={minDate}
          max={maxDate}
        />
      </div>
    </div>
  )
}
