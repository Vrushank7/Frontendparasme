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
    <div className="home-pages" >
    <div className="parasme-container">
      <div className="parasme-content">
        <h1 className="parasme-title">Parasme</h1>
        <p className="parasme-subtitle">Database Enterprise Manager</p>
        <p className="parasme-description">
          We offer software product automating IT infrastructure administration procedures. Our solution reduces manual intervention in complex repeatable processes with reliable and predictable deliveries, consistently meeting the evolving demands of modern businesses.
        </p>
        <a href="https://cal.com/parasme/30min?date=2024-07-12&month=2024-07" className="parasme-button">Book A Demo</a>
      </div>
      <div className="parasme-image">
        <img src={fogo} alt="Parasme Illustration" />
      </div>

      <style jsx>{`
        .parasme-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #fff9f6;
          padding: 5rem 2rem;
          margin-top: 80px;
          margin-bottom: 90px;
          color: #333;
        }

        .parasme-content {
          max-width: 50%;
          text-align: left;
          padding-left: 5rem;
        }

        .parasme-title {
          font-size: 3rem;
          color: #ff5722;
          margin-bottom: 0.5rem;
        }

        .parasme-subtitle {
          font-size: 1.8rem;
          color: #333;
          margin-bottom: 1rem;
          font-weight: bold;
        }

        .parasme-description {
          font-size: 1rem;
          color: black;
          margin-bottom: 2rem;
          max-width: 25rem;
          line-height: 1.6;
        }

        .parasme-button {
          background-color: #ff5722;
          color: white;
          padding: 1rem 2rem;
          border-radius: 5px;
          text-decoration: none;
          font-size: 1rem;
          transition: background-color 0.3s ease;
        }

        .parasme-button:hover {
          background-color: #e64a19;
        }

        .parasme-image {
          max-width: 40%;
        }

        .parasme-image img {
          width: 100%;
          border-radius: 10px;
        }

        @media (max-width: 768px) {
          .parasme-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 2rem;
          }

          .parasme-content {
            max-width: 100%;
            padding-left: 0;
          }

          .parasme-title {
            font-size: 2.5rem;
          }

          .parasme-subtitle {
            font-size: 1.5rem;
          }

          .parasme-description {
            font-size: 1rem;
            max-width: 100%;
          }

          .parasme-image {
            max-width: 100%;
            margin-top: 2rem;
          }

            .parasme-button {
          background-color: #ff5722;
      color: white;
      padding: 1rem 7rem;
      border-radius: 5px;
      text-decoration: none;
      font-size: 1rem;
        }
        }
      `}</style>
    </div>

