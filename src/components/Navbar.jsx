import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/parasmelogo.jpg';
import oracle from '../assets/oraclelogo.jpg';
import { useState, useEffect, useRef } from 'react';

function Navbar() {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const productsRef = useRef(null);
  const solutionsRef = useRef(null);

  const toggleProductsDropdown = () => {
    setShowProductsDropdown(!showProductsDropdown);
    setShowSolutionsDropdown(false);
  };

  const toggleSolutionsDropdown = () => {
    setShowSolutionsDropdown(!showSolutionsDropdown);
    setShowProductsDropdown(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setShowProductsDropdown(false);
    setShowSolutionsDropdown(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-container" style={{
      position: 'fixed', top: 0, left: 0, width: '100%', display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.3)', padding: '0.5rem 1rem', zIndex: 1000, boxSizing: 'border-box'
    }}>
      <Link to="/" style={{ fontSize: '2rem', fontWeight: 'bold', color: 'orangered', textDecoration: 'none' }}>
        <img src={logo} alt="Parasme Logo" style={{ height: '60px', width: 'auto' }} />
      </Link>
      <div className="mobile-menu-container" style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={oracle}
          alt="Oracle Logo"
          style={{
            height: '75px',
            width: 'auto',
            display: 'none',

            marginLeft: '0.5rem',
            '@media (max-width: 768px)': { display: 'block' },
          }}
        />
        <button className="mobile-menu-button" onClick={toggleMobileMenu}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '10px', '@media (max-width: 768px)': { display: 'block' } }}>
          <div style={{ width: '25px', height: '3px', backgroundColor: 'black', margin: '5px 0', transition: 'all 0.3s ease' }}></div>
          <div style={{ width: '25px', height: '3px', backgroundColor: 'black', margin: '5px 0', transition: 'all 0.3s ease' }}></div>
          <div style={{ width: '25px', height: '3px', backgroundColor: 'black', margin: '5px 0', transition: 'all 0.3s ease' }}></div>
        </button>

      </div>

      <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', '@media (max-width: 768px)': { display: 'none' } }}>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1.5rem', margin: 0, paddingRight: '1rem' }}>
          <li style={{ position: 'relative' }}>
            <NavLink to="/" style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? 'orangered' : 'black', fontSize: '1.1rem', borderBottom: isActive ? '2px solid orangered' : 'none', })}>Home</NavLink></li>
          <li style={{ position: 'relative' }}>
            <NavLink to="/about" style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? 'orangered' : 'black', fontSize: '1.1rem', borderBottom: isActive ? '2px solid orangered' : 'none', })}>About</NavLink></li>
          <li ref={productsRef} className="dropdown" style={{ position: 'relative', cursor: 'pointer' }} onClick={toggleProductsDropdown}>
          <span style={{ fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center' }}>
  Products
  <svg
    width="24"  // Try setting this to a larger value like 24 or 32
    height="24" // Same here for larger display
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginLeft: '0.5em' }}
  >
    <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" fill="none" />
  </svg>
</span>

            {showProductsDropdown && (
              <ul style={{
                position: 'absolute', backgroundColor: 'white', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', padding: '1rem',
                zIndex: 1, listStyleType: 'none', margin: 0, marginTop: '10px'
              }}>
                <li style={{ padding: '0.5rem 0', whiteSpace: 'nowrap' }}>
                  <NavLink to="/products/database" style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? 'orangered' : 'black', fontSize: '1.1rem', borderBottom: isActive ? '2px solid orangered' : 'none', })}>Database</NavLink>
                </li>
                <li style={{ padding: '0.5rem 0', whiteSpace: 'nowrap' }}>
                  <NavLink to="/products/middleware" style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? 'orangered' : 'black', fontSize: '1.1rem', borderBottom: isActive ? '2px solid orangered' : 'none', })}>Middleware</NavLink>
                </li>
                <li style={{ padding: '0.5rem 0', whiteSpace: 'nowrap' }}>
                  <NavLink to="/products/server" style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? 'orangered' : 'black', fontSize: '1.1rem', borderBottom: isActive ? '2px solid orangered' : 'none', })}>Server</NavLink>
                </li>
              </ul>
            )}
          </li>
          <li ref={solutionsRef} className="dropdown" style={{ position: 'relative', cursor: 'pointer' }} onClick={toggleSolutionsDropdown}>
          <span style={{ fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center' }}>
 Solutions
  <svg
    width="24"  // Try setting this to a larger value like 24 or 32
    height="24" // Same here for larger display
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginLeft: '0.5em' }}
  >
    <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" fill="none" />
  </svg>
