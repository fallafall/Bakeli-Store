import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Marketing from './components/Marketing';
import Inscription from './components/Inscription';
import Connexion from './components/Connexion';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/Marketing" element={ <Marketing />} />
          <Route path="/Inscription" element={ <Inscription />} />
          <Route path="/Connexion" element={ <Connexion />} />
          <Route path="/Detail" element={ <Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
