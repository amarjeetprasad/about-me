import React from "react";
import Banner from "./banner/banner";
import Header from "./header/header";
import About from "./about/about";
import Services from "./services/services";
import Work from "./work/work";
import Contact from "./contact/contact";
import Copyright from "./copyright/copyright"
function App() {
  return (
    <div>
    <Header/>
     <Banner/>
     <About/>
     <Services/>
     <Work/>
     <Contact/>
     <Copyright/>
    </div>
  );
}

export default App;
