import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import fogo from '../assets/paras.jpg';
import ser from '../assets/server.jpg';
import data from '../assets/database.jpg';
import midd from '../assets/middlewear.jpg';
import int from '../assets/integra.jpg';
import agen from '../assets/agent.jpg';
import auto from '../assets/autofix.jpg';
import lear from '../assets/learn.jpg';
import ons from '../assets/onsite.jpg';
import platf from '../assets/platform.jpg';
import repo from '../assets/report.jpg';

function Home() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="home-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff9f6', color: '#fff', padding: '5rem 2rem', marginTop: '80px', marginBottom: '90px' }}>
  <div style={{ maxWidth: '50%', textAlign: 'left', paddingLeft: '5rem' }}>
    <h1 style={{ fontSize: '3rem', color: '#ff5722', marginBottom: '0.5rem' }}>Parasme</h1>
    <p style={{ fontSize: '1.8rem', color: '#333', marginBottom: '1rem', fontWeight: 'bold' }}>Database Enterprise Manager</p>
    <p style={{ fontSize: '1rem', color: 'black', marginBottom: '2rem', maxWidth: '25rem', lineHeight: '1.6' }}>
      We offer software product automating IT infrastructure administration procedures. Our solution reduces manual intervention in complex repeatable processes with reliable and predictable deliveries, consistently meeting the evolving demands of modern businesses.
    </p>
    <Link to="/book-demo" style={{ backgroundColor: '#ff5722', color: 'white', padding: '1rem 2rem', borderRadius: '5px', textDecoration: 'none', fontSize: '1rem', transition: 'background-color 0.3s ease' }}>Book A Demo</Link>
  </div>
  <div style={{ maxWidth: '40%' }}>
    <img src={fogo} alt="Parasme Illustration" style={{ width: '100%', borderRadius: '10px' }} />
  </div>
</div>

<div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.8fr', gridGap: '20px', padding: '40px 20px', alignItems: 'start', fontSize: '2.5rem', marginBottom: '90px'}}>
  <div style={{ textAlign: 'left', marginLeft: '100px' }}>
    <h2 style={{ fontSize: '36px', color: '#333', marginBottom: '20px' }}>What we do?</h2>
    <p style={{ fontSize: '18px', color: '#666', maxWidth: '400px' }}>
      Automate any administration procedure, no matter how complex. Our software is platform-independent with in-built functionality to fix known issues during execution, ensuring quality deliveries consistently.
    </p>
    <Link to="/contact" 
            style={{ fontSize: '18px', color: '#FF6347', textDecoration: 'none', marginTop: '20px', display: 'inline-flex', alignItems: 'center', transition: 'color 0.3s ease' }} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}> Get in touch with us<span style={{ 
                marginLeft: '5px', 
                transition: 'transform 0.3s ease', 
                display: 'inline-block', 
                transform: isHovered ? 'translateX(5px)' : 'translateX(0)' 
              }}> →</span></Link> </div>

  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gridGap: '10px', justifyItems: 'start' }}>
    <div style={{ textAlign: 'left', width: '250px', gridColumn: '1', gridRow: '1', marginLeft: '30px' }}>
      <div>
        <img src={data} alt="Database" style={{ width: '60px', height: '60px', marginBottom: '20px' }} />
      </div>
      <h3 style={{ fontSize: '2rem', color: '#333', marginTop: '0', marginBottom: '0', fontWeight: '600', lineHeight: '1.2' }}>Database</h3>
      <p style={{ fontSize: '16px', color: '#666' }}>Repetitive operations of provisioning, availability, & security compliance.</p>
    </div>

    <div style={{ textAlign: 'left', width: '250px', gridColumn: '2', gridRow: '1', marginLeft: '-40px' }}>
      <div>
        <img src={midd} alt="Middleware" style={{ width: '60px', height: '60px', marginBottom: '20px' }} />
      </div>
      <h3 style={{ fontSize: '2rem', color: '#333', marginTop: '0', marginBottom: '0', fontWeight: '600', lineHeight: '1.2' }}>Middleware</h3>
      <p style={{ fontSize: '16px', color: '#666' }}>Provisioning, patching, user account management, security compliance & auditing.</p>
    </div>

    <div style={{ textAlign: 'left', width: '250px', gridColumn: '1', gridRow: '2', marginLeft: '30px' }}>
      <div>
        <img src={ser} alt="Server" style={{ width: '60px', height: '60px', marginBottom: '20px' }} />
      </div>
      <h3 style={{ fontSize: '2rem', color: '#333', marginTop: '0', marginBottom: '0', fontWeight: '600', lineHeight: '1.2' }}>Server</h3>
      <p style={{ fontSize: '16px', color: '#666' }}>Backup & Restore, Patching, Provisioning, Log management & Analysis, User Account management, Security Compliance & Auditing.</p>
    </div>
  </div>
