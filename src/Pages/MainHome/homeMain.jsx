import React from "react";
import HeaderBlock from "./headerBlock/headerBlock";
import "./homeMain.scss"
import Opportunity from "./opportunityBlock/opportunity";
import FeaturedBlock from "./featuredworkBlock/featuredBlock";

function HomeMain (){
  return(
     <div className="homeMain">
       <HeaderBlock/>
       <Opportunity/>
       <FeaturedBlock/>
     </div>
  )
}

export default HomeMain