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

<div style={{ position: 'relative', width: '100%', margin: '0 auto',marginBottom: '40px' }}>
<h2 style={{ fontWeight: '600', marginBottom: '29px', marginTop: '0', color: 'orangered', fontSize: '45px', paddingLeft: '270px', paddingRight: '270px' }}>Meet our team</h2>


<div style={{ display: 'flex', animation: 'slide 34s linear infinite', paddingLeft: '0', whiteSpace: 'nowrap' }}>
  
 
  <div style={{ display: 'inline-block', backgroundColor: 'white', marginRight: '40px', borderRadius: '10px', padding: '20px', textAlign: 'center', width: '220px', transition: 'transform 0.3s ease' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <img src={bmani} alt="B. Mani" style={{ maxWidth: '272px', maxHeight: '280px', objectFit: 'cover', borderRadius: '6px', backgroundColor: 'lightpink' }} />
    </div>
    <div style={{ marginTop: '15px', fontWeight: 'bold', fontSize: '18px', color: '#404040' }}>B. Mani</div>
    <div style={{ color: '#525252', fontSize: '14px', fontWeight: '500', lineHeight: '20px' }}>Managing Director</div>
  </div>

  <div style={{ display: 'inline-block', backgroundColor: 'white', marginRight: '40px', borderRadius: '10px', padding: '20px', textAlign: 'center', width: '220px', transition: 'transform 0.3s ease' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <img src={sachin} alt="Sachin Verma" style={{ maxWidth: '272px', maxHeight: '280px', objectFit: 'cover', borderRadius: '6px', backgroundColor: 'lightpink' }} />
    </div>
    <div style={{ marginTop: '15px', fontWeight: 'bold', fontSize: '18px', color: '#404040' }}>Sachin Verma</div>
    <div style={{ color: '#525252', fontSize: '14px', fontWeight: '500', lineHeight: '20px' }}>Chief Product Officer</div>
  </div>

  <div style={{ display: 'inline-block', backgroundColor: 'white', marginRight: '40px', borderRadius: '10px', padding: '20px', textAlign: 'center', width: '220px', transition: 'transform 0.3s ease' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <img src={preethi} alt="Preeti Verma" style={{ maxWidth: '272px', maxHeight: '280px', objectFit: 'cover', borderRadius: '6px', backgroundColor: 'lightpink' }} />
    </div>
    <div style={{ marginTop: '15px', fontWeight: 'bold', fontSize: '18px', color: '#404040' }}>Preeti Verma</div>
    <div style={{ color: '#525252', fontSize: '14px', fontWeight: '500', lineHeight: '20px' }}>Sr. Manager - Operations</div>
  </div>

  
  <div style={{ display: 'inline-block', backgroundColor: 'white', marginRight: '40px', borderRadius: '10px', padding: '20px', textAlign: 'center', width: '220px', transition: 'transform 0.3s ease' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <img src={sheeth} alt="Sheetal Panigrahi" style={{ maxWidth: '272px', maxHeight: '280px', objectFit: 'cover', borderRadius: '6px', backgroundColor: 'lightpink' }} />
    </div>
    <div style={{ marginTop: '15px', fontWeight: 'bold', fontSize: '18px', color: '#404040' }}>Sheetal Panigrahi</div>
    <div style={{ color: '#525252', fontSize: '14px', fontWeight: '500', lineHeight: '20px' }}>Sr. Manager - Database</div>
  </div>
  
  <div style={{ display: 'inline-block', backgroundColor: 'white', marginRight: '170px', borderRadius: '10px', padding: '20px', textAlign: 'center', width: '220px', transition: 'transform 0.3s ease' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <img src={rishab} alt="Rishab Jain" style={{ maxWidth: '272px', maxHeight: '280px', objectFit: 'cover', borderRadius: '6px', backgroundColor: 'lightpink' }} />
    </div>
    <div style={{ marginTop: '15px', fontWeight: 'bold', fontSize: '18px', color: '#404040' }}>Rishab Jain</div>
    <div style={{ color: '#525252', fontSize: '14px', fontWeight: '500', lineHeight: '20px' }}>Manager - Application</div>
  </div>

  
  <div style={{ display: 'inline-block', backgroundColor: 'white', marginRight: '40px', borderRadius: '10px', padding: '20px', textAlign: 'center', width: '220px', transition: 'transform 0.3s ease' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <img src={bmani} alt="B. Mani" style={{ maxWidth: '272px', maxHeight: '280px', objectFit: 'cover', borderRadius: '6px', backgroundColor: 'lightpink' }} />
    </div>
    <div style={{ marginTop: '15px', fontWeight: 'bold', fontSize: '18px', color: '#404040' }}>B. Mani</div>
    <div style={{ color: '#525252', fontSize: '14px', fontWeight: '500', lineHeight: '20px' }}>Managing Director</div>
  </div>

  <div style={{ display: 'inline-block', backgroundColor: 'white', marginRight: '40px', borderRadius: '10px', padding: '20px', textAlign: 'center', width: '220px', transition: 'transform 0.3s ease' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <img src={sachin} alt="Sachin Verma" style={{ maxWidth: '272px', maxHeight: '280px', objectFit: 'cover', borderRadius: '6px', backgroundColor: 'lightpink' }} />
    </div>
    <div style={{ marginTop: '15px', fontWeight: 'bold', fontSize: '18px', color: '#404040' }}>Sachin Verma</div>
    <div style={{ color: '#525252', fontSize: '14px', fontWeight: '500', lineHeight: '20px' }}>Chief Product Officer</div>
  </div>

  <div style={{ backgroundColor: 'white', marginRight: '40px', borderRadius: '10px', padding: '20px', textAlign: 'center', width: '220px', transition: 'transform 0.3s ease' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <img src={preethi} alt="Preeti Verma" style={{ maxWidth: '272px', maxHeight: '280px', objectFit: 'cover', borderRadius: '6px', backgroundColor: 'lightpink' }} />
    </div>
    <div style={{ marginTop: '15px', fontWeight: 'bold', fontSize: '18px', color: '#404040' }}>Preeti Verma</div>
    <div style={{ color: '#525252', fontSize: '14px', fontWeight: '500', lineHeight: '20px' }}>Sr. Manager - Operations</div>
  </div>

  
  <div style={{ backgroundColor: 'white', marginRight: '40px', borderRadius: '10px', padding: '20px', textAlign: 'center', width: '220px', transition: 'transform 0.3s ease' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <img src={sheeth} alt="Sheetal Panigrahi" style={{ maxWidth: '272px', maxHeight: '280px', objectFit: 'cover', borderRadius: '6px', backgroundColor: 'lightpink' }} />
    </div>
    <div style={{ marginTop: '15px', fontWeight: 'bold', fontSize: '18px', color: '#404040' }}>Sheetal Panigrahi</div>
    <div style={{ color: '#525252', fontSize: '14px', fontWeight: '500', lineHeight: '20px' }}>Sr. Manager - Database</div>
  </div>

  <div style={{ backgroundColor: 'white', marginRight: '40px', borderRadius: '10px', padding: '20px', textAlign: 'center', width: '220px', transition: 'transform 0.3s ease' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <img src={rishab} alt="Rishab Jain" style={{ maxWidth: '272px', maxHeight: '280px', objectFit: 'cover', borderRadius: '6px', backgroundColor: 'lightpink' }} />
    </div>
    <div style={{ marginTop: '15px', fontWeight: 'bold', fontSize: '18px', color: '#404040' }}>Rishab Jain</div>
    <div style={{ color: '#525252', fontSize: '14px', fontWeight: '500', lineHeight: '20px' }}>Manager - Application</div>
  </div>



</div>

  
</div>


<style>{`
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