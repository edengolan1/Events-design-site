import './App.css';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Examples from './components/Examples/Examples';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/examples' element={<Examples/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
