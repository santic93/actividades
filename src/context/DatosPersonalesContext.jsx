import { useReducer } from 'react';
import reducer from './useReducer';
import { createContext } from 'react';
export const DatosPersonalesContext = createContext();
export default function DatosPersonalesProvider({ children }) {
  const initialState = {
    nombre: '',
    apellido: '',
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const completeNombre = (nombre) => {
  
    dispatch({
      type: 'COMPLETE_NOMBRE',
      payload: nombre,
    });
    localStorage.setItem('nombre', nombre);
  };
  const completeApellido = (apellido) => {
   
    dispatch({
      type: 'COMPLETE_APELLIDO',
      payload: apellido,
    });
    localStorage.setItem('apellido', apellido);
  };

  return (
    <DatosPersonalesContext.Provider
      value={{
        nombre: state.nombre,
        apellido: state.apellido,
        completeNombre,
        completeApellido,
      }}
    >
      {children}
    </DatosPersonalesContext.Provider>
  );
}
