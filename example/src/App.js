import React from 'react'

import { ReactCalendar } from 'react-date-calendar'
import 'react-date-calendar/dist/index.css'

const App = () => {
  return <div style={{padding: 20}}>
    <ReactCalendar
      display={true}
      lang={'ru'}
      // selected={1609361999000}
      // minDate={1606683600000}
      // maxDate={1609325315850}
      onSelect={value => console.log('calendar value : ', value)}
    />
  </div>
}

export default App
