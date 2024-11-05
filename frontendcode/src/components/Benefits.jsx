import React from 'react';
import benei from '../assets/bene.jpg';

function Benefits() {
  return (
    <div style={{ maxWidth: '1200px',margin: '0 auto',padding: '80px 20px',fontFamily: 'Arial, sans-serif',}}>
    <h1 className="key-benefits-title">Key Benefits</h1>  
    <div className="key-benefits-container">
      <div className="image-container">
        <img src={benei} alt="Digital technology" className="benefits-img" />
      </div>   
      <div className="text-container">
        <p className="benefits-text">
          We have the passion, vision and an execution capability to remain 
          ahead of our customers' evolving needs. We are a solution-oriented 
          company that brings uniqueness in our approach. Through this 
          approach, we are committed to delivering solutions in a flexible 
          and cost-effective manner.
        </p>
      </div>
      </div>
      <style>
        {`
  .key-benefits-title {
    font-size: 36px;
    text-align: center;
    margin-bottom: 40px;
    font-weight: bold;
  }

  .key-benefits-container {
    display: flex;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
  }

  .image-container {
    flex: 1;
    min-width: 300px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  .benefits-img {
    width: 70%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-left: 170px;
  }

  .text-container {
    flex: 1;
    min-width: 300px;
  }

  .benefits-text {
    font-size: 16px;
    line-height: 1.6;
    color: black;
    margin: 0;
    padding-right: 20px;
  }

  @media (max-width: 768px) {
    .benefits-img {
      width: 100%;
      margin-left: 0;
    }

    .benefits-text {
      padding-right: 0;
    }
  }
        `}
      </style>

      <div style={{ marginTop: '120px' }}>
        <div style={{ textAlign: 'left', marginBottom: '1px', paddingBottom: '15px', borderBottom: '2px solid #002d72', fontSize: '24px', fontWeight: 'bold', color: '#002d72' }}>Benefits</div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '45%' }}>
            <h2 style={{ color: 'black', marginBottom: '20px' }}>Audit & Compliance</h2>
            <p>Timely and effectively meets audit compliance requirements from the regulatory body on the procedure execution.</p>
          </div>
          <div style={{ width: '45%' }}>
            <h2 style={{ color: 'black', marginBottom: '20px' }}>Increased DBA productivity</h2>
            <p>Increased level of productivity enjoyed by the database team parallel processing & scheduling jobs. A DBA can also support more systems when a subset of their responsibilities has been automated, further increasing the team's productivity metrics.</p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
          <div style={{ width: '45%', marginTop: '-50px' }}>
            <h2 style={{ color: 'black', marginBottom: '20px' }}>Process stability and consistency</h2>
            <p>Automated processes implies that they are repeatedly executed in the same way and thus increases consistent deliveries in predictable time.</p>
            <p>Part of the productivity gains that result from automation can be spent in streamlining and further improving the processes.</p>
          </div>
          <div style={{ width: '45%', marginTop: '-50px' }}>
            <h2 style={{ color: 'black', marginBottom: '20px' }}>Error reduction</h2>
            <p>Automated processes eliminates the possibility of errors while executing the SOPs and even omissions like forgetting to kick off the critical jobs.</p>
            <h2 style={{ color: 'black', marginBottom: '20px' }}>Cost Savings</h2>
            <p>Automated procedures reduces costs up to 64% for range of ~80-110 databases.</p>
          </div>
        </div>
      </div>
    </div>
    );
  }
export default Benefits;
