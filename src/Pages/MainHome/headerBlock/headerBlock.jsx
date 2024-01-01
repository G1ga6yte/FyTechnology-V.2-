import React, {useState} from "react";
import "./headerBlock.scss";
import {Link} from "react-router-dom";


function HeaderBlock() {
  
  
  
  // const [navFixed, setNavFixed] = useState(false);
  // window.addEventListener("scroll", function () {
  //   if (this.scrollY >= 250) {
  //     setNavFixed(true);
  //   } else {
  //     setNavFixed(false);
  //   }
  // });
  
  return (
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
         <div className="header upHeader">Digital products</div>
         <div className="header downHeader">creatives &</div>
         <div className="header">Impressive</div>
         <p className="headerPrg">We use the latest technologies to create innovative and user-friendly solutions that meet the needs of our clients</p>
       </div>
       
       {/*<div className={`links-block G-flex-between ${navFixed ? "navFixed" : " "}`}>*/}
       {/*  <Link className="Link G-Link-Hover G-transition03" to="/home">About us</Link>*/}
       {/*  <Link className="Link G-Link-Hover G-transition03" to="/home">Services</Link>*/}
       {/*  <Link className="Link G-Link-Hover G-transition03" to="/home">Projects</Link>*/}
       {/*</div>*/}
     
     </div>
  );
}

export default HeaderBlock;