const translation = {
  en: {
    weekDayList: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    monthList: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  ru: {
    weekDayList: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    monthList: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
  }
}

export const getWeekDays = (lang = null) => {
  if (!translation[lang]) return translation.en.weekDayList

  return translation[lang].weekDayList
}

export const getMonthList = (lang = null) => {
  if (!translation[lang]) return translation.en.monthList

  return translation[lang].monthList
}
