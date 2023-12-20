import React from "react";
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
  
  return(
     <div className="navigationBlock G-flex-between G-alignItems-center G-transition03">
       {/*style={{padding: navStyle.padding, backgroundColor: navStyle.background}}*/}
       <Link className="nav-link G-Link-Hover" to="/home"><span className="nav-span G-transition05">hello@fytechnology.com</span></Link>
       <Link className="link-img" to="/home"><img className="img" src={svgData.miniLogo} alt=""/></Link>
       <Link className="nav-button" to="/home"><LinkButton/></Link>
     </div>
  )
}
export default Navigation