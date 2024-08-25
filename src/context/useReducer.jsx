const COMPLETE_ACTIVIDAD = 'COMPLETE_ACTIVIDAD';
const COMPLETE_NOMBRE = 'COMPLETE_NOMBRE';
const COMPLETE_APELLIDO = 'COMPLETE_APELLIDO';
export default function reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case COMPLETE_ACTIVIDAD:
      return { ...state, actividad: payload };
    case COMPLETE_NOMBRE:
      return { ...state, nombre: payload };
    case COMPLETE_APELLIDO:
      return { ...state, apellido: payload };
    default:
      return state;
  }
}
