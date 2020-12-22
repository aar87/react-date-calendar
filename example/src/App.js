import React from 'react'

import { ReactCalendar } from 'react-date-calendar'
import 'react-date-calendar/dist/index.css'

const App = () => {
  return <ReactCalendar display={true} lang={'en'} onSelect={value => alert(value)}/>
}

export default App
