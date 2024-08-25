import './App.css';
import { Home } from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';

import ActividadContext from './context/ActividadContext';
import { Formu } from './components/Form/Formu';
import DatosPersonalesContext from './context/DatosPersonalesContext';
import { Details } from './components/Details/Details';

function App() {
  return (
    <>
      <DatosPersonalesContext>
        <ActividadContext>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/form' element={<Formu />} />
            <Route path='/details' element={<Details />} />
          </Routes>
        </ActividadContext>
      </DatosPersonalesContext>
    </>
  );
}

export default App;
