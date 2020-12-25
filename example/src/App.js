import React from 'react'

import { ReactCalendar } from 'react-date-calendar'
import 'react-date-calendar/dist/index.css'

const App = () => {
  return <div style={{padding: 20}}>
    <ReactCalendar
      display={true}
      lang={'ru'}
      // minDate={1522108400000}
      // maxDate={1522208400000}
      onSelect={value => console.log('calendar value : ', value)}
    />
  </div>
}

export default App
