import React, { useState } from 'react'
import { MonthSelector } from './components/MonthSelector/MonthSelector'
import { YearSelector } from './components/YearSelector/YearSelector'
import { WeekDays } from './components/WeekDays/WeekDays'
import { Days } from './components/Days/Days'

import { getMinMonth, getMonthFromTimestamp } from './helpers/date'

import styles from './styles.module.css'
import './fonts/fonts.css'

const timeStamp01011900 = -2208988800000
const timeStampNow = Date.now()

export const ReactCalendar = ({
  lang,
  display = false,
  selected = null,
  onSelect,
  minDate = timeStamp01011900,
  maxDate = timeStampNow
}) => {
  const now = new Date().getTime()
  const currentDate = maxDate < now ? new Date(maxDate) : new Date(now)
  const date = new Date(selected).getTime() || currentDate
  const [selectedDate, setSelectedDate] = useState(date)
  const [month, setMonth] = useState(null)
  const [year, setYear] = useState(null)

  const selectYear = (value) => {
    const currentMonth = month || getMonthFromTimestamp(currentDate)

    // TODO is max month need to be set ?
    // const maxMonth = getMaxMonth(currentDate, value, maxDate)
    const minMonth = getMinMonth(currentDate, value, minDate)

    if (minMonth && minMonth > currentMonth) {
      setMonth(minMonth + 1)
    }

    setYear(value)
  }
  const selectMonth = (value) => {
    setMonth(value)
  }
  const selectDay = (value) => {
    const date = {
      year: Number(year || new Date(selectedDate).getFullYear()),
      month: Number(month || new Date(selectedDate).getMonth()),
      day: Number(value)
    }

    const selected = new Date(Date.UTC(date.year, date.month, date.day))

    setMonth(null)
    setYear(null)
    setSelectedDate(selected)
    // TODO define config for choose return type of date (UTC, timestamp or other)
    onSelect(selected.getTime())
  }

  if (!display) return ''

  return (
    <div className={styles.calendar}>
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
