import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Database from './components/Database.jsx';
import Middleware from './components/MiddleWare.jsx';
import Server from './components/Server.jsx';
import Automation from './components/Automation.jsx';
import SolutionEngineering from './components/SolutionEng.jsx';
import BookADemo from './components/BookDemo.jsx';
import Login from './components/Login.jsx';
import Admin from './components/Admin.jsx';
import ManageUsers from './components/ManageUsers.jsx';
import Dashboard from './components/Dashboard.jsx';

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/login';
  const Navbaris = location.pathname !== '/admin';
  const thisnavbar = location.pathname !== '/dashboard';
  const thatnavbar = location.pathname !== '/manage-users';
  return (
    <div>
      {showNavbar && Navbaris && thisnavbar && thatnavbar  && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/database" element={<Database />} />
        <Route path="/products/middleware" element={<Middleware />} />
        <Route path="/products/server" element={<Server />} />
        <Route path="/solutions/automation" element={<Automation />} />
        <Route path="/solutions/solution-engineering" element={<SolutionEngineering />} />
        <Route path="/book-demo" element={<BookADemo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
