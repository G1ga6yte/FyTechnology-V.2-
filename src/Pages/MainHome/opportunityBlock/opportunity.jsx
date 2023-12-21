import React from "react";
import "./opportunity.scss";
import {ImgData} from "../../../source/img/imgData";
import {Link} from "react-router-dom";
import LinkButton from "../../../source/GlobalFiles/linkButton";

function Opportunity() {
  return (<div className="Opportunity G-paddingRL-100">
    <p className="header G-Block-Header">What we can do</p>
    
    <div className="opportunityCont G-flex-between G-alignItems-center">
      <div className="servicesBlock G-flex-column">
        <p className="serviceItem G-fzNormal G-transition03">Software development</p>
        <p className="serviceItem G-fzNormal G-transition03">IT infrastructure</p>
        <p className="serviceItem G-fzNormal G-transition03">IT consulting and strategy</p>
        <p className="serviceItem G-fzNormal G-transition03">IT maintenance and support</p>
        <p className="serviceItem G-fzNormal G-transition03">Advanced services</p>
        <p className="serviceItem G-fzNormal G-transition03">Big Data and Analytics</p>
        <p className="serviceItem G-fzNormal G-transition03">Integration of new technologies</p>
        <p className="serviceItem G-fzNormal G-transition03">Full-service accounting services</p>
        <p className="serviceItem G-fzNormal G-transition03">Software Testing and Quality Assurance</p>
        <p className="serviceItem G-fzNormal G-transition03">Common IT design services include</p>
        <p className="serviceItem G-fzNormal G-transition03">Contract drafting and review</p>
        <p className="serviceItem G-fzNormal G-transition03">Legal research and writing</p>
        <p className="serviceItem G-fzNormal G-transition03">Preparing legal memoranda and opinions</p>
        <p className="serviceItem G-fzNormal G-transition03">Corporate Governance and Advice</p>
        <p className="serviceItem G-fzNormal G-transition03">Employment law and HR services</p>
      </div>
      
      <img className="logo" src={ImgData.bigLogoGray} alt=""/>
      
      <div className="includingBlock G-flex-column">
        <p className="textHeader G-fzNormal">Including services</p>
        
        <span className="includingServices G-fzNormal">Application development</span>
        <span className="includingServices G-fzNormal">Web development</span>
        <span className="includingServices G-fzNormal">Mobile app development</span>
        <span className="includingServices G-fzNormal">Custom software development</span>
        <span className="includingServices G-fzNormal">Legacy system modernization</span>
        <span className="includingServices G-fzNormal">DevOps and cloud migration</span>
        <span className="includingServices G-fzNormal">VR/AR developing</span>
        
        <span className="skill G-skill-inBlock marginTop">App development</span>
        <span className="skill G-skill-inBlock">Web development </span>
        <span className="skill G-skill-inBlock">Software development</span>
        
        <Link className="findOutMoreLink"><LinkButton Text={"Find out more"}/></Link>

      </div>
    
    </div>
  </div>);
}

export default Opportunity;