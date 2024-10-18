import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Database from './components/Database.jsx';
import Middleware from './components/MiddleWare.jsx';
import Server from './components/Server.jsx';
import Automation from './components/Automation.jsx';
import SolutionEngineering from './components/SolutionEng.jsx';
import BookADemo from './components/BookDemo.jsx';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/database" element={<Database />} />
        <Route path="/products/middleware" element={<Middleware />} />
        <Route path="/products/server" element={<Server />} />
        <Route path="/solutions/automation" element={<Automation />} />
        <Route path="/solutions/solution-engineering" element={<SolutionEngineering />} />
        <Route path="/book-demo" element={<BookADemo />} />
      </Routes>
    </Router>
  );
}

export default App;
