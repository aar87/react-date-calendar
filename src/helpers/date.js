/**
 * current -> это если установлена дата по умолчанию
 * year -> значит переключали год
 * month -> значит переключали месяц
 * day -> значит выбирали день
 */

// year
export const getMaxYear = (current, year, month, max) => {

}

// month
export const getMaxMonth = (current, year, max) => {
  const maxDate = getDateObject(max)

  if (!year) {
    year = getYearFromTimestamp(current)
  }

  if (Number(maxDate.year) === Number(year)) {
    return maxDate.month
  }

  return null
}

export const getMinMonth = (current, year, min) => {
  const minDate = getDateObject(min)

  if (!year) {
    year = getYearFromTimestamp(current)
  }

  if (Number(minDate.year) === Number(year)) {
    return minDate.month - 1
  }

  return null
}

// days
export const getMinDay = (current, year, month, max) => {
  const minDate = getDateObject(max)

  if (
    Number(minDate.year) === Number(year) &&
    Number(minDate.month) === Number(month)
  ) {
    return minDate.day
  }

  return null
}

export const getMaxDay = (current, year, month, max) => {
  const maxDate = getDateObject(max)

  if (maxDate.year === year && maxDate.month === month) {
    return maxDate.day
  }

  return null
}

const getDateObject = (timestamp) => {
  return {
    year: getYearFromTimestamp(timestamp),
    month: getMonthFromTimestamp(timestamp),
    day: getDayFromTimestamp(timestamp)
  }
}

const getDateFromTimestamp = (timestamp) => new Date(timestamp)

const getYearFromTimestamp = (timestamp) => {
  return getDateFromTimestamp(timestamp).getFullYear()
}

export const getMonthFromTimestamp = (timestamp) => {
  return getDateFromTimestamp(timestamp).getMonth()
}

const getDayFromTimestamp = (timestamp) => {
  return getDateFromTimestamp(timestamp).getDate()
}
