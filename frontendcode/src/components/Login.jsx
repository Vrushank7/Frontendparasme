import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/parasmelogo.jpg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin@parasme.com' && password === 'parasme123' ) {
      navigate('/admin'); 
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#007bff' }}>
      <div style={{backgroundColor: 'white', padding: '30px',borderRadius: '10px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',textAlign: 'center',width: '350px'}}>
        <img src={logo} alt="Logo" style={{ width: '125px', marginBottom: '15px' }}/>
        <h2 style={{ color: 'black' }}>Admin Login</h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" placeholder="Username" value={username}
            onChange={(e) => setUsername(e.target.value)} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}/>
          <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} required
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}/>
          <button type="submit"
            style={{padding: '10px', borderRadius: '5px',backgroundColor: 'orangered',color: 'white',border: 'none',cursor: 'pointer',
            }}>Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;