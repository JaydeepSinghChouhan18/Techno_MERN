import React from "react";
import Hero from "../../Component/Hero/Hero";
import Services from "../Services/Services";
import Work from "../Work/Work";
import Blog from "../Blog/Blog";
import Review from "../Review/Review";
 

const Home = () => {
  return (
    <div>
      <Hero /> 
      <Services/>
      <Work/>
      <Blog/> 
      <Review/>
    </div>
  );
};

export default Home;
