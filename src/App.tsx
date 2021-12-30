import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contacts from './Components/Contact/Contact';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      </Routes>
    </Router>
    <Contacts />
    </>
    
  );
}

export default App;
