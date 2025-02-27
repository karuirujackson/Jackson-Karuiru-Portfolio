import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './pages/NavBar';
import Home from './components/Home';
import Stacks from './components/Stacks';
import About from './components/About';
import ContactPage from './components/ContactPage';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stacks" element={<Stacks />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
