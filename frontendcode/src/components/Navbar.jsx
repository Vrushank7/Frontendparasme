import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/parasmelogo.jpg'; 
import { useState, useEffect, useRef } from 'react';

function Navbar() {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);

  const productsRef = useRef(null);
  const solutionsRef = useRef(null);

  const toggleProductsDropdown = () => {
    setShowProductsDropdown(true);
    setShowSolutionsDropdown(false); // Close Solutions dropdown
  };

  const toggleSolutionsDropdown = () => {
    setShowSolutionsDropdown(true);
    setShowProductsDropdown(false); // Close Products dropdown
  };

  const handleClickOutside = (event) => {
    if (
      productsRef.current && !productsRef.current.contains(event.target) &&
      solutionsRef.current && !solutionsRef.current.contains(event.target)
    ) {
      setShowProductsDropdown(false);
      setShowSolutionsDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      padding: '1rem 2rem',
      zIndex: 1000,
      boxSizing: 'border-box'
    }}>
      <Link to="/" style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        color: 'orangered',
        textDecoration: 'none'
      }}>
        <img src={logo} alt="Parasme Logo" style={{
          height: '60px',
          width: 'auto'
        }} />
      </Link>
      <nav style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '1.5rem',
          margin: 0,
          paddingRight: '1rem'
        }}>
          <li style={{ position: 'relative' }}>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? 'orangered' : 'black',
                fontSize: '1.1rem',
                borderBottom: isActive ? '2px solid orangered' : 'none',
              })}
            >
              Home
            </NavLink>
          </li>
          <li style={{ position: 'relative' }}>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? 'orangered' : 'black',
                fontSize: '1.1rem',
                borderBottom: isActive ? '2px solid orangered' : 'none',
              })}
            >
              About
            </NavLink>
          </li>
          <li ref={productsRef} className="dropdown" style={{ position: 'relative', cursor: 'pointer' }} onClick={toggleProductsDropdown}>
            <span style={{ fontSize: '1.1rem' }}>Products ▼</span>
            {showProductsDropdown && (
              <ul style={{
                position: 'absolute',
                backgroundColor: 'white',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                padding: '1rem',
                zIndex: 1,
                listStyleType: 'none',
                margin: 0,
                marginTop: '10px' // Adds space between dropdown and button
              }}>
                <li style={{ padding: '0.5rem 0', whiteSpace: 'nowrap' }}>
                  <NavLink
                    to="/products/database"
                    style={({ isActive }) => ({
                      textDecoration: 'none',
                      color: isActive ? 'orangered' : 'black',
                      fontSize: '1.1rem',
                      borderBottom: isActive ? '2px solid orangered' : 'none',
                    })}
                  >
                    Database
                  </NavLink>
                </li>
                <li style={{ padding: '0.5rem 0', whiteSpace: 'nowrap' }}>
                  <NavLink
                    to="/products/middleware"
                    style={({ isActive }) => ({
                      textDecoration: 'none',
                      color: isActive ? 'orangered' : 'black',
                      fontSize: '1.1rem',
                      borderBottom: isActive ? '2px solid orangered' : 'none',
                    })}
                  >
                    Middleware
                  </NavLink>
                </li>
                <li style={{ padding: '0.5rem 0', whiteSpace: 'nowrap' }}>
                  <NavLink
                    to="/products/server"
                    style={({ isActive }) => ({
                      textDecoration: 'none',
                      color: isActive ? 'orangered' : 'black',
                      fontSize: '1.1rem',
                      borderBottom: isActive ? '2px solid orangered' : 'none',
                    })}
                  >
                    Server
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li ref={solutionsRef} className="dropdown" style={{ position: 'relative', cursor: 'pointer' }} onClick={toggleSolutionsDropdown}>
            <span style={{ fontSize: '1.1rem' }}>Solutions ▼</span>
            {showSolutionsDropdown && (
              <ul style={{
                position: 'absolute',
                backgroundColor: 'white',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                padding: '1rem',
                zIndex: 1,
                listStyleType: 'none',
                margin: 0,
                marginTop: '10px' // Adds space between dropdown and button
              }}>
                <li style={{ padding: '0.5rem 0', whiteSpace: 'nowrap' }}>
                  <NavLink
                    to="/solutions/automation"
                    style={({ isActive }) => ({
                      textDecoration: 'none',
                      color: isActive ? 'orangered' : 'black',
                      fontSize: '1.1rem',
                      borderBottom: isActive ? '2px solid orangered' : 'none',
                    })}
                  >
                    Automation
                  </NavLink>
                </li>
                <li style={{ padding: '0.5rem 0', whiteSpace: 'nowrap' }}>
                  <NavLink
                    to="/solutions/solution-engineering"
                    style={({ isActive }) => ({
                      textDecoration: 'none',
                      color: isActive ? 'orangered' : 'black',
                      fontSize: '1.1rem',
                      borderBottom: isActive ? '2px solid orangered' : 'none',
                    })}>
                    Solution Engineering
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <Link to="/book-demo" style={{
          backgroundColor: 'orangered',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 'none',
          textDecoration: 'none',
          borderRadius: '5px',
          marginLeft: '1rem',
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          fontSize: '1.1rem'
        }}>
          Book A Demo
        </Link>
      </nav>
    </div>
  );
}
export default Navbar;
  