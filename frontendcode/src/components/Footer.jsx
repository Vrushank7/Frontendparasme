import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/parasmelogo.jpg'; 

function Footer() {
    return (
      <div style={{ backgroundColor: 'white', padding: '4rem', margin: '0' }}>
      <footer style={{ backgroundColor: 'white', margin: '0', padding: '0' }}>
        <div style={{ paddingBottom: '0rem', fontSize: '1rem', padding: '0' }}>
          <div style={{ backgroundColor: 'white', paddingTop: '0px', paddingBottom: '0px' }}>
            <div style={{ maxWidth: '1352px', paddingLeft: '24px', paddingRight: '24px' }}>
              <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className="footer-logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: '350px', gridRowGap: '32px' }}>
                  <a href="/" style={{ height: '60px', display: 'inline-block', textDecoration: 'none' }}>
                    <img src={logo} alt="" style={{ height: '100%' }} />
                    <div style={{ fontWeight: 700, fontSize: '1.0rem', color: 'black' }}>Parasme IT Solutions Pvt. Ltd.</div>
                    <div style={{ fontWeight: 400, fontSize: '1.0rem', color: 'black' }}>Regd Off: Bengaluru</div>
                    <div style={{ fontWeight: 400, fontSize: '1.0rem', color: 'black' }}>Karnataka, INDIA</div>
                  </a>
                </div>
    
                <div className="footer-links" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', gridColumnGap: '120px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gridRowGap: '24px' }}>
                    <div style={{ fontSize: '18px', fontWeight: 700, lineHeight: '130%',marginTop:"2px" }}>About Us</div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gridRowGap: '16px' }}>
                      <a href="#about-us" style={{ textDecoration: 'none', color: "#333", fontSize: "17px", fontWeight: "450" }} >Our Team</a>
                      <a href="#contact-us" style={{ textDecoration: 'none', color: "#333", fontSize: "17px", fontWeight: "450" }}>Contact Us</a>
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
);
}

export default Footer;