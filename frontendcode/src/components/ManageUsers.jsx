import React from 'react';
import { useNavigate } from 'react-router-dom';
import admi from '../assets/adminn.jpg';

const ManageUsers = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login'); 
  };

  const handleAdminPanelClick = () => {
    navigate('/admin'); 
  };

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

 
  return (
    <div style={{ display: 'flex' }}>
      <div style={{width: '200px',height: '100vh',backgroundColor: '#2c3e50',color: 'white',display: 'flex',flexDirection: 'column',padding: '20px',boxSizing: 'border-box'}}>
        <h2 style={{ color: 'yellow', marginBottom: '20px',borderBottom: '2px solid red', paddingBottom: '5px', display: 'flex',alignItems: 'center' }}>
            <img src={admi} alt="Admin Logo"
      style={{width: '44px',height: '40px',marginRight: '8px'}}/>Admin </h2>

<div style={{ marginBottom: '20px', cursor: 'pointer',backgroundColor: 'blue',color: 'white', padding: '10px 20px', width: '120px', textAlign: 'center', 
    borderRadius: '5px'}} onClick={handleDashboardClick}>Dashboard</div>
        <div style={{ marginBottom: '20px', cursor: 'pointer',backgroundColor: 'blue',color: 'white',padding: '10px 20px', width: '120px', textAlign: 'center',
    borderRadius: '5px' }} onClick={handleAdminPanelClick}>HomePage</div>
       
        <div style={{ marginBottom: '20px', cursor: 'pointer',backgroundColor: 'blue',color: 'white',padding: '10px 20px', width: '120px', 
    textAlign: 'center', borderRadius: '5px' }} onClick={handleLogout}>Logout</div>
      </div>
   
      <div style={{ flex: 1, padding: '40px', textAlign: 'center', marginTop: '40px' }}>
        <h1 style={{ color: 'blue' }}> Users</h1>
        <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Email</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Message</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
              <tr >
                <td style={{ padding: '10px', border: '1px solid #ddd' }}></td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}></td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}></td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                  <button style={{ marginRight: '10px', cursor: 'pointer' }}>Delete</button>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
