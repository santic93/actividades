import React, { useContext, useEffect, useState } from 'react';
import 'animate.css';
import { Info } from '../Info/Info';
export const Details = () => {
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  const [actividad, setActividad] = useState();
  useEffect(() => {
    localStorage.getItem('nombre') && setNombre(localStorage.getItem('nombre'));
    localStorage.getItem('apellido') &&
      setApellido(localStorage.getItem('apellido'));
    localStorage.getItem('actividad') &&
      setActividad(localStorage.getItem('actividad'));
  }, []);
  return (
    <div>
      Detalles
      <hr />
      <br />
      <h2 className='animate__animated animate__backInLeft'>
        {nombre + ' ' + apellido}
      </h2>
      <br />
      <h3>
        <b className='animate__animated animate__bounceInUp'>{actividad}</b>
      </h3>
      <br />
      <hr />
      <Info />
    </div>
  );
};