<div className="responsive-container">
      <div className="responsive-content">
        <h2 className="responsive-title">What we do?</h2>
        <p className="responsive-text">
          Automate any administration procedure, no matter how complex. Our software is platform-independent with in-built functionality to fix known issues during execution, ensuring quality deliveries consistently.
        </p>
        <Link
          className="responsive-link"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleScrollToContact}>Get in touch with us
          <span style={{ marginLeft: '5px',transition: 'transform 0.3s ease',display: 'inline-block',transform: isHovered ? 'translateX(5px)' : 'translateX(0)',fontSize: '1.9rem',}}>→
          </span>
        </Link>
      </div>

      <style jsx>{`
        .responsive-container {
          display: grid;
          grid-template-columns: 1.2fr 1.8fr;
          grid-gap: 20px;
          padding: 40px 20px;
          align-items: start;
          font-size: 2.5rem;
          margin-bottom: 90px;
        }

        .responsive-content {
          text-align: left;
          margin-left: 100px;
        }

        .responsive-title {
          font-size: 36px;
          color: #333;
          margin-bottom: 20px;
        }

        .responsive-text {
          font-size: 18px;
          color: #666;
          max-width: 400px;
        }

        .responsive-link {
          font-size: 18px;
          color: #FF6347;
          text-decoration: none;
          margin-top: 20px;
          display: inline-flex;
          align-items: center;
          transition: color 0.3s ease;
        }

        @media (max-width: 768px) {
          .responsive-container {
            grid-template-columns: 1fr;
            margin-left: 0;
            font-size: 1.5rem;
          }

          .responsive-content {
            margin-left: 0;
            text-align: center;
          }

          .responsive-title {
            font-size: 28px;
          }

          .responsive-text {
            font-size: 16px;
            max-width: 100%;
            margin: 0 auto;
          }

          .responsive-link {
            font-size: 16px;
          }
        }
      `}</style>
    

    <div className="services-container">
      <div className="service-item database">
        <div className="service-icon">
          <img src={data} alt="Database" />
        </div>
        <h3 className="service-title">Database</h3>
        <p className="service-description">
          Repetitive operations of provisioning, availability, & security compliance.
        </p>
      </div>

      <div className="service-item middleware">
        <div className="service-icon">
          <img src={midd} alt="Middleware" />
        </div>
        <h3 className="service-title">Middleware</h3>
        <p className="service-description">
          Provisioning, patching, user account management, security compliance & auditing.
        </p>
      </div>

      <div className="service-item server">
        <div className="service-icon">
          <img src={ser} alt="Server" />
        </div>
        <h3 className="service-title">Server</h3>
        <p className="service-description">
          Backup & Restore, Patching, Provisioning, Log management & Analysis, User Account management, Security Compliance & Auditing.
        </p>
      </div>

      <style jsx>{`
        .services-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          grid-gap: 10px;
          justify-items: start;
        }

        .service-item {
          text-align: left;
          width: 250px;
          margin-left: 30px;
        }

        .service-icon img {
          width: 60px;
          height: 60px;
          margin-bottom: 20px;
        }

        .service-title {
          font-size: 2rem;
          color: #333;
          margin-top: 0;
          margin-bottom: 0;
          font-weight: 600;
          line-height: 1.2;
        }

        .service-description {
          font-size: 16px;
          color: #666;
        }

        .middleware {
          grid-column: 2;
          grid-row: 1;
        }

        .server {
          grid-column: 1;
          grid-row: 2;
        }

        .database {
          grid-column: 1;
          grid-row: 1;
        }

        @media (max-width: 768px) {
          .services-container {
            grid-template-columns: 1fr;
          }

          .service-item {
            margin-left: 0;
            justify-self: center;
            width: 100%;
            
          }

           .database {
        grid-column: 1;
          grid-row: 1;
      }

      .middleware {
          grid-column: 1;
          grid-row: 2;
      }

      .server {
      
          grid-column: 1;
          grid-row: 3;
      }
        }
      `}</style>  
</div>
</div>

