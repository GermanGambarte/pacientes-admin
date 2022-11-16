import React from 'react'

export const Patients = () => {
  return (
    <div className="Patients">
      <h2 className="Patients-h2">Citas pendientes</h2>
      <div className="Patients-card">
        <p className="Patients-p">
          <span className="Patients-span">Nombre:</span> Firulai
        </p>
        <p className="Patients-p">
          <span className="Patients-span">Dueño:</span> Germán
        </p>
        <p className="Patients-p">
          <span className="Patients-span">Email:</span> germangambarte@gmail.com
        </p>
        <p className="Patients-p">
          <span className="Patients-span">Alta:</span> 25-05-22
        </p>
        <p className="Patients-p">
          <span className="Patients-span">Sintomas:</span> cosa 1, cosa 2, cosa
          3
        </p>
        <div className="Patients-buttons">
          <button className="Patients-buttons--edit">Editar</button>
          <button className="Patients-buttons--delete">Eliminiar</button>
        </div>
      </div>
    </div>
  )
}
