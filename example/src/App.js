import React from 'react'

import { ReactCalendar } from 'react-date-calendar'
import 'react-date-calendar/dist/index.css'

const App = () => {
  return <div style={{padding: 20}}>
    <ReactCalendar
      display={true}
      lang={'en'}
      onSelect={value => console.log('calendar value : ', value)}
    />
  </div>
}

export default App
