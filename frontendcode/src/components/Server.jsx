import React from 'react';
import Footer from './Footer';

function Server() {
  return (
    <div style={{ padding: '1rem', backgroundColor: 'white' }}>
      <h2 style={{ color: '#333', fontSize: '2rem',minHeight: '90vh',alignItems: 'flex-start',display: 'flex', justifyContent: 'center', textAlign: 'center',  paddingTop: '20vh' }}>This is the server product</h2>
      <Footer />
    </div>
  );
}

export default Server;
