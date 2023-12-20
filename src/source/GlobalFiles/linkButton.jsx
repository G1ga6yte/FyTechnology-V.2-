import React from "react";
import {svgData} from "../svg/svgData";

function LinkButton (){
  return(
     <div className="G-Link-Button G-flex-center G-alignItems-center G-transition03">
       <span className="link-button-text G-transition03">Contact us</span>
       <div className="button-arrow G-transition03"></div>
       <img className="arrow-img" src={svgData.arrowRight} alt=""/>
     </div>
  )
}
export default LinkButton