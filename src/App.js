import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Personajes from './pages/Personajes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Personajes" element={<Personajes/>}/>
    </Routes>
  );
}

export default App;