</span>

            {showSolutionsDropdown && (
              <ul style={{
                position: 'absolute', backgroundColor: 'white', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', padding: '1rem',
                zIndex: 1, listStyleType: 'none', margin: 0, marginTop: '10px'
              }}>
                <li style={{ padding: '0.5rem 0', whiteSpace: 'nowrap' }}>
                  <NavLink to="/solutions/automation" style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? 'orangered' : 'black', fontSize: '1.1rem', borderBottom: isActive ? '2px solid orangered' : 'none', })}>Automation</NavLink>
                </li>
                <li style={{ padding: '0.5rem 0', whiteSpace: 'nowrap' }}>
                  <NavLink to="/solutions/solution-engineering" style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? 'orangered' : 'black', fontSize: '1.1rem', borderBottom: isActive ? '2px solid orangered' : 'none', })}>Solution Engineering</NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0rem' }}>
          <a href="https://cal.com/parasme/30min?date=2024-07-12&month=2024-07" style={{
            backgroundColor: 'orangered', color: 'white', padding: '0.5rem 1rem', border: 'none', textDecoration: 'none', borderRadius: '5px',
            marginLeft: '1rem', whiteSpace: 'nowrap', boxSizing: 'border-box', fontSize: '1.1rem'
          }}>Book A Demo</a>
          <img src={oracle} alt="Oracle Logo" style={{ height: '100px', width: 'auto', marginLeft: '0rem' }} />
        </div>
      </nav>


      {isMobileMenuOpen && (
        <div className="mobile-nav" style={{
          display: 'none', position: 'fixed', top: '80px', left: 0, width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '1rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', zIndex: 999, '@media (max-width: 768px)': { display: 'block' }
        }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'center' }}>
            <li style={{ margin: '1rem 0' }}>
              <NavLink to="/" onClick={closeMobileMenu} style={({ isActive }) => ({
                textDecoration: 'none', color: isActive ? 'orangered' : 'black',
                fontSize: '1.1rem', padding: '0.5rem 0', borderBottom: isActive ? '2px solid orangered' : 'none',
              })}>Home</NavLink></li>
            <li style={{ margin: '1rem 0' }}>
              <NavLink to="/about" onClick={closeMobileMenu} style={({ isActive }) => ({
                textDecoration: 'none', color: isActive ? 'orangered' : 'black',
                fontSize: '1.1rem', padding: '0.5rem 0', borderBottom: isActive ? '2px solid orangered' : 'none',
              })}>About</NavLink>
            </li>
            <li ref={productsRef} style={{ margin: '1rem 0', position: "relative" }}>
              <div onClick={toggleProductsDropdown} style={{ cursor: 'pointer', fontSize: '1.1rem' }}>
                Products ▼
              </div>
              {showProductsDropdown && (
                <ul style={{ listStyle: 'none', padding: '0 1rem', margin: '0.5rem 0' }}>
                  <li style={{ margin: '0.5rem 0' }}>
                    <NavLink to="/products/database" onClick={closeMobileMenu} style={({ isActive }) => ({
                      textDecoration: 'none', color: isActive ? 'orangered' : 'black',
                      fontSize: '1.1rem', borderBottom: isActive ? '2px solid orangered' : 'none',
                    })}>Database</NavLink>
                  </li>
                  <li style={{ margin: '0.5rem 0' }}>
                    <NavLink to="/products/middleware" onClick={closeMobileMenu} style={({ isActive }) => ({
                      textDecoration: 'none',
                      color: isActive ? 'orangered' : 'black', fontSize: '1.1rem', borderBottom: isActive ? '2px solid orangered' : 'none',
                    })}>Middleware</NavLink>
                  </li>
                  <li style={{ margin: '0.5rem 0' }}>
                    <NavLink to="/products/server" onClick={closeMobileMenu} style={({ isActive }) => ({
                      textDecoration: 'none', color: isActive ? 'orangered' : 'black',
                      fontSize: '1.1rem', borderBottom: isActive ? '2px solid orangered' : 'none',
                    })}>Server</NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li ref={solutionsRef} style={{ margin: '1rem 0' }}>
              <div onClick={toggleSolutionsDropdown} style={{ cursor: 'pointer', fontSize: '1.1rem' }}>
                Solutions ▼
              </div>
              {showSolutionsDropdown && (
                <ul style={{ listStyle: 'none', padding: '0 1rem', margin: '0.5rem 0' }}>
                  <li style={{ margin: '0.5rem 0' }}>
                    <NavLink to="/solutions/automation" onClick={closeMobileMenu} style={({ isActive }) => ({
                      textDecoration: 'none',
                      color: isActive ? 'orangered' : 'black', fontSize: '1.1rem', borderBottom: isActive ? '2px solid orangered' : 'none',
                    })}>Automation</NavLink>
                  </li>
                  <li style={{ margin: '0.5rem 0' }}>
                    <NavLink to="/solutions/solution-engineering" onClick={closeMobileMenu} style={({ isActive }) => ({
                      textDecoration: 'none',
                      color: isActive ? 'orangered' : 'black', fontSize: '1.1rem', borderBottom: isActive ? '2px solid orangered' : 'none',
                    })}>Solution Engineering</NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li style={{ margin: '1rem 0' }}>
              <a href="https://cal.com/parasme/30min?date=2024-07-12&month=2024-07"
                style={{
                  backgroundColor: 'orangered', color: 'white', padding: '0.5rem 1rem',
                  border: 'none', textDecoration: 'none', borderRadius: '5px', display: 'inline-block', fontSize: '1.1rem'
                }}>Book A Demo</a>
            </li>
          </ul>
        </div>
      )}
      <style>
        {`
          @media (max-width: 768px) {
            .mobile-menu-button {
              display: block !important;
            }
            .desktop-nav {
              display: none !important;
            }

            .mobile-menu-container img {
              display: block !important;
            }
            .mobile-nav {
              display: block !important;
            }
          }
        `}
      </style>
    </div>
  );
}
export default Navbar;
