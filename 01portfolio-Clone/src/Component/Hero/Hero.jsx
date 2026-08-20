import React from "react";
import "./Hero.css";
import "../../App.css";

const Hero = () => {
  return (
    <> 
      <section id="hero" className="hero container "> 
        <div className="first-div">
          <p className="orange-text  p-14 font-style">AVAILABLE FOR WORK</p>
          <h1 className="p-72 font-style">
            Hi, I'm <span className="orange-text font-style">Jaydeep</span>
          </h1>
          <p className="bio-text p-20 font-style light-font ">
            Freelance <strong className="dark-font">UI/UX Designer & Frontend Developer</strong> . I design and build
            digital products that people love to use — fast, clean, and
            accessible
          </p>
          <div className="buttons">
            <button className="ViewMyWork">View my work </button>
            <button className="getInTouch">Get in touch</button>
          </div>

          <span className="divider"></span>

          <div className="experience">
            <div>
              <p className="p-30 bold"> 34+</p>
              <p className="p-12">Projects</p>
            </div>
            <div>
              <p className="p-30 bold">21+</p>
              <p className="p-12">Happy Clients</p>
            </div>
            <div>
              <p className="p-30 bold">5y</p>
              <p className="p-12">Experience</p>
            </div>
          </div>
        </div>

        <div className="second-div">
          <div className="Portfolio-img">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              alt="Portfolio-Image"
            />
          <div className="PhotoTag">Open to Projects</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
