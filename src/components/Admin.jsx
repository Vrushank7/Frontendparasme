import React from 'react';
import { useNavigate } from 'react-router-dom';
import admi from '../assets/adminn.jpg';

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login'); 
  };

  const handleManageUsersClick = () => {
    navigate('/manage-users'); 
  };

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };


  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '200px',height: '100vh',backgroundColor: '#2c3e50',color: 'white',display: 'flex',flexDirection: 'column',padding: '20px',boxSizing: 'border-box'}}>
        <h2 style={{ color: 'yellow', marginBottom: '20px' ,borderBottom: '2px solid red',paddingBottom: '5px', display: 'flex',alignItems: 'center'}}>
        <img src={admi} alt="Admin Logo" style={{width: '44px',height: '40px',marginRight: '8px'}}/>Admin </h2>
<div style={{ marginBottom: '20px', cursor: 'pointer',backgroundColor: 'blue',color: 'white', padding: '10px 20px', width: '120px', textAlign: 'center',  borderRadius: '5px'}} onClick={handleDashboardClick}>
          Dashboard</div>
        <div style={{ marginBottom: '20px', cursor: 'pointer',backgroundColor: 'blue',color: 'white',  padding: '10px 20px',  width: '120px', 
    textAlign: 'center', borderRadius: '5px'}} onClick={handleManageUsersClick}> Manage Users</div>
        
        <div style={{ marginBottom: '20px', cursor: 'pointer',backgroundColor: 'blue',color: 'white',padding: '10px 20px', width: '120px', 
    textAlign: 'center', borderRadius: '5px' }} onClick={handleLogout}>Logout</div>
      </div>

      <div style={{ flex: 1, padding: '40px', textAlign: 'center', marginTop: '90px'}}>
        <h1 style={{ color: 'orangered' }}>Parasme IT Solutions</h1>
        <p style={{ color: 'black' }}>Welcome to the Admin Control Panel</p>
      </div>
    </div>
  );
};

export default Admin;
