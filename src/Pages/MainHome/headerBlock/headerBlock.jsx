import React, {Suspense} from "react";
import "./headerBlock.scss"
import {ImgData} from "../../../source/img/imgData";
import {Link} from "react-router-dom";




function HeaderBlock (){
  const Spline = React.lazy(() => import('@splinetool/react-spline'));
  
  
  
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
         <div className="header downHeader">Approach</div>
         <p className="headerPrg">We use the latest technologies to create innovative and user-friendly solutions that meet the needs of our clients</p>
         <div className="imageBlock G-flex-center">
           <Suspense fallback={<div>Loading...</div>}>
           <Spline scene="https://prod.spline.design/gQOkQ2BEvut7DqqV/scene.splinecode"/>
           </Suspense>
         </div>
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