const translation = {
  en: {
    weekDayList: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    monthList: {
      0: 'January',
      1: 'February',
      2: 'March',
      3: 'April',
      4: 'May',
      5: 'June',
      6: 'July',
      7: 'August',
      8: 'September',
      9: 'October',
      10: 'November',
      11: 'December'
    }
  },
  ru: {
    weekDayList: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    monthList: {
      0: 'Январь',
      1: 'Февраль',
      2: 'Март',
      3: 'Апрель',
      4: 'Май',
      5: 'Июнь',
      6: 'Июль',
      7: 'Август',
      8: 'Сентябрь',
      9: 'Октябрь',
      10: 'Ноябрь',
      11: 'Декабрь'
    }
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
