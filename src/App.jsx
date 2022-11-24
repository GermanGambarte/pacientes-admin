import React, { useState } from 'react'

import { Form } from './components/Form.component'
import { Patients } from './components/Patients.component'

import './App.css'

const App = () => {
  const [dates, setDates] = useState([])
  const addNewDate = (date) => {
    setDates([...dates, date])
  }

  return (
    <div className="App">
      <h1 className="App-h1">Lista de pacientes</h1>
      <div className="App-container">
        <Form addNewDate={addNewDate} />
        {dates.map((date) => (
          <Patients key={date.id} date={date} />
        ))}
      </div>
    </div>
  )
}

export default App
