import React from "react";
import "./Services.css";
import "../../App.css";

const Services = () => {
  return (
    <>
      <section id="services" className="services "> 

        <div className=" container">  
          <p>WHAT I DO</p>
          <h2>Services</h2>

          <div className="div-cards">   
            <div >
            <div>💻</div> 
            <h3>UI/UX Design </h3>
            <p>From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first.</p>
          </div> 

          <div > 
             <div>🤖</div> 
            <h3>Frontend Dev</h3>
            <p>Production-grade code with Tailwind CSS and Alpine.js. Pixel-perfect, fully responsive, SEO-friendly and blazing fast — no bloat, no heavy frameworks.</p>
          </div>   

              <div >
             <div> 🌐</div> 
            <h3>Landing Pages </h3>
            <p>High-converting pages for SaaS, apps and personal brands. Designed to communicate value instantly and drive action from the first scroll.</p>
         </div>
        </div>   
        </div>

      </section>
    </>
  );
};

export default Services;
