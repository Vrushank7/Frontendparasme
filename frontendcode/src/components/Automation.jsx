import React, { useState } from 'react';
import Footer from './Footer';
import avail from '../assets/availability.jpg';
import prot from '../assets/protection.jpg';
import trou from '../assets/trouble.jpg';
import datase from '../assets/datasec.jpg';
import prov from '../assets/provisio.jpg';

function Automation() {
  const [hover, setHover] = useState(false);
  return (
    <main className="custom-main" style={{ marginTop: "6rem", paddingTop: "6rem", backgroundColor: "#f3f5fb", backgroundImage: "linear-gradient(#fff2ec, #fff)" }}>
    <header style={{ paddingBottom: "0", paddingLeft: "0", paddingRight: "0" }}>
      <div style={{ paddingBottom: "0", paddingLeft: "0", paddingRight: "0" }}></div>
      <div style={{ marginBottom: "76px", paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>
        <div style={{ width: "100%", maxWidth: "48rem", marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ color: "black", textAlign: "center", fontFamily: "Poppins, sans-serif", fontSize: "1rem", fontStyle: "italic", fontWeight: "400", marginBottom: "-2rem" }}>
            <strong style={{ fontWeight: "500" }}>Browse Our Automation Packs</strong>
          </div>
          <div style={{ paddingBottom: ".5rem" }}></div>
          <h1 style={{ fontSize: "3rem", fontWeight: "600", lineHeight: "1.2", color: "orangered", textAlign: "center" }}>
            Grow With Industry Leading Automation
          </h1>
          <div style={{ paddingBottom: "0.50rem" }}></div>
          <div style={{ paddingBottom: "0.50rem" }}></div>
          <div style={{ width: "100%", maxWidth: "16rem", textAlign: "center" }}></div>
        </div>
      </div>
    </header>
    <section>
      <div style={{ padding: "0 5% 92px", position: "relative" }}>
        <div style={{ width: "100%", maxWidth: "1140px", marginLeft: "auto", marginRight: "auto", position: "relative" }}>   
          <div style={{ gridColumnGap: "16px", gridRowGap: "16px", border: "1px solid #f3f5fb", borderRadius: "12px", gridTemplateRows: "auto", gridTemplateColumns: "1.75fr .5fr 1.75fr .5fr 2fr", gridAutoColumns: "1fr", justifyContent: "center", alignItems: "center", padding: "40px 32px", display: "grid" }}>
            <div style={{ display: "grid", gridColumnGap: "16px", gridRowGap: "16px", placeItems: "center", gridTemplateRows: "auto auto", gridTemplateColumns: "1fr", gridAutoColumns: "1fr" }}>
              <div style={{ backgroundColor: "orangered", textAlign: "center", borderRadius: "8px", justifyContent: "center", alignItems: "center", width: "37px", height: "37px", marginBottom: "32px", padding: "16px", display: "flex" }}>
                <img src={avail} loading="lazy" width="40" alt="" />
              </div>
              <div style={{ marginBottom: "8px" }}>
                <div style={{ color: "black", textAlign: "center", fontSize: "24px", fontWeight: "700", lineHeight: "32px", letterSpacing: "-0.02em" }}>Availability</div>
              </div>
              <p style={{ textAlign: "center", fontSize: "14px", letterSpacing: "-0.01em", marginBottom: "-9px", lineHeight: "1.8", color: "#666" }}>Host monitoring<br />Database monitoring<br />Tablespace management<br />Partition management<br />Statistics gathering<br />Housekeeping</p>
            </div>
            <div style={{ backgroundColor: "#f3f5fb", width: "1px", height: "200px", marginLeft: "40px", marginRight: "40px" }}></div>
            <div style={{ display: "grid", gridColumnGap: "16px", gridRowGap: "16px", placeItems: "center" }}>
              <div style={{ backgroundColor: "orangered", textAlign: "center", borderRadius: "8px", justifyContent: "center", alignItems: "center", width: "37px", height: "37px", marginBottom: "32px", padding: "16px", display: "flex" }}>
                <img src={prot} loading="lazy" width="40" alt="" />
              </div>
              <div style={{ marginBottom: "8px" }}>
                <div style={{ color: "black", textAlign: "center", fontSize: "24px", fontWeight: "700", lineHeight: "32px", letterSpacing: "-0.02em" }}>Protection</div>
              </div>
              <p style={{ textAlign: "center", fontSize: "14px", letterSpacing: "-0.01em", lineHeight: "1.8", color: "#666" }}>Database Backup<br />Standby Database Syncing<br />Account Unlocking<br />Password Reset<br />Disaster Recovery Drill</p>
            </div>
            <div style={{ backgroundColor: "#f3f5fb", width: "1px", height: "200px", marginLeft: "40px", marginRight: "40px" }}></div>
            <div style={{ display: "grid", gridColumnGap: "16px", gridRowGap: "16px", textAlign: "center" }}>
              <div style={{ backgroundColor: "orangered", textAlign: "center", borderRadius: "8px", justifyContent: "center", alignItems: "center", width: "37px", height: "37px", marginBottom: "32px", padding: "16px", display: "flex", marginLeft: "110px" }}>
                <img src={datase} loading="lazy" width="40" alt="" />
              </div>
              <div style={{ marginBottom: "8px" }}>
                <div style={{ color: "black", textAlign: "center", fontSize: "24px", fontWeight: "700", lineHeight: "32px", letterSpacing: "-0.02em" }}>Data Security & License</div>
              </div>
              <p style={{ textAlign: "center", fontSize: "14px", lineHeight: "1.8", letterSpacing: "-0.01em", color: "#666" }}>Admin User Password Change<br />Keystore Password Change<br />License Audit<br />Transparent Data Encryption</p>
            </div>
          </div>
          <div style={{ gridColumnGap: "16px", gridRowGap: "16px", border: "1px solid #f3f5fb", borderRadius: "12px", gridTemplateRows: "auto", gridTemplateColumns: "1.75fr .5fr 1.75fr", gridAutoColumns: "1fr", justifyContent: "center", alignItems: "center", padding: "40px 32px", display: "grid" }}>   
            <div style={{ display: "grid", gridColumnGap: "16px", gridRowGap: "16px", placeItems: "center", gridTemplateRows: "auto auto", gridTemplateColumns: "1fr", gridAutoColumns: "1fr" }}>
              <div style={{ backgroundColor: "orangered", textAlign: "center", borderRadius: "8px", justifyContent: "center", alignItems: "center", width: "37px", height: "37px", marginBottom: "32px", padding: "16px", display: "flex" }}>
                <img src={prov} loading="lazy" width="40" alt="" />
              </div>
              <div style={{ marginBottom: "8px" }}>
                <div style={{ color: "black", textAlign: "center", fontSize: "24px", fontWeight: "700", lineHeight: "32px", letterSpacing: "-0.02em" }}>Provisioning</div>
              </div>
              <p style={{ textAlign: "center", fontSize: "14px", lineHeight: "1.8", marginBottom: "0", letterSpacing: "-0.01em", color: "#666" }}>RDBMS Installation<br />Database Provisioning<br />Quarterly CPU Patching<br />Database Upgrade<br />Database Refresh & Cloning<br />Custom SQL Execution</p>
            </div>
            <div style={{ backgroundColor: "#f3f5fb", width: "1px", height: "200px", marginLeft: "40px", marginRight: "40px" }}></div>  
            <div style={{ display: "grid", gridColumnGap: "16px", gridRowGap: "16px", placeItems: "center", gridTemplateRows: "auto", gridTemplateColumns: "1fr", gridAutoColumns: "1fr" }}>
              <div style={{ backgroundColor: "orangered", textAlign: "center", borderRadius: "8px", justifyContent: "center", alignItems: "center", width: "37px", height: "37px", marginBottom: "32px", padding: "16px", display: "flex" }}>
                <img src={trou} loading="lazy" width="40" alt="" />
              </div>
              <div style={{ marginBottom: "8px" }}>
                <div style={{ color: "black", textAlign: "center", fontSize: "24px", fontWeight: "700", lineHeight: "32px", letterSpacing: "-0.02em" }}>Troubleshooting</div>
              </div>
              <p style={{ textAlign: "center", fontSize: "14px", lineHeight: "1.8", letterSpacing: "-0.01em", color: "#666" }}>Incident Monitoring<br />Diagnose<br />Recommend<br />Implement<br />Review & Repeat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section style={{ padding: "4rem", marginBottom: "90px" }}>
      <div style={{ textAlign: "center", maxWidth: "48rem", margin: "auto" }}>
        <h2 style={{ fontSize: "3rem", color: "orangered", textAlign: "center" }}>
          Leveraging automation to increase business growth
        </h2>
        <p style={{ fontSize: "1.7rem", color: "orangered", textAlign: "center", marginTop: "-30px" }}>
          Automating the administration of databases, middleware, and servers will deliver higher uptime and enhanced security compliance for your business in the shortest time &amp; effort possible.
        </p>
        <div style={{ textAlign: "center", paddingTop: "1rem", fontSize: "3rem", color: "orangered" }}>
          <a href="https://cal.com/parasme/30min?date=2024-07-12&month=2024-07" style={{ backgroundColor: hover ? "#FFB380" : "orangered",
              color: "white",padding: "1rem 3rem",borderRadius: ".6rem",textDecoration: "none",fontWeight: "600",transition: "background-color 0.3s ease",}}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>Book A Demo</a>
        </div>
      </div>
    </section>
    <style>
        {`
         @media (max-width: 480px) {
        .custom-main {
    margin-top: 3rem;
    padding-top: 3rem;
    background-color: #f3f5fb;
    background-image: linear-gradient(#fff2ec, #fff);
  }
  .custom-main header {
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  }
  .custom-main header div {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
  .custom-main header h1 {
    font-size: 1.5rem;
    text-align: center;
  }
  .custom-main section > div {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
  }
  .custom-main section > div > div {
    margin-bottom: 30px;
  }
  .custom-main section > div > div img {
    width: 40px;
  }
  .custom-main section > div > div p {
    font-size: 10px;
    text-align: center;
  }
  .custom-main section a {
    display: inline-block;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    white-space: nowrap;
  }
  .custom-main section > div > div > div {
    grid-template-columns: 1fr !important;
        } }
        `}
      </style>
      <Footer />
  </main>
  );
}

export default Automation;
