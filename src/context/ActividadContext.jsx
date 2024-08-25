import { createContext, useReducer } from 'react';
import reducer from './useReducer';
export const ActividadContext = createContext();
export default function ActividadContextProvider({ children }) {
  const initialState = {
    actividad: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const completeActividad = (actividad) => {
    dispatch({
      type: 'COMPLETE_ACTIVIDAD',
      payload: actividad,
    });
    actividad === null
      ? localStorage.removeItem('actividad', actividad)
      : localStorage.setItem('actividad', actividad);
  };

  return (
    <ActividadContext.Provider
      value={{
        actividad: state.actividad,
        completeActividad,
      }}
    >
      {children}
    </ActividadContext.Provider>
  );
}