<div className="why-parasme-section">
      <h2 className="why-parasme-title">Why Parasme?</h2>
      <p className="why-parasme-subtitle">Automation for Reliable, Time and Cost</p>
      <p className="why-parasme-subtitle">effective IT administration</p>

      <div className="why-parasme-feature-row">
        <div className="why-parasme-feature-card">
          <div className="feature-icon">
            <img src={platf} alt="Platform Independent" />
          </div>
          <h3 className="feature-title">Platform Independent</h3>
          <p className="feature-description">
            Our product is compatible with major platforms i.e Linux, AIX, Solaris & Windows.
          </p>
        </div>

        <div className="why-parasme-feature-card">
          <div className="feature-icon">
            <img src={auto} alt="Auto Fixing" />
          </div>
          <h3 className="feature-title">Auto Fixing</h3>
          <p className="feature-description">
            Software contains the functionality to fix all the known issues automatically during the execution of the operation.
          </p>
        </div>

        <div className="why-parasme-feature-card">
          <div className="feature-icon">
            <img src={repo} alt="Reporting" />
          </div>
          <h3 className="feature-title">Reporting</h3>
          <p className="feature-description">
            Dashboard provides the report of the execution at every stage of the operation.
          </p>
        </div>
      </div>

      <div className="why-parasme-feature-row">
        <div className="why-parasme-feature-card">
          <div className="feature-icon">
            <img src={agen} alt="Agentless Architecture" />
          </div>
          <h3 className="feature-title">Agentless Architecture</h3>
          <p className="feature-description">
            The architecture of the software includes open-source components without any agent running on the target hosts.
          </p>
        </div>

        <div className="why-parasme-feature-card">
          <div className="feature-icon">
            <img src={lear} alt="Learn, Build & Deploy" />
          </div>
          <h3 className="feature-title">Learn, Build & Deploy</h3>
          <p className="feature-description">
            Continuous learning is being used to enhance software reliability and deployability.
          </p>
        </div>

        <div className="why-parasme-feature-card">
          <div className="feature-icon">
            <img src={ons} alt="On-Site Support" />
          </div>
          <h3 className="feature-title">On-Site Support</h3>
          <p className="feature-description">
            On-site support for critical & complex automations apart from non-critical support through remote operation.
          </p>
        </div>
      </div>

      <div className="why-parasme-feature-row why-parasme-feature-row-center" >
        <div className="why-parasme-feature-card" >
          <div className="feature-icon">
            <img src={int} alt="Integration" />
          </div>
          <h3 className="feature-title">Integration</h3>
          <p className="feature-description">
            Mandatory regulatory compliance software are integrated.
          </p>
        </div>
      </div>

      <style jsx>{`
        .why-parasme-section {
          text-align: center;
          background-color: #fff9f6;
          padding: 60px 20px;
          margin-bottom: 40px;
        }

        .why-parasme-title {
          font-size: 3rem;
          color: #fa5c21;
          font-weight: normal;
          font-family: 'Poppins, sans-serif';
        }

        .why-parasme-subtitle {
          font-size: 1.5rem;
          color: #fa5c21;
          margin: 0;
          line-height: 1;
          font-weight: 400;
        }

        .why-parasme-feature-row {
          display: flex;
          justify-content: space-between;
          gap: 25px;
          margin-top: 30px;
          padding: 0 100px;
        }

        .why-parasme-feature-row-center {
          justify-content: center;
        }

        .why-parasme-feature-card {
          background-color: white;
          width: 29.5%;
          padding: 3rem 1rem;
          text-align: center;
        }

        .feature-icon img {
          width: 50px;
          height: auto;
          margin-bottom: 1rem;
        }

        .feature-title {
          font-size: 1.25rem;
          color: black;
          font-weight: 550;
          line-height: 1.5;
        }

        .feature-description {
          font-size: 18px;
          color: #666;
          margin: 0;
          font-family: 'Poppins, sans-serif';
        }

        @media (max-width: 768px) {
          .why-parasme-feature-row {
            flex-direction: column;
            padding: 0 20px;
          }

          .why-parasme-feature-card {
            width: 95%;
          }

          .why-parasme-title {
            font-size: 2.5rem;
          }

          .why-parasme-subtitle {
            font-size: 1.3rem;
          }
        }
      `}</style>
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
  <style jsx>{`
  @media (max-width: 768px) {
  .section_about-process {
    padding: 1rem;
  }

  .text-align-center {
    font-size: 2rem;
    padding: 0 1rem;
  }

  .w-layout-grid.process_component {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }

  .process_item {
    max-width: 100%;
    text-align: left;
  }

  .process_circle {
    margin-right: 0.5rem;
  }

  .process_connector-wrapper {
    justify-content: start;
  }

  .process_connector-line {
    width: 80%;
  }

  .heading-style-h5 {
    font-size: 1.25rem;
    font-weight: bold;
  }

  .process_description {
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
}
 `}</style>
</div>

