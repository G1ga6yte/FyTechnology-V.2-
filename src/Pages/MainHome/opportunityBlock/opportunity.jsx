import React, {useState} from "react";
import "./opportunity.scss";
import {ImgData} from "../../../source/img/imgData";
import {Link} from "react-router-dom";
import LinkButton from "../../../source/GlobalFiles/linkButton";
import {OpportunityData} from "./opportunityData";

function Opportunity() {
  const [active, setActive] = useState(OpportunityData[0])
  
  
  
  return (<div className="Opportunity G-paddingRL-100">
    <p className="header G-Block-Header">What we can do</p>
    
    <div className="opportunityCont G-flex-between G-alignItems-center">
      <div className="servicesBlock G-flex-column">
        {OpportunityData.map((el, index)=>{
          return(
             <p key={index} onClick={()=>{
               setActive(el)
             }} className={`serviceItem G-fzNormal G-transition03 ${active.name === el.name ? "active" : " "}`}>{el.name}</p>
          )
        })}
        
      </div>
      
      
      <div className="includingBlock G-flex-column">
        <p className="textHeader G-fzNormal">Including services</p>
        
        <div className="includingServicesBlock G-flex-column">
          {active.content.map((el, index)=>{
            return(
               <span key={index} className="includingServices G-fzNormal">{el}</span>
            )
          })}
        </div>
        
        <span className="skill G-skill-inBlock marginTop">App development</span>
        <span className="skill G-skill-inBlock">Web development </span>
        <span className="skill G-skill-inBlock">Software development</span>
        
        <Link className="findOutMoreLink"><LinkButton Text={"Find out more"}/></Link>

      </div>
    
    </div>
  </div>);
}

export default Opportunity;