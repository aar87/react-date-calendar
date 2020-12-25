import React from 'react'
import styles from './yearSelector.css'
import arrow from '../../styles.module.css'

const getYearList = (min, max) => {
  let minYear = new Date(min).getFullYear()
  const maxYear = new Date(max).getFullYear()

  const list = []

  for (minYear; minYear <= maxYear; minYear++) {
    list.push(minYear)
  }

  return list
}

export const YearSelector = ({ selected, onSelect, min, max }) => {
  // TODO replace with dates available
  const yearList = getYearList(min, max)
  const year = new Date(selected).getFullYear()

  return (
    <div className={styles.yearBlock}>
      <select
        defaultValue={year}
        className={styles.yearSelector}
        onChange={(value) => onSelect(value.target.value)}
      >
        {yearList.map((item, key) => (
          <option key={key} value={item}>
            {item}
          </option>
        ))}
      </select>
      <i className={arrow.arrowUp} />
      <i className={arrow.arrowDown} />
    </div>
  )
}
