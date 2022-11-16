import React from 'react'

export const Form = () => {
  return (
    <form className="Form">
      <h2 className="Form-h2">Crear nueva cita</h2>
      <div className="Form-div">
        <label className="Form-label" htmlFor="pet">
          Nombre de la Mascota:
        </label>
        <input className="Form-input" id="pet" name="pet" type="text" />
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
        />
      </div>
      <div className="Form-div">
        <label className="Form-label" htmlFor="email">
          Email:
        </label>
        <input className="Form-input" id="email" name="email" type="email" />
      </div>
      <div className="Form-div">
        <label className="Form-label" htmlFor="discharged">
          Alta:
        </label>
        <input className="Form-input" type="date" />
      </div>
      <div>
        <label className="Form-label" htmlFor="symptoms">
          Sintomas:
        </label>
        <textarea className="Form-textarea" cols="6" id="symptoms" rows="5" />
      </div>
      <p className="Form-error">Texto de error</p>
      <button className="Form-button" type="submit">
        Agregar a la Lista
      </button>
    </form>
  )
}
