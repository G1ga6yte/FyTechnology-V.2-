import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {svgData} from "../../source/svg/svgData";
import "./navigation.scss"
import LinkButton from "../../source/GlobalFiles/linkButton";
import MenuBarLink from "./MenuBarLink";

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
  const [menuBar, setMenuBar]= useState(false)
  function handleMenuBar (){
    setMenuBar(prev => !prev)
  }
  
  
  
  return(
     <div className={`navigationBlock G-flex-between G-alignItems-center G-transition03 ${fixed ? "scrolled" : " "}`}>
       {/*style={{padding: navStyle.padding, backgroundColor: navStyle.background}}*/}
       <div className="Links ">
         <Link className="Link link-img" to="/home"><img className="img" src={svgData.miniLogo} alt=""/></Link>
         {/*<Link className="nav-link G-Link-Hover" to="/home"><span className="nav-span G-transition05">hello@fytechnology.com</span></Link>*/}
         {/*<Link className="Link G-Link-Hover G-transition03" to="/home">About us</Link>*/}
         {/*<Link className="Link G-Link-Hover G-transition03" to="/home">Services</Link>*/}
         {/*<Link className="Link G-Link-Hover G-transition03" to="/home">Projects</Link>*/}
       </div>
       
       <div className="Nav-buttons">
         <div className={`MenuBarCont ${menuBar ? "activeBar" : " "}`}>
            <div className="MenuBar">
              <div onClick={handleMenuBar} className="Hicon">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              
              <div className="linkBlock">
                
                <MenuBarLink link={"/home"} name={"About us"}/>
                <MenuBarLink link={"/home"} name={"About us"}/>
                <MenuBarLink link={"/home"} name={"About us"}/>

              </div>
              
            </div>
         </div>
         <Link className="nav-button" to="/home"><LinkButton Text={"Contact us"}/></Link>
       </div>
     </div>
  )
}
export default Navigation