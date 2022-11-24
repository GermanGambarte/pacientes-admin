import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const Form = ({ addNewDate }) => {
  const [date, setDate] = useState({
    pet: '',
    propietary: '',
    email: '',
    day: '',
    hour: '',
    symptoms: '',
  })
  const [error, setError] = useState({ status: false, message: '' })
  const onChangeHandler = (e) => {
    setDate({ ...date, [e.target.name]: e.target.value })
  }
  const onSubmitHandler = (e) => {
    e.preventDefault()
    const emptyField =
      pet === '' ||
      propietary === '' ||
      email === '' ||
      day === '' ||
      hour === '' ||
      symptoms === ''

    if (emptyField) {
      return setError({ status: true, message: 'Los campos son obligatorios' })
    }
    setError({ status: false, message: '' })
    date.id = uuidv4()
    addNewDate(date)
    setDate({
      pet: '',
      propietary: '',
      email: '',
      day: '',
      hour: '',
      symptoms: '',
    })
  }
  const { pet, propietary, email, day, hour, symptoms } = date

  return (
    <form className="Form" onSubmit={onSubmitHandler}>
      <h2 className="Form-h2">Crear nueva cita</h2>
      <div className="Form-div">
        <label className="Form-label" htmlFor="pet">
          Nombre de la Mascota:
        </label>
        <input
          className="Form-input"
          id="pet"
          name="pet"
          type="text"
          value={pet}
          onChange={onChangeHandler}
        />
      </div>
      <div className="Form-div">
        <label className="Form-label" htmlFor="propietary">
          Nombre del Dueño:
        </label>
        <input
          className="Form-input"
          id="propietary"
          name="propietary"
          type="text"
          value={propietary}
          onChange={onChangeHandler}
        />
      </div>
      <div className="Form-div">
        <label className="Form-label" htmlFor="email">
          Email:
        </label>
        <input
          className="Form-input"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={onChangeHandler}
        />
      </div>
      <div className="Form-div--date">
        <div className="Form-div--day">
          <label className="Form-label" htmlFor="day">
            Fecha:
          </label>
          <input
            className="Form-input"
            id="day"
            name="day"
            type="date"
            value={day}
            onChange={onChangeHandler}
          />
        </div>
        <div className="Form-div--time">
          <label className="Form-label" htmlFor="hour">
            Hora:
          </label>
          <input
            className="Form-input"
            id="hour"
            name="hour"
            type="time"
            value={hour}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div>
        <label className="Form-label" htmlFor="symptoms">
          Sintomas:
        </label>
        <textarea
          className="Form-textarea"
          cols="6"
          id="symptoms"
          name="symptoms"
          rows="5"
          value={symptoms}
          onChange={onChangeHandler}
        />
      </div>
      {error.status ? <p className="Form-error">{error.message}</p> : null}
      <button className="Form-button">Agregar a la Lista</button>
    </form>
  )
}
