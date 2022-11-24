import React from 'react'

export const Patients = ({ date }) => {
  return (
    <div className="Patients">
      <h2 className="Patients-h2">Citas pendientes</h2>
      <div className="Patients-card">
        <p className="Patients-p">
          <span className="Patients-span">Nombre:</span> {date.pet}
        </p>
        <p className="Patients-p">
          <span className="Patients-span">Dueño:</span> {date.propietary}
        </p>
        <p className="Patients-p">
          <span className="Patients-span">Email:</span> {date.email}
        </p>
        <p className="Patients-p">
          <span className="Patients-span">Día:</span> {date.day}
        </p>
        <p className="Patients-p">
          <span className="Patients-span">Hora:</span> {date.hour}
        </p>
        <p className="Patients-p">
          <span className="Patients-span">Sintomas:</span> {date.symptoms}
        </p>
        <div className="Patients-buttons">
          <button className="Patients-buttons--edit">Editar</button>
          <button className="Patients-buttons--delete">Eliminiar</button>
        </div>
      </div>
    </div>
  )
}
