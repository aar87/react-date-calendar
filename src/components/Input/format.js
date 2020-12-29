/**
 * День
 * Ввод возможен только чисел от 0 до 9
 * Минимальный выбор это 01 || но если есть минимум заданный в конфиге, нужно учитывать его
 * Максимальный выбор 31 || но если есть максимум заданный в конфиге нужно учитывать его
 */

const DAY_MAX = 31
const MONTH_MAX = 12
const MIN_YEAR = 1900

const checkSynthetic = (value) => {
  if (value.target) {
    value = value.target.value
  }

  return value
}

const onlyDigits = (value, length = 2) => {
  return value.toString().replace(/\D/g, '').substr(0, length)
}

export const formatDay = (value) => {
  value = checkSynthetic(value)

  const formattedValue = onlyDigits(value)

  if (Number(formattedValue) > 3 && formattedValue.length === 1) {
    return `0${formattedValue}`
  }

  if (Number(formattedValue) > DAY_MAX) {
    return DAY_MAX
  }

  return formattedValue === '00' ? '01' : formattedValue
}

export const formatMonth = (value) => {
  value = checkSynthetic(value)

  const formattedMonth = onlyDigits(value)

  console.log('f m = ', formattedMonth)

  if (Number(formattedMonth) > MONTH_MAX) {
    return MONTH_MAX
  }

  return formattedMonth === '00' ? '01' : formattedMonth
}

export const formatYear = (value) => {
  value = checkSynthetic(value)

  const formattedYear = onlyDigits(value, 4)

  console.log('formatted year = ', formattedYear)

  if (formattedYear.length === 4 && Number(formattedYear) < MIN_YEAR) {
    return MIN_YEAR
  }

  // TODO добавить проверку на макимальный год если он установлен

  return formattedYear
}
