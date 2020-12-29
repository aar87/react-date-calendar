import React, { useState } from 'react'
import { Input } from './components/Input/Input'
import { Calendar } from './components/Calendar/Calendar'

import { getMinMonth, getMonthFromTimestamp } from './helpers/date'

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

  if (true) {
    return (
      <Input
        month={month}
        year={year}
        minDate={minDate}
        maxDate={maxDate}
        lang={lang}
        selectedDate={selectedDate}
        selectDay={(value) => selectDay(value)}
        selectMonth={(value) => selectMonth(value)}
        selectYear={(value) => selectYear(value)}
      />
    )
  }
  //
  // const { selectedDate, selectDay, selectMonth, selectYear } = props
  // const { month, year, minDate, maxDate, lang } = props

  return (
    <Calendar
      month={month}
      year={year}
      minDate={minDate}
      maxDate={maxDate}
      lang={lang}
      selectedDate={selectedDate}
      selectDay={(value) => selectDay(value)}
      selectMonth={(value) => selectMonth(value)}
      selectYear={(value) => selectYear(value)}
    />
  )
}
