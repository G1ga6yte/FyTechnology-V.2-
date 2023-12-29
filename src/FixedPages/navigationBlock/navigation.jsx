import React, {useState} from "react";
import {Link} from "react-router-dom";
import {svgData} from "../../source/svg/svgData";
import "./navigation.scss"
import LinkButton from "../../source/GlobalFiles/linkButton";

function Navigation (){
  // const [navStyle, setNavStyle] = useState({
  //   padding: "50px 100px",
  //   background: "transparent"
  // })
  // window.addEventListener('scroll', function(){
  //   if (this.scrollY >= 50){
  //     setNavStyle({
  //       padding: "10px 100px",
  //       background: "white"
  //     })
  //   } else {
  //     setNavStyle({
  //       padding: "50px 100px",
  //       background: "transparent"
  //     })
  //   }
  // })
  
  const [fixed, setFixed] = useState(false)
  window.addEventListener('scroll', function (){
    if(this.scrollY >=100){
      setFixed(true)
    }else{
      setFixed(false)
    }
  })
  
  return(
     <div className={`navigationBlock G-flex-between G-alignItems-center G-transition03 ${fixed ? "scrolled" : " "}`}>
       {/*style={{padding: navStyle.padding, backgroundColor: navStyle.background}}*/}
       <div className="Links ">
         <Link className="Link link-img" to="/home"><img className="img" src={svgData.miniLogo} alt=""/></Link>
         {/*<Link className="nav-link G-Link-Hover" to="/home"><span className="nav-span G-transition05">hello@fytechnology.com</span></Link>*/}
         <Link className="Link G-Link-Hover G-transition03" to="/home">About us</Link>
         <Link className="Link G-Link-Hover G-transition03" to="/home">Services</Link>
         <Link className="Link G-Link-Hover G-transition03" to="/home">Projects</Link>
       </div>
       
       <Link className="nav-button" to="/home"><LinkButton Text={"Contact us"}/></Link>
     </div>
  )
}
export default Navigation