import { Link } from 'react-router-dom';
import React, { useState,useRef } from 'react';
import fogo from '../assets/paras.jpg';
import logo from '../assets/parasmelogo.jpg'; 
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
import bmani from '../assets/bmani.jpg';
import preethi from '../assets/prever.jpg';
import sachin from '../assets/sachver.jpg';
import sheeth from '../assets/sheepre.jpg';
import rishab from '../assets/rishabjain.jpg';
import contact from '../assets/contac.jpg';



function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const contactRef = useRef(null);
  const AboutRef = useRef(null);

  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ScrollToContact = () => {
    if (AboutRef.current) {
      AboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [openFAQs, setOpenFAQs] = useState({});
  const toggleFAQ = (index) => {
    setOpenFAQs((prevOpenFAQs) => ({
      ...prevOpenFAQs,
      [index]: !prevOpenFAQs[index],
    }));
  };

  const faqs = [
    {
      question: 'What is Parasme?',
      answer: 'Provides "Most Superior" solutions in automation of IT Infrastructure.',
    },
    {
      question: "What's our vision?",
      answer:
        'Automate each and every administration operations in database, middleware & server leading to a state where administrators intervenes only in case of exceptions in the automated operation.',
    },
    {
      question: 'How do we innovate IT Automation?',
      answer:
        'An approach of Learn-Build-Deploy leads us to meet each and every requirement of the client to be prepared for future in terms of saving time, effort & cost with predictable quality deliveries.',
    },
    {
      question: 'What is the use case we solve for?',
      answer:
        'Enterprises impacted by longer operations time with unpredictable time and quality deliveries through manual methods or any other tool.<br />Expensive cost of tools/software with limited coverage of the operational executions.',
    },
    {
      question: 'What industry does Parasme serve?',
      answer: 'Every industry having deployment of database, middleware & servers are being covered in our product.',
    },
  ];

  return (
    <div className="home-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff9f6', color: '#fff', padding: '5rem 2rem', marginTop: '80px', marginBottom: '90px' }}>
  <div style={{ maxWidth: '50%', textAlign: 'left', paddingLeft: '5rem' }}>
    <h1 style={{ fontSize: '3rem', color: '#ff5722', marginBottom: '0.5rem' }}>Parasme</h1>
    <p style={{ fontSize: '1.8rem', color: '#333', marginBottom: '1rem', fontWeight: 'bold' }}>Database Enterprise Manager</p>
    <p style={{ fontSize: '1rem', color: 'black', marginBottom: '2rem', maxWidth: '25rem', lineHeight: '1.6' }}>
      We offer software product automating IT infrastructure administration procedures. Our solution reduces manual intervention in complex repeatable processes with reliable and predictable deliveries, consistently meeting the evolving demands of modern businesses.
    </p>
    <a href="https://cal.com/parasme/30min?date=2024-07-12&month=2024-07" style={{ backgroundColor: '#ff5722', color: 'white', padding: '1rem 2rem', borderRadius: '5px', textDecoration: 'none', fontSize: '1rem', transition: 'background-color 0.3s ease' }}>Book A Demo</a>
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
    <Link 
            style={{ fontSize: '18px', color: '#FF6347', textDecoration: 'none', marginTop: '20px', display: 'inline-flex', alignItems: 'center', transition: 'color 0.3s ease' }} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleScrollToContact}> Get in touch with us<span style={{ 
                marginLeft: '5px', 
                transition: 'transform 0.3s ease', 
                display: 'inline-block', 
                transform: isHovered ? 'translateX(5px)' : 'translateX(0)' ,
                fontSize: '1.9rem' 
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
  <div className="padding-global" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', marginBottom: '180px' }}>
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

      <div style={{ paddingTop: '0', paddingLeft: '0', paddingRight: '0', fontFamily: 'Arial, sans-serif', margin: '0', padding: '0', overflowX: 'hidden', marginBottom: '50px' }}>
        <div style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', marginBottom: '76px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ gridAutoColumns: '1fr', gridColumnGap: '4rem', gridRowGap: '2rem', gridTemplateRows: 'auto', gridTemplateColumns: '.5fr 1fr', gridAutoFlow: 'row', display: 'grid', }}>
              <div style={{ flexDirection: 'column' }}>
                <h2 style={{ color: 'orangered', fontSize: '2rem', fontWeight: '600', lineHeight: '1.2', marginTop: '0' }}>Frequently Asked Questions</h2>
                <div style={{ paddingTop: '0', paddingLeft: '0', paddingRight: '0', paddingBottom: '0.25rem', marginTop: '-0.90rem' }}></div>
                <Link  style={{ borderBottom: '1px solid blue', color: 'black', fontWeight: '600', textDecoration: 'none' }}onClick={handleScrollToContact}>Contact us for more info
                </Link>
              </div>
              <div style={{ marginTop: '-2rem' }}>
                {faqs.map((faq, index) => (
                  <div key={index}
                    onClick={() => toggleFAQ(index)}
                    style={{ cursor: 'pointer', backgroundColor: '#fff', borderBottom: '2px solid #ececf1', padding: '1rem 0', transition: 'background-color 0.3s' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ justifyContent: 'flex-start', alignItems: 'center', width: '2rem', marginRight: '3rem', display: 'flex' }}>
                        <div style={{ color: '#fa5c22', fontSize: '1.5rem', fontWeight: '600' }}>
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </div>
                      </div>
                      <div style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%', display: 'flex' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '500', lineHeight: '1.4' }}>{faq.question}</h3>
                        <div
                          style={{ flex: 'none', justifyContent: 'center', alignItems: 'center', width: '3rem', height: '3rem', marginLeft: '2rem', display: 'flex', transition: 'background-color 0.3s', }}>
                          <div style={{ fontSize: '2rem', color: '#282938b3', marginLeft: '0.5rem', transition: 'transform 0.3s ease', transformOrigin: 'center', transform: openFAQs[index] ? 'rotate(90deg)' : 'rotate(0deg)', }}>{openFAQs[index] ? '×' : '+'}
                          </div>
                        </div>
                      </div>
                    </div>
                    {openFAQs[index] && (
                      <div style={{ maxWidth: '40rem', overflow: 'hidden', marginTop: '-1.90rem' }}>
                        <div style={{ marginLeft: '5rem', fontSize: '1.10rem', lineHeight: '1.2rem' }}>
                          <p style={{ color: '#282938b3', fontFamily: 'Poppins, sans-serif' }} dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  

<div ref={AboutRef} style={{ position: 'relative', width: '100%', margin: '0 auto',marginBottom: '90px', marginTop: '160px'  }}>
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
</div>


<div ref={contactRef} style={{ backgroundColor: '#fff9f6', padding: '92px 5% 0px 5%', position: 'relative',marginBottom:"90px"}}>
  <div style={{ width: '100%', maxWidth: '1140px', marginLeft: 'auto', marginRight: 'auto', position: 'relative' }}>
    <div style={{ display: 'grid',gridRowGap: '90px',gridColumnGap: '90px',gridTemplateRows: 'auto',gridTemplateColumns: '.75fr 1fr',alignItems: 'start' }}>
      <div>
        <div style={{ marginBottom: '48px' }}>
          <div style={{ marginBottom: '16px' }}>
            <h1 style={{ color: 'orangered', letterSpacing: '-.02em', marginTop: '0', marginBottom: '0', fontSize: '48px', lineHeight: '1.2' }}>Contact Us</h1></div>
          <p style={{ letterSpacing: '-.02em', marginBottom: '0', fontSize: '20px', lineHeight: '32px', color: '#666' }}>Please share your details and we will reach out!</p>
        </div>
        <div style={{ margin: '0 0 15px' }}><form id="wf-form-Contact-Form-3" name="wf-form-Contact-Form-3"  method="get" style={{ display: 'flex', flexDirection: 'column' }}
            onSubmit={(e) => {
              e.preventDefault();
              document.getElementById('form-success-message').style.display = 'none'; 
              document.getElementById('form-error-message').style.display = 'none'; 
              const submitButton = e.target.querySelector('input[type="submit"]');
              submitButton.value = 'Please wait...'; 
              submitButton.disabled = true; 
              let isNetworkAvailable = navigator.onLine; 
              setTimeout(() => {
                if (!isNetworkAvailable) {
                  submitButton.value = 'Submit';
                  submitButton.disabled = false; 
                  document.getElementById('form-error-message').style.display = 'block';
                } else {
                  document.getElementById('form-success-message').style.display = 'block'; 
                  document.getElementById('wf-form-Contact-Form-3').style.display = 'none'; 
                }}, 2000); }}>
            <div style={{ marginBottom: '0px' }}>
              <label htmlFor="Contact-Name-Field-02" style={{ color: 'black', letterSpacing: '-.01em', marginBottom: '8px', fontSize: '14px', fontWeight: '400', lineHeight: '24px' }}>Name</label>
              <input style={{ borderRadius: '8px',padding: '11px 16px',transition: 'all .2s',color: '#333',backgroundColor: '#fff',border: '1px solid #ccc',width: '92%',height: '24px',marginBottom: '19px',marginTop: '10px',fontSize: '14px',lineHeight: '1.42857',display: 'block'}}type="text" id="Contact-Name-Field-02"required/>
            </div>
            <div style={{ marginBottom: '0px' }}>
              <label htmlFor="Contact-Email-Field-02" style={{ color: 'black', letterSpacing: '-.01em', marginBottom: '8px', fontSize: '14px', fontWeight: '400', lineHeight: '24px' }}>Email Address</label>
              <input className="f-field-input w-input" style={{ borderRadius: '8px',padding: '11px 16px',transition: 'all .2s',color: '#333',backgroundColor: '#fff',border: '1px solid #ccc',width: '92%',height: '24px',marginBottom: '19px',marginTop: '10px',fontSize: '14px',lineHeight: '1.42857',display: 'block',}}type="email" id="Contact-Email-Field-02" required/>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label htmlFor="Contact-Message-Field-02" style={{ color: 'black', letterSpacing: '-.01em', marginBottom: '8px', fontSize: '14px', fontWeight: '400', lineHeight: '24px' }}>Message</label>
              <textarea id="Contact-Message-Field-02" name="Contact-Message-Field-02" style={{ border: '1px solid #ccc',color: '#333',backgroundColor: '#fff',borderRadius: '8px',minHeight: '90px',marginBottom: '2px',padding: '16px',fontSize: '14px',lineHeight: '24px',width: '92%',height: 'auto',display: 'block',marginTop: '10px',transition: 'all 0.2s' }}required/></div>
            <input type="submit" value="Submit" style={{ backgroundColor: 'orangered',color: 'white',textAlign: 'center',letterSpacing: '-.02em',borderRadius: '50px',justifyContent: 'center',alignItems: 'center',minHeight: '48px',padding: '12px 24px',fontSize: '14px',fontWeight: '500',textDecoration: 'none',transition: 'background-color .3s',display: 'block',cursor: 'pointer',lineHeight: 'inherit',border: '0',}}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'black';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'orangered';
              }}/>
          </form>
          <div id="form-success-message" style={{ textAlign: 'center',backgroundColor: '#ddd',padding: '20px',display: 'none'}}>
            Thank you! Your submission has been received!
          </div>
          <div id="form-error-message" style={{ backgroundColor: '#ffdede',marginTop: '10px',padding: '10px',display: 'none',color: 'black',borderRadius: '8px',textAlign: 'center'}}>Oops! Something went wrong while submitting the form.
          </div>
        </div>
      </div>
      <div style={{ maxWidth: '550px', height: '100%' }}>
        <img src={contact} alt="Contact us" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
      </div>
    </div>
  </div>
</div>


<div style={{ backgroundColor: 'white', padding: '4rem', margin: '0' }}>
        <footer style={{ backgroundColor: 'white', margin: '0', padding: '0' }}>
          <div style={{ paddingBottom: '0rem', fontSize: '1rem', padding: '0', paddingTop: '0', paddingLeft: '0', paddingRight: '0' }}>
            <div style={{ backgroundColor: 'white', paddingTop: '0px', paddingBottom: '0px' }}>
              <div style={{ maxWidth: '1352px', paddingLeft: '24px', paddingRight: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: '350px', gridRowGap: '32px' }}>
                    <a href="/" style={{ height: '60px', display: 'inline-block', textDecoration: 'none' }}>
                      <img src={logo} alt="" style={{ height: '100%' }} />
                      <div style={{ fontWeight: 700, fontSize: '1.0rem', color: 'black' }}>Parasme IT Solutions Pvt. Ltd.</div>
                      <div style={{ fontWeight: 400, fontSize: '1.0rem', color: 'black' }}>Regd Off: Bengaluru</div>
                      <div style={{ fontWeight: 400, fontSize: '1.0rem', color: 'black' }}>Karnataka, INDIA</div></a></div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', gridColumnGap: '120px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gridRowGap: '24px' }}>
                      <div style={{ fontSize: '18px', fontWeight: 700, lineHeight: '130%' }}>About Us</div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gridRowGap: '16px' }}>
                        <a href="#about-us" style={{ textDecoration: 'none', color: "#333", fontSize: "17px", fontWeight: "450" }} onClick={ScrollToContact}>Our Team</a>
                        <a href="#contact-us" style={{ textDecoration: 'none', color: "#333", fontSize: "17px", fontWeight: "450" }} onClick={handleScrollToContact}>Contact Us</a>
                        <a href="https://cal.com/parasme/30min?date=2024-07-12&month=2024-07" style={{ textDecoration: 'none', color: "#333", fontSize: "17px", fontWeight: "450" }}>Link</a></div></div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gridRowGap: '24px' }}>
                      <div style={{ fontSize: '18px', fontWeight: 700, lineHeight: '130%' }}>Product</div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gridRowGap: '16px' }}>
                        <Link to="/products/database" style={{ textDecoration: 'none', color: "#333", fontSize: "17px", fontWeight: "450" }}>Database</Link>
                        <Link to="/products/middleware" style={{ textDecoration: 'none', color: "#333", fontSize: "17px", fontWeight: "450" }}>Middleware</Link>
                        <Link to="/products/server" style={{ textDecoration: 'none', color: "#333", fontSize: "17px", fontWeight: "450" }}>Server</Link></div></div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gridRowGap: '24px' }}>
                      <div style={{ fontSize: '18px', fontWeight: 700, lineHeight: '130%' }}>Solutions</div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gridRowGap: '16px' }}>
                        <Link to="/solutions/automation" style={{ textDecoration: 'none', color: "#333", fontSize: "17px", fontWeight: "450" }}>Automation</Link>
                        <Link to="/solutions/solution-engineering" style={{ textDecoration: 'none', color: "#333", fontSize: "17px", fontWeight: "450" }}>Solution Engineering</Link></div></div></div></div>
                <div style={{ backgroundColor: '#13131333', width: '100%', height: '1px', marginTop: '64px', marginBottom: '32px' }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '14px', lineHeight: '130%' }}>Copyright @ Parasme IT Solutions Pvt. Ltd. 2024</div></div></div></div></div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
