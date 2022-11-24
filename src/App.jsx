import React, { useState } from 'react'

import { Form } from './components/Form.component'
import { Patients } from './components/Patients.component'

import './App.css'

const App = () => {
  const [dates, setDates] = useState([])
  const addNewDate = (date) => {
    setDates([...dates, date])
  }
  const deleteDate = (id) => {
    const newState = dates.filter((date) => date.id !== id)

    setDates(newState)
  }

  return (
    <div className="App">
      <h1 className="App-h1">Lista de pacientes</h1>
      <div className="App-container">
        <Form addNewDate={addNewDate} />
        <div className="Patients">
          <h2 className="Patients-h2">Citas pendientes</h2>
          {dates.map((date) => (
            <Patients key={date.id} date={date} deleteDate={deleteDate} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