</div>

    
  <div style={{ textAlign: 'center', backgroundColor: '#fff9f6', padding: '60px 20px', marginBottom: '40px' }}>
  <h2 style={{ fontSize: '3rem', color: '#fa5c21', fontWeight: 'normal', fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}>Why Parasme?</h2>
  <p style={{ fontSize: '1.5rem', color: '#fa5c21', marginBottom: '0', textAlign: 'center', fontWeight: '400' }}>Automation for Reliable, Time and Cost</p>
  <p style={{ fontSize: '1.5rem', color: '#fa5c21', fontWeight: '400', marginTop: '0', lineHeight: '1' }}>effective IT administration</p>

  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '25px', marginTop: '30px', padding: '0 100px' }}>
    <div style={{ backgroundColor: 'white', borderRadius: '0', width: '28%', padding: '3rem 2rem 3rem 3rem', alignItems: 'center', textAlign: 'center' }}>
      <div style={{ marginBottom: '1rem' }}>
        <img src={platf} alt="Platform Independent" style={{ width: '50px', height: 'auto', marginBottom: '1rem' }} />
      </div>
      <h3 style={{ fontSize: '1.25rem', color: 'black', fontWeight: '550', lineHeight: '1.5' }}>Platform Independent</h3>
      <p style={{ fontSize: '16px', color: '#666', marginTop: '0', marginBottom: '0', fontFamily: 'Poppins, sans-serif' }}>
        Our product is compatible with major platforms i.e Linux, AIX, Solaris & Windows.
      </p>
    </div>

    <div style={{ backgroundColor: 'white', borderRadius: '0', width: '28%', padding: '3rem 2rem 3rem 3rem', alignItems: 'center', textAlign: 'center' }}>
      <div style={{ marginBottom: '1rem' }}>
        <img src={auto} alt="Auto Fixing" style={{ width: '50px', height: 'auto', marginBottom: '1rem' }} />
      </div>
      <h3 style={{ fontSize: '1.25rem', color: 'black', fontWeight: '550', lineHeight: '1.5' }}>Auto Fixing</h3>
      <p style={{ fontSize: '16px', color: '#666', marginTop: '0', marginBottom: '0', fontFamily: 'Poppins, sans-serif' }}>
        Software contains the functionality to fix all the known issues automatically during the execution of the operation.
      </p>
    </div>

    <div style={{ backgroundColor: 'white', borderRadius: '0', width: '28%', padding: '3rem 2rem 3rem 3rem', alignItems: 'center', textAlign: 'center' }}>
      <div style={{ marginBottom: '1rem' }}>
        <img src={repo} alt="Reporting" style={{ width: '50px', height: 'auto', marginBottom: '1rem' }} />
      </div>
      <h3 style={{ fontSize: '1.25rem', color: 'black', fontWeight: '550', lineHeight: '1.5' }}>Reporting</h3>
      <p style={{ fontSize: '16px', color: '#666', marginTop: '0', marginBottom: '0', fontFamily: 'Poppins, sans-serif' }}>
        Dashboard provides the report of the execution at every stage of the operation.
      </p>
    </div>
  </div>

  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '25px', marginTop: '30px', padding: '0 100px' }}>
    <div style={{ backgroundColor: 'white', borderRadius: '0', width: '28%', padding: '3rem 2rem 3rem 3rem', alignItems: 'center', textAlign: 'center' }}>
      <div style={{ marginBottom: '1rem' }}>
        <img src={agen} alt="Agentless architecture" style={{ width: '50px', height: 'auto', marginBottom: '1rem' }} />
      </div>
      <h3 style={{ fontSize: '1.25rem', color: 'black', fontWeight: '550', lineHeight: '1.5' }}>Agentless Architecture</h3>
      <p style={{ fontSize: '16px', color: '#666', marginTop: '0', marginBottom: '0', fontFamily: 'Poppins, sans-serif' }}>
        The architecture of the software includes open-source components without any agent running on the target hosts.
      </p>
    </div>

    <div style={{ backgroundColor: 'white', borderRadius: '0', width: '28%', padding: '3rem 2rem 3rem 3rem', alignItems: 'center', textAlign: 'center' }}>
      <div style={{ marginBottom: '1rem' }}>
        <img src={lear} alt="Learn,build and deploy" style={{ width: '50px', height: 'auto', marginBottom: '1rem' }} />
      </div>
      <h3 style={{ fontSize: '1.25rem', color: 'black', fontWeight: '550', lineHeight: '1.5' }}>Learn, Build & Deploy</h3>
      <p style={{ fontSize: '16px', color: '#666', marginTop: '0', marginBottom: '0', fontFamily: 'Poppins, sans-serif' }}>
        Continuous learning is being used to enhance software reliability and deployability.
      </p>
    </div>

    <div style={{ backgroundColor: 'white', borderRadius: '0', width: '28%', padding: '3rem 2rem 3rem 3rem', alignItems: 'center', textAlign: 'center' }}>
      <div style={{ marginBottom: '1rem' }}>
        <img src={ons} alt="on site support" style={{ width: '50px', height: 'auto', marginBottom: '1rem' }} />
      </div>
      <h3 style={{ fontSize: '1.25rem', color: 'black', fontWeight: '550', lineHeight: '1.5' }}>On-Site Support</h3>
      <p style={{ fontSize: '16px', color: '#666', marginTop: '0', marginBottom: '0', fontFamily: 'Poppins, sans-serif' }}>
        On-site support for critical & complex automations apart from non-critical support through remote operation.
      </p>
    </div>
  </div>

  <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginTop: '30px', padding: '0 150px' }}>
    <div style={{ backgroundColor: 'white', borderRadius: '0', width: '28%', padding: '3rem 2rem 3rem 3rem', alignItems: 'center', textAlign: 'center' }}>
      <div style={{ marginBottom: '1rem' }}>
        <img src={int} alt="integration" style={{ width: '50px', height: 'auto', marginBottom: '1rem' }} />
      </div>
      <h3 style={{ fontSize: '1.25rem', color: 'black', fontWeight: '550', lineHeight: '1.5' }}>Integration</h3>
      <p style={{ fontSize: '16px', color: '#666', marginTop: '0', marginBottom: '0', fontFamily: 'Poppins, sans-serif' }}>
        Mandatory regulatory compliance software are integrated.
      </p>
    </div>
  </div>
