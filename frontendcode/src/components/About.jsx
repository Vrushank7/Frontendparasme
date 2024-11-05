import React from 'react';
import Footer from './Footer';
import bmani from '../assets/bmani.jpg';
import preethi from '../assets/prever.jpg';
import sachin from '../assets/sachver.jpg';
import sheeth from '../assets/sheepre.jpg';
import rishab from '../assets/rishabjain.jpg';

function About() {
  return (
    <div style={{paddingTop: '0',paddingLeft: '0',paddingRight: '0',fontFamily: 'Arial, sans-serif',margin: '0',padding: '0',overflowX: 'hidden',marginBottom: '0px'}}>
    <header style={{ marginTop: '5rem' }}>
    <div style={{ paddingBottom: '8rem',paddingTop: '0', paddingLeft: '0', paddingRight: '0',gridAutoColumns: '1fr' }}></div>
    <div style={{ marginBottom: '76px', paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
      <div style={{ width: '100%', maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto' }}>
        <div style={{ display: 'grid', gridRowGap: '1rem', gridColumnGap: '4rem', gridTemplateRows: 'auto ',alignItems: 'center',gridTemplateColumns: '4.25fr 1.25fr'}}>
          <div style={{ display: 'grid', gridColumnGap: '4rem', gridRowGap: '1rem', gridTemplateRows: 'auto', gridTemplateColumns: '4.25fr 1.25fr', alignItems: 'center' }}>
            <div style={{ width: '100%', maxWidth: '36rem' }}>
              <div style={{ fontWeight: '600' }}>
                <strong><em>About us</em></strong>
              </div>
              <div style={{ padding: '1rem' }}></div>
              <h1 style={{ color: 'orangered', width: '100%', fontSize: '2.6rem', marginTop: '-1rem' }}>Our Automations Increases Availability Of Systems</h1>
              <div style={{ paddingBottom: '1rem',paddingTop: '0', paddingLeft: '0', paddingRight: '0' }}></div>
              <p style={{ color: '#666', marginTop: '-1rem', fontSize: '1.1rem', lineHeight: '1.3', fontWeight: '400' }}>
                Business increases through higher system availability, automation increases system availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{paddingTop: '0', paddingLeft: '0', paddingRight: '0',marginBottom: '8rem' }}></div>
    </header>

    <div  className="about-container">
      <h2 className="team-header">Meet our team</h2>
      <div className="team-slider">
        <div className="team-member">
          <div className="team-image-container">
            <img src={bmani} alt="B. Mani" className="team-image" />
          </div>
          <div className="team-name">B. Mani</div>
          <div className="team-role">Managing Director</div>
        </div>
        <div className="team-member">
          <div className="team-image-container">
            <img src={sachin} alt="Sachin Verma" className="team-image" />
          </div>
          <div className="team-name">Sachin Verma</div>
          <div className="team-role">Chief Product Officer</div>
        </div>
        <div className="team-member">
          <div className="team-image-container">
            <img src={preethi} alt="Preeti Verma" className="team-image" />
          </div>
          <div className="team-name">Preeti Verma</div>
          <div className="team-role">Sr. Manager - Operations</div>
        </div>
        <div className="team-member">
          <div className="team-image-container">
            <img src={sheeth} alt="Sheetal Panigrahi" className="team-image" />
          </div>
          <div className="team-name">Sheetal Panigrahi</div>
          <div className="team-role">Sr. Manager - Database</div>
        </div>
        <div className="team-member"  style={{  marginRight: '170px' }}>
          <div className="team-image-container">
            <img src={rishab} alt="Rishab Jain" className="team-image" />
          </div>
          <div className="team-name">Rishab Jain</div>
          <div className="team-role">Manager - Application</div>
        </div>
        <div className="team-member">
          <div className="team-image-container">
            <img src={bmani} alt="B. Mani" className="team-image" />
          </div>
          <div className="team-name">B. Mani</div>
          <div className="team-role">Managing Director</div>
        </div>
        <div className="team-member">
          <div className="team-image-container">
            <img src={sachin} alt="Sachin Verma" className="team-image" />
          </div>
          <div className="team-name">Sachin Verma</div>
          <div className="team-role">Chief Product Officer</div>
        </div>
        <div className="team-member">
          <div className="team-image-container">
            <img src={preethi} alt="Preeti Verma" className="team-image" />
          </div>
          <div className="team-name">Preeti Verma</div>
          <div className="team-role">Sr. Manager - Operations</div>
        </div>
        <div className="team-member">
          <div className="team-image-container">
            <img src={sheeth} alt="Sheetal Panigrahi" className="team-image" />
          </div>
          <div className="team-name">Sheetal Panigrahi</div>
          <div className="team-role">Sr. Manager - Database</div>
        </div>
        <div className="team-member" >
          <div className="team-image-container">
            <img src={rishab} alt="Rishab Jain" className="team-image" />
          </div>
          <div className="team-name">Rishab Jain</div>
          <div className="team-role">Manager - Application</div>
        </div>
      </div>
    </div>
    <style jsx>{`
        .about-container {
  position: relative;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 90px;
  margin-top: 160px;
}

.team-header {
  font-weight: 600;
  margin-bottom: 29px;
  margin-top: 0;
  color: orangered;
  font-size: 45px;
  padding-left: 270px;
  padding-right: 270px;
}

.team-slider {
  display: flex;
  animation: slide 34s linear infinite;
  padding-left: 0;
  white-space: nowrap;
}

.team-member {
  display: inline-block;
  background-color: white;
  margin-right: 40px;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 220px;
  transition: transform 0.3s ease;
}

.team-image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.team-image {
  max-width: 272px;
  max-height: 280px;
  object-fit: cover;
  border-radius: 6px;
  background-color: lightpink;
}

.team-name {
  margin-top: 15px;
  font-weight: bold;
  font-size: 18px;
  color: #404040;
}

.team-role {
  color: #525252;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}

@media (max-width: 768px) {

  .team-header {
    font-size: 35px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .team-slider {
    display: flex;
    padding-left: 0;
    white-space: normal;
  }

  .team-member {
    flex: 1 1 100%;
    margin-bottom: 20px;
    min-width: 87px;
  }

  .team-image {
    max-width: 160px;
    max-height: 200px;
  }
}

@keyframes slide {
  0% { transform: translateX(0); }
  100% { transform: translateX(-106%); }
}
      `}</style>
<Footer />
</div>
  );
}

export default About;