import { Button, Input, SelectPicker, Stack, Text } from 'rsuite';
import React, { useContext, useState } from 'react';
import { IconButton, ButtonToolbar, Form } from 'rsuite';
import PageNextIcon from '@rsuite/icons/PageNext';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { DatosPersonalesContext } from '../../context/DatosPersonalesContext';
import { ActividadContext } from '../../context/ActividadContext';
const data = ['Boxeo', 'Kick', 'Gimnasio'].map((item) => ({
  label: item,
  value: item,
}));
export const Formu = () => {
  const { completeNombre, completeApellido, nombre, apellido } = useContext(
    DatosPersonalesContext
  );
  const { actividad, completeActividad } = useContext(ActividadContext);
  const navigate = useNavigate();
  const [vacio, setVacio] = useState('');
  const handleChange = (select) => {
    completeActividad(select);
  };
  const handleText = (event) => {
    const { name, value } = event.target;
    if (name === 'nombre') {
      completeNombre(value);
    } else if (name === 'apellido') {
      completeApellido(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (actividad.length === 0 || !nombre || !apellido) {
      setVacio('Faltan completar campos');
    } else {
      navigate('/details');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Stack spacing={10} direction='column' alignItems='center'>
          <SelectPicker
            onChange={handleChange}
            data={data}
            searchable={false}
            style={{ width: 224 }}
            placeholder='Actividad que da'
            value={actividad}
          />
          {actividad?.length > 0 && (
            <>
              <input
                type='text'
                required
                minLength={3}
                placeholder='Nombre'
                onChange={handleText}
                value={nombre}
                name='nombre'
                style={{ marginBottom: 5 }}
              />
              <input
                style={{ marginTop: 5 }}
                type='text'
                required
                minLength={3}
                placeholder='Apellido'
                onChange={handleText}
                value={apellido}
                name='apellido'
              />
            </>
          )}
        </Stack>
        <ButtonToolbar style={{ justifyContent: 'center', marginTop: '15px' }}>
          <IconButton
            color='violet'
            appearance='primary'
            icon={<PageNextIcon />}
            type='submit'
          >
            Siguiente
          </IconButton>
        </ButtonToolbar>

        <br />
        <Text color='red'> {vacio}</Text>
      </form>
    </div>
  );
};
