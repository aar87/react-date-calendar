import React, {useState} from 'react'
import {MonthSelector} from './components/MonthSelector/MonthSelector'
import {YearSelector} from './components/YearSelector/YearSelector'
import {WeekDays} from './components/WeekDays/WeekDays'
import {Days} from './components/Days/Days'

import styles from './styles.module.css'
import './fonts/fonts.css'

export const ReactCalendar = ({ lang, display = false, onSelect }) => {
  const [show, setShow] = useState(display)
  const [selectedDate, setSelectedDate] = useState(new Date().getTime())
  const [month, setMonth] = useState(null)
  const [year, setYear] = useState(null)

  const selectYear = value => setYear(value)
  const selectMonth = value => setMonth(value)
  const selectDay = value => {
    const date = {
      year: year || new Date(selectedDate).getFullYear(),
      month: month || new Date(selectedDate).getMonth(),
      day: value
    }

    const selected = new Date(Date.UTC(Number(date.year), Number(date.month), Number(date.day)))

    setMonth(null)
    setYear(null)
    setSelectedDate(selected)
    // TODO define config for choose return type of date (UTC, timestamp or other)
    onSelect(selected.getTime())
    // setShow(false)
  }

  if (!show) return ''

  return <div className={styles.calendar}>
    <div className={styles.calendarHeader}>
      <MonthSelector selected={selectedDate} onSelect={value => selectMonth(value)} />
      <YearSelector selected={selectedDate} onSelect={value => selectYear(value)} />
    </div>
    <div>
      <WeekDays lang={lang} />
    </div>
    <div>
      <Days
        selected={selectedDate}
        onSelect={value => selectDay(value)}
        month={month}
        year={year}
      />
    </div>
  </div>
}
