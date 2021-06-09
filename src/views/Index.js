import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections

import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionReservation from "views/index-sections/SectionReservation.js";
import SectionMaps from "views/index-sections/SectionMaps";
import Cards from "views/index-sections/Cards";


function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
        <div className="main">
        <SectionDark />
            <SectionCarousel />         
            <Cards/>             
            <SectionReservation/> 
            <SectionMaps/>    
            <DemoFooter /> 
        </div>
    </>
  );
}

export default Index;