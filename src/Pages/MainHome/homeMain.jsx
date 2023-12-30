import React, {useState} from "react";
import HeaderBlock from "./headerBlock/headerBlock";
import "./homeMain.scss"
import Opportunity from "./opportunityBlock/opportunity";
import FeaturedBlock from "./featuredworkBlock/featuredBlock";
import Spline from "@splinetool/react-spline";

function HomeMain (){
  const [ballStyle, setBallStyle]=useState({
    top: "0",
    position: "fixed"
  })
  const [width, setWidth] = useState(1.5)
  const [left, setLeft] = useState(20)
  
  window.addEventListener('scroll', function (){
    console.log(this.scrollY);
    if (this.scrollY > 0 && this.scrollY <= 1200){
      let x =20- (20/1200)*(this.scrollY)
      let y = 1.5- (0.5/1200)*(this.scrollY)
      setLeft(x)
      setWidth(y)
    }
    if (this.scrollY > 1200 && this.scrollY <=2500){
      let x = (40/1300)*(this.scrollY-1200)
      setLeft(x)
      let y = 1+ (1/1300)*(this.scrollY-1200)
      setWidth(y)
    }
    
  })
  
  
  return(
     <div className="homeMain">
       <div style={{transform: `scale(${width})`,left: `${left}%`, top: ballStyle.top, position: ballStyle.position}}  className="imageBlock G-flex-center">
         <Spline scene="https://prod.spline.design/gQOkQ2BEvut7DqqV/scene.splinecode" />
       </div>
       
       <HeaderBlock/>
       <Opportunity/>
       <FeaturedBlock/>
     </div>
  )
}

export default HomeMain