import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contacts from './Components/Contact/Contact';
import NavBar from './Components/NavBar/Navbar';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <>
    <NavBar />
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
    <Contacts />
    </>
    
  );
}

export default App;
