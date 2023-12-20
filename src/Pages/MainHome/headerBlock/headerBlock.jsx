import React from "react";
import "./headerBlock.scss"
import {ImgData} from "../../../source/img/imgData";
import {Link} from "react-router-dom";


function HeaderBlock (){
  return(
     <div className="HeaderBlock">
       <div className="bckLines">
         <div className="lineBckBlock">
           <div className="line"></div>
           <div className="lightingBlock"></div>
         </div>
         <div className="lineBckBlock">
           <div className="line"></div>
           <div className="lightingBlock"></div>
         </div>
         <div className="lineBckBlock">
           <div className="line"></div>
           <div className="lightingBlock"></div>
         </div>
       </div>
       
       <div className="headerCont">
          <div className="header upHeader">Ultra-tech</div>
         <div className="imageBlock G-flex-center">
           <img className="header-img" src={ImgData.bigLogo} alt=""/>
         </div>
         <div className="header downHeader">Approach</div>
       </div>
       
       <div className="links-block G-flex-between">
         <Link className="Link G-Link-Hover G-transition03" to="/home">About us</Link>
         <Link className="Link G-Link-Hover G-transition03" to="/home">Services</Link>
         <Link className="Link G-Link-Hover G-transition03" to="/home">Projects</Link>
       </div>
     
     </div>
  )
}

export default HeaderBlock