</div>


<div className="section_about-process">
  <div className="padding-global" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', marginBottom: '70px' }}>
    <div className="container-large" style={{ width: '100%', maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto' }}>
      <div className="padding-bottom" style={{ paddingTop: '0', paddingLeft: '0', paddingRight: '0' }}>
        <div className="padding-xhuge" style={{ padding: '1.5rem' }}></div>
      </div>
      <h2 className="text-align-center max-width-small align-center" style={{ color: 'orangered', textAlign: 'center', fontSize: '3rem', width: '100%', maxWidth: '36rem', marginLeft: 'auto', marginRight: 'auto' }}>
        The process we follow
      </h2>
      <div className="margin-top margin-large" style={{ marginBottom: '0', marginLeft: '0', marginRight: '0', margin: '3rem' }}>
        <div className="w-layout-grid process_component" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div className="process_item" style={{ flexDirection: 'column', maxWidth: '16rem', position: 'relative', alignItems: 'center', flex: '1' }}>
            <div className="process_connector-wrapper" style={{ alignItems: 'center', marginBottom: '1.5rem', display: 'flex' }}>
              <div className="process_circle" style={{ backgroundColor: 'orangered', color: 'orangered', borderRadius: '50%', flex: 'none', alignItems: 'center', width: '1rem', height: '1rem', marginRight: '1.5rem', display: 'flex' }}></div>
              <div className="process_connector-line" style={{ border: '1px dashed orangered', width: '100%' }}></div>
            </div>
            <div className="margin-bottom margin-xsmall" style={{ marginTop: '0', marginLeft: '0', marginRight: '0', margin: '0.5rem' }}>
              <h3 className="heading-style-h5" style={{ color: 'black', fontSize: '1.25rem', fontWeight: '600', lineHeight: '1.5', margin: '0', textIndent: '-0.55rem' }}>Observation</h3>
            </div>
            <p style={{ color: '#282938b3', fontFamily: 'Poppins, sans-serif' }}>Operation execution are observed.</p>
          </div>
          <div className="process_item" style={{ flexDirection: 'column', maxWidth: '16rem', position: 'relative', alignItems: 'center', flex: '1' }}>
            <div className="process_connector-wrapper" style={{ alignItems: 'center', marginBottom: '1.5rem', display: 'flex' }}>
              <div className="process_circle" style={{ backgroundColor: 'orangered', color: 'orangered', borderRadius: '50%', flex: 'none', alignItems: 'center', width: '1rem', height: '1rem', marginRight: '1.5rem', display: 'flex' }}></div>
              <div className="process_connector-line" style={{ border: '1px dashed orangered', width: '100%' }}></div>
            </div>
            <div className="margin-bottom margin-xsmall" style={{ marginTop: '0', marginLeft: '0', marginRight: '0', margin: '0.5rem' }}>
              <h3 className="heading-style-h5" style={{ color: 'black', fontSize: '1.25rem', fontWeight: '600', lineHeight: '1.5', margin: '0', textIndent: '-0.55rem' }}>Design</h3>
            </div>
            <p style={{ color: '#282938b3', fontFamily: 'Poppins, sans-serif' }}>Designing of automation with due diligence of dependencies and impact analysis.</p>
          </div>
          <div className="process_item" style={{ flexDirection: 'column', maxWidth: '16rem', position: 'relative', alignItems: 'center', flex: '1' }}>
            <div className="process_connector-wrapper" style={{ alignItems: 'center', marginBottom: '1.5rem', display: 'flex' }}>
              <div className="process_circle" style={{ backgroundColor: 'orangered', color: 'orangered', borderRadius: '50%', flex: 'none', alignItems: 'center', width: '1rem', height: '1rem', marginRight: '1.5rem', display: 'flex' }}></div>
              <div className="process_connector-line" style={{ border: '1px dashed orangered', width: '100%' }}></div>
            </div>
            <div className="margin-bottom margin-xsmall" style={{ marginTop: '0', marginLeft: '0', marginRight: '0', margin: '0.5rem' }}>
              <h3 className="heading-style-h5" style={{ color: 'black', fontSize: '1.25rem', fontWeight: '600', lineHeight: '1.5', margin: '0', textIndent: '-0.55rem' }}>Build</h3>
            </div>
            <p style={{ color: '#282938b3', fontFamily: 'Poppins, sans-serif' }}>Development of automation on the best practices with system customization.</p>
          </div>
          <div className="process_item" style={{ flexDirection: 'column', maxWidth: '16rem', position: 'relative', alignItems: 'center', flex: '1' }}>
            <div className="process_connector-wrapper" style={{ alignItems: 'center', marginBottom: '1.5rem', display: 'flex' }}>
              <div className="process_circle" style={{ backgroundColor: 'orangered', color: 'orangered', borderRadius: '50%', flex: 'none', alignItems: 'center', width: '1rem', height: '1rem', marginRight: '1.5rem', display: 'flex' }}></div>
              <div className="process_connector-line" style={{ border: '1px dashed orangered', width: '100%' }}></div>
            </div>
            <div className="margin-bottom margin-xsmall" style={{ marginTop: '0', marginLeft: '0', marginRight: '0', margin: '0.5rem' }}>
              <h3 className="heading-style-h5" style={{ color: 'black', fontSize: '1.25rem', fontWeight: '600', lineHeight: '1.5', margin: '0', textIndent: '-0.55rem' }}>Deployment</h3>
            </div>
            <p style={{ color: '#282938b3', fontFamily: 'Poppins, sans-serif' }}>Staged Deployment.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



    </div>
  );
}

export default Home;
