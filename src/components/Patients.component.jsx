import React from 'react'

export const Patients = ({ date, deleteDate }) => {
  return (
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
        <button
          className="Patients-buttons--delete "
          onClick={() => deleteDate(date.id)}
        >
          Eliminiar
        </button>
      </div>
    </div>
  )
}
