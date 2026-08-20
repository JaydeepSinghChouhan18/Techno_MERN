import React from "react";
import "./Work.css";
import "../../App.css";
const Work = () => {
  return (
    <section id="work" className="main-portfolio-div">
      <div className="container">
        <div className="header-box">
          <p className="red-label">PORTFOLIO</p>
          <h1 className="main-heading">Selected work</h1>
          <a href="#" className="top-right-link">
            All projects →
          </a>
        </div>

        <div className="columns-wrapper">
          <div className="left-side-column">
            <div className="simple-card">
              <div className="gray-image-placeholder"></div>
              <div className="padded-content">
                <div className="tags">
                  <span className="orange-tag">SaaS</span>
                  <span className="gray-tag">Figma</span>
                  <span className="gray-tag">Tailwind</span>
                </div>
                <h2 className="project-title">Novu – SaaS Dashboard</h2>

                <p className="description-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi quis, odit nam aperiam fugiat optio libero. Nisi,
                  minus officiis eius odio tempora velit fugit at, id labore ut
                  libero reiciendis!
                </p>
                <p className="description-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  ducimus repudiandae eligendi veritatis dicta quo fuga fugiat
                  autem tempore perspiciatis illo doloremque est labore,
                  molestiae eius, voluptatum ex aut quibusdam.
                </p>
                <p className="description-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur neque ipsum eveniet eligendi dolores, dicta
                  beatae? Velit iusto nemo praesentium architecto, ipsa
                  excepturi quisquam, reprehenderit a cumque sapiente?
                  Laudantium!
                </p>

                <a href="#" className="bottom-link">
                  View case study →
                </a>
              </div>
            </div>
          </div>

          <div className="right-side-column">
            <div className="simple-card orange-border">
              <div className="gray-image-placeholder short-height"></div>
              <div className="padded-content"> 
              <div className="tags">
                <span className="orange-tag">Fintech</span>
                <span className="gray-tag">Landing page</span></div>
                <h2 className="project-title">Finlo – Fintech App</h2>
                <p className="description-paragraph">
                  Marketing site and onboarding flow for a personal finance app
                  targeting young professionals. Tailwind CSS + Alpine.js.
                </p>
                <a href="#" className="bottom-link">
                  View case study →
                </a>
              </div>
            </div>

            <div className="simple-card margin-top-box">
              <div className="pink-gradient-placeholder short-height"></div>
              <div className="padded-content"> 
              <div className="tags">
                <span className="orange-tag">Agency</span>
                <span className="gray-tag">Animation</span></div>
                <h2 className="project-title">Orea – Creative Agency</h2>
                <p className="description-paragraph">
                  Bold editorial site for a Paris-based branding studio.
                  Scroll-driven animations and custom cursor to match their
                  premium positioning.
                </p>
                <a href="#" className="bottom-link">
                  View case study →
                </a>
              </div>
            </div>
          </div>

          <div className="clear-both"></div>
        </div>
      </div>
    </section>
  );
};

export default Work;
