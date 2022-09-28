import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Personajes from './pages/Personajes';
import PersonajesDetail from './pages/PersonajesDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Personajes" element={<Personajes/>}/>
      <Route path="/Personajes/:id" element={<PersonajesDetail/>}/>
    </Routes>
  );
}

export default App;
