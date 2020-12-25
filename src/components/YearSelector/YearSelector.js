import React from 'react'
import styles from './yearSelector.css'
import arrow from '../../styles.module.css'

export const YearSelector = ({selected, onSelect}) => {
  // TODO replace with dates available
  const yearList = [2018, 2019, 2020]
  const year = new Date(selected).getFullYear()

  return <div className={styles.yearBlock}>
    <select defaultValue={year} className={styles.yearSelector} onChange={value => onSelect(value.target.value)}>
      {yearList.map((item, key) =>
        <option key={key} id={'lol'} value={item}>{item}</option> )
      }
    </select>
    <i className={arrow.arrowUp}/>
    <i className={arrow.arrowDown}/>
  </div>
}
