import React from 'react'

import { Form } from './components/Form.component'
import { Patients } from './components/Patients.component'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1 className="App-h1">Lista de pacientes</h1>
      <div className="App-container">
        <Form />
        <Patients />
      </div>
    </div>
  )
}

export default App