<div style={{ paddingTop: '0', paddingLeft: '0', paddingRight: '0', fontFamily: 'Arial, sans-serif', margin: '0', padding: '0', overflowX: 'hidden', marginBottom: '50px' }}>
<div className="faq-section-container mobile-faq-section" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', marginBottom: '76px' }}>
  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <div className="faq-grid mobile-faq-grid" style={{ gridAutoColumns: '1fr', gridColumnGap: '4rem', gridRowGap: '2rem', gridTemplateRows: 'auto', gridTemplateColumns: '.5fr 1fr', gridAutoFlow: 'row', display: 'grid' }}>
      <div style={{ flexDirection: 'column' }}>
        <h2 className="faq-header mobile-faq-header" style={{ color: 'orangered', fontSize: '2rem', fontWeight: '600', lineHeight: '1.2', marginTop: '0' }}>Frequently Asked Questions</h2>
        <div style={{ paddingTop: '0', paddingLeft: '0', paddingRight: '0', paddingBottom: '0.25rem', marginTop: '-0.90rem' }}></div>
        <Link className="faq-link" style={{ borderBottom: '1px solid blue', color: 'black', fontWeight: '600', textDecoration: 'none' }} onClick={handleScrollToContact}>Contact us for more info
        </Link>
      </div>
      <div style={{ marginTop: '-2rem' }}>
        {faqs.map((faq, index) => (
          <div key={index} onClick={() => toggleFAQ(index)} className="faq-item" style={{ cursor: 'pointer', backgroundColor: '#fff', borderBottom: '2px solid #ececf1', padding: '1rem 0', transition: 'background-color 0.3s' }}>
            <div style={{ display: 'flex' }}>
              <div className="faq-item-number mobile-faq-item-number" style={{ justifyContent: 'flex-start', alignItems: 'center', width: '2rem', marginRight: '3rem', display: 'flex' }}>
                <div style={{ color: '#fa5c22', fontSize: '1.5rem', fontWeight: '600' }}>
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
              </div>
              <div style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%', display: 'flex' }}>
                <h3 className="faq-question mobile-faq-question" style={{ fontSize: '1.5rem', fontWeight: '500', lineHeight: '1.4' }}>{faq.question}</h3>
                <div className="faq-toggle-icon mobile-faq-toggle-icon" style={{ flex: 'none', justifyContent: 'center', alignItems: 'center', width: '3rem', height: '3rem', marginLeft: '2rem', display: 'flex', transition: 'background-color 0.3s' }}>
                  <div style={{ fontSize: '2rem', color: '#282938b3', marginLeft: '0.5rem', transition: 'transform 0.3s ease', transformOrigin: 'center', transform: openFAQs[index] ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                    {openFAQs[index] ? '×' : '+'}
                  </div>
                </div>
              </div>
            </div>
            {openFAQs[index] && (
              <div className="faq-answer mobile-faq-answer" style={{ maxWidth: '40rem', overflow: 'hidden', marginTop: '-1.90rem' }}>
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
<style jsx>{`
  @media (max-width: 768px) {
   .mobile-faq-section {
    padding: 1rem;
  }

  .mobile-faq-header {
    font-size: 1.5rem !important;
    
  }

  .mobile-faq-item-number {
    font-size: 1.2rem !important;
    margin-right: 1rem !important;
    color: #fa5c22 !important;
  }

  .mobile-faq-question {
    font-size: 1.2rem !important;
  }

  .mobile-faq-toggle-icon {
    width: 2rem !important;
    height: 2rem !important;
  }

  .mobile-faq-answer {
    font-size: 1rem !important;
    margin-left: -2rem !important;
    line-height: 1.4 !important;
  }

  .mobile-faq-grid {
    grid-template-columns: 1fr !important;
    gap: 1rem !important;
  }

  .faq-link {
      font-size: 1rem !important;
      line-height: 6 !important;
      border-bottom: 2px solid blue !important;  
      padding-bottom: 1px !important;
       margin-top: -19px !important;  
      text-decoration: none !important;
  }
}
 `}</style>


  
<div ref={AboutRef} className="about-container">
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
     animation: slide 20s linear infinite;
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
    </div>

<div ref={contactRef} style={{ backgroundColor: '#fff9f6', padding: '92px 5% 0px 5%', position: 'relative', marginBottom: "90px" }}>
  <div style={{ width: '100%', maxWidth: '1140px', marginLeft: 'auto', marginRight: 'auto', position: 'relative' }}>
    <div className="contact-grid" style={{ display: 'grid', gridRowGap: '90px', gridColumnGap: '90px', gridTemplateRows: 'auto', gridTemplateColumns: '.75fr 1fr', alignItems: 'start' }}>
      <div>
        <div style={{ marginBottom: '48px' }}>
          <div style={{ marginBottom: '16px' }}>
            <h1 style={{ color: 'orangered', letterSpacing: '-.02em', marginTop: '0', marginBottom: '0', fontSize: '48px', lineHeight: '1.2' }}>Contact Us</h1>
          </div>
          <p style={{ letterSpacing: '-.02em', marginBottom: '0', fontSize: '20px', lineHeight: '32px', color: '#666' }}>Please share your details and we will reach out!</p>
        </div>
        <div style={{ margin: '0 0 15px' }}>
        <form id="wf-form-Contact-Form-3" name="wf-form-Contact-Form-3" method="get" style={{ display: 'flex', flexDirection: 'column' }}
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
                }
              }, 2000);
            }}>
            <div style={{ marginBottom: '0px' }}>
              <label htmlFor="Contact-Name-Field-02" style={{ color: 'black', letterSpacing: '-.01em', marginBottom: '8px', fontSize: '14px', fontWeight: '400', lineHeight: '24px' }}>Name</label>
              <input style={{ borderRadius: '8px', padding: '11px 16px', transition: 'all .2s', color: '#333', backgroundColor: '#fff', border: '1px solid #ccc', width: '92%', height: '24px', marginBottom: '19px', marginTop: '10px', fontSize: '14px', lineHeight: '1.42857', display: 'block' }} type="text" id="Contact-Name-Field-02" required />
            </div>
            <div style={{ marginBottom: '0px' }}>
              <label htmlFor="Contact-Email-Field-02" style={{ color: 'black', letterSpacing: '-.01em', marginBottom: '8px', fontSize: '14px', fontWeight: '400', lineHeight: '24px' }}>Email Address</label>
              <input className="f-field-input w-input" style={{ borderRadius: '8px', padding: '11px 16px', transition: 'all .2s', color: '#333', backgroundColor: '#fff', border: '1px solid #ccc', width: '92%', height: '24px', marginBottom: '19px', marginTop: '10px', fontSize: '14px', lineHeight: '1.42857', display: 'block' }} type="email" id="Contact-Email-Field-02" required />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label htmlFor="Contact-Message-Field-02" style={{ color: 'black', letterSpacing: '-.01em', marginBottom: '8px', fontSize: '14px', fontWeight: '400', lineHeight: '24px' }}>Message</label>
              <textarea id="Contact-Message-Field-02" name="Contact-Message-Field-02" style={{ border: '1px solid #ccc', color: '#333', backgroundColor: '#fff', borderRadius: '8px', minHeight: '90px', marginBottom: '2px', padding: '16px', fontSize: '14px', lineHeight: '24px', width: '92%', height: 'auto', display: 'block', marginTop: '10px', transition: 'all 0.2s' }} required />
            </div>
            <input type="submit" value="Submit" style={{ backgroundColor: 'orangered', color: 'white', textAlign: 'center', letterSpacing: '-.02em', borderRadius: '50px', justifyContent: 'center', alignItems: 'center', minHeight: '48px', padding: '12px 24px', fontSize: '14px', fontWeight: '500', textDecoration: 'none', transition: 'background-color .3s', display: 'block', cursor: 'pointer', lineHeight: 'inherit', border: '0', }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'black';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'orangered';
              }} />
          </form>
          <div id="form-success-message" style={{ textAlign: 'center', backgroundColor: '#ddd', padding: '20px', display: 'none' }}>
            Thank you! Your submission has been received!
          </div>
          <div id="form-error-message" style={{ backgroundColor: '#ffdede', marginTop: '10px', padding: '10px', display: 'none', color: 'black', borderRadius: '8px', textAlign: 'center' }}>Oops! Something went wrong while submitting the form.
          </div>
        </div>
      </div>
      <div className="mobile-contact-image-section" style={{ maxWidth: '550px', height: '100%' }}>
        <img src={contact} alt="Contact us" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
      </div>
    </div>
  </div>
  <style jsx>{`
 @media (max-width: 768px) {
     .contact-grid {
        grid-template-columns: 1fr !important; 
      }
   .contact-grid   h1 {
        font-size: 32px; 
      }
  .contact-grid    p {
        font-size: 16px;
      }
      input[type="text"], input[type="email"], textarea {
        width: 100%; 
      }
      input[type="submit"] {
        width: 100%; 
      }
      
      .mobile-contact-image-section {
      max-width: 100%; 
      height: auto; 
      margin: 0 auto; 
    }
    .mobile-contact-image-section img {
      object-fit: cover; 
      width: 100%; 
      height: auto; 
    }
      
  }
 `}</style>
</div>

<div  style={{ backgroundColor: 'white', padding: '4rem', margin: '0' }}>
        <footer style={{ backgroundColor: 'white', margin: '0', padding: '0' }}>
          <div style={{ paddingBottom: '0rem', fontSize: '1rem', padding: '0', paddingTop: '0', paddingLeft: '0', paddingRight: '0' }}>
            <div style={{ backgroundColor: 'white', paddingTop: '0px', paddingBottom: '0px' }}>
              <div style={{ maxWidth: '1352px', paddingLeft: '24px', paddingRight: '24px' }}>
                <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div className="footer-logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: '350px', gridRowGap: '32px' }}>
                    <a href="/" style={{ height: '60px', display: 'inline-block', textDecoration: 'none' }}>
                      <img src={logo} alt="" style={{ height: '100%' }} />
                      <div style={{ fontWeight: 700, fontSize: '1.0rem', color: 'black' }}>Parasme IT Solutions Pvt. Ltd.</div>
                      <div style={{ fontWeight: 400, fontSize: '1.0rem', color: 'black' }}>Regd Off: Bengaluru</div>
                      <div style={{ fontWeight: 400, fontSize: '1.0rem', color: 'black' }}>Karnataka, INDIA</div></a></div>

            <div className="footer-links" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', gridColumnGap: '120px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gridRowGap: '24px' }}>
                <div style={{ fontSize: '18px', fontWeight: 700, lineHeight: '130%',marginTop:"2px" }}>About Us</div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gridRowGap: '16px' }}>
                  <a href="#about-us" style={{ textDecoration: 'none', color: "#333", fontSize: "17px", fontWeight: "450" }} onClick={ScrollToContact}>Our Team</a>
                  <a href="#contact-us" style={{ textDecoration: 'none', color: "#333", fontSize: "17px", fontWeight: "450" }} onClick={handleScrollToContact}>Contact Us</a>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gridRowGap: '24px' }}>
                <div style={{ fontSize: '18px', fontWeight: 700, lineHeight: '130%' }}>Product</div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gridRowGap: '16px' }}>
                  <Link to="/products/database" style={{ textDecoration: 'none', color: "#333", fontSize: "17px", fontWeight: "450" }}>Database</Link>
                  <Link to="/products/middleware" style={{ textDecoration: 'none', color: "#333", fontSize: "17px", fontWeight: "450" }}>Middleware</Link>
                  <Link to="/products/server" style={{ textDecoration: 'none', color: "#333", fontSize: "17px", fontWeight: "450" }}>Server</Link>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gridRowGap: '24px' }}>
                <div style={{ fontSize: '18px', fontWeight: 700, lineHeight: '130%' }}>Solutions</div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gridRowGap: '16px' }}>
                  <Link to="/solutions/automation" style={{ textDecoration: 'none', color: "#333", fontSize: "17px", fontWeight: "450" }}>Automation</Link>
                  <Link to="/solutions/solution-engineering" style={{ textDecoration: 'none', color: "#333", fontSize: "17px", fontWeight: "450" }}>Solution Engineering</Link>
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: '#13131333', width: '110%', height: '1px', marginTop: '64px', marginBottom: '32px', marginLeft: '-5%', marginRight: '-5%' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '14px', lineHeight: '130%', fontWeight: 600 }}>Copyright @ Parasme IT Solutions Pvt. Ltd. 2024</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <style jsx>{`
    @media (max-width: 768px) {
       .footer-content {
            flex-direction: column;
            align-items: center;
          }
          .footer-logo {
            margin-bottom: 90px;
          }
          .footer-links {
            display: flex;
            justify-content: space-between;
            width: 100%;
            flex-wrap: wrap;
          }
          .footer-links > div {
            flex: 1 1 100%; 
            margin-bottom: 16px;
          }
    }
  `}</style>
</div>  
    </div>
  );
}

export default Home;
