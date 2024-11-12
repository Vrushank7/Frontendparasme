import React from 'react';
import { useNavigate } from 'react-router-dom';
import admi from '../assets/adminn.jpg';

const Dashboard = () => {
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
     <div style={{width: '200px',height: '100vh',backgroundColor: '#2c3e50',color: 'white',display: 'flex',flexDirection: 'column',padding: '20px',boxSizing: 'border-box'}}>
        <h2 style={{color: 'yellow',marginBottom: '20px',borderBottom: '2px solid red',paddingBottom: '5px',display: 'flex',alignItems: 'center'}}>
          <img src={admi} alt="Admin Logo" style={{ width: '44px',height: '40px', marginRight: '8px'}}/>Admin</h2>
        <div style={{ marginBottom: '20px', cursor: 'pointer',backgroundColor: 'blue',color: 'white', padding: '10px 20px', width: '120px', textAlign: 'center', 
    borderRadius: '5px'}} onClick={handleDashboardClick}> Dashboard</div>
        <div style={{ marginBottom: '20px', cursor: 'pointer',backgroundColor: 'blue',color: 'white', padding: '10px 20px', width: '120px', 
    textAlign: 'center', borderRadius: '5px'}} onClick={handleManageUsersClick}>Manage Users</div>
      
        <div style={{ marginBottom: '20px', cursor: 'pointer',backgroundColor: 'blue',color: 'white', padding: '10px 20px', 
    width: '120px', textAlign: 'center',  borderRadius: '5px' }} onClick={handleLogout}>Logout </div>
      </div>

      <div style={{ padding: '20px', marginTop: '70px' }}>
      <div style={{backgroundColor: '#fff',borderRadius: '4px', padding: '20px',boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', border: '1px solid #e0e0e0'}}>
      <div style={{borderBottom: '1px solid #e0e0e0',marginBottom: '20px',paddingBottom: '10px'}}>
          <h1 style={{fontSize: '24px',marginBottom: '0',fontWeight: '500',color: 'orangered'}}> Welcome To Dashboard</h1>
        </div>
        <p style={{fontSize: '14px',lineHeight: '1.6',color: '#666',margin: '0'}}>
          Parasme IT Solutions is a technology consulting and services firm dedicated to assisting enterprises in the Banking, Financial Services and Insurance (BFSI), Utilities, Healthcare, and Public sectors in addressing their most complex challenges by streamlining the automation of their databases, middleware, and servers. We combine deep functional and technical expertise to develop best practices and ensure service excellence. As a forward-thinking startup, we utilize advanced AI to fully automate complex administrative tasks, enabling platforms to operate autonomously and ensuring seamless, high-quality deliveries every time.
        </p>
      </div>
      </div>
   </div>
  );
};

export default Dashboard;