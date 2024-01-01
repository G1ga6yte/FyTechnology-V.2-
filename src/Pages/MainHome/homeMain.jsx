import React, {useState} from "react";
import HeaderBlock from "./headerBlock/headerBlock";
import "./homeMain.scss"
import Opportunity from "./opportunityBlock/opportunity";
import FeaturedBlock from "./featuredworkBlock/featuredBlock";
import Spline from "@splinetool/react-spline";
import QuestionPayBlock from "./QuestionPayBlock/questionPayBlock";

function HomeMain (){
  const [ballStyle, setBallStyle]=useState({
    top: "0",
    position: "fixed"
  })
  const [width, setWidth] = useState(1.5)
  const [left, setLeft] = useState(30)
  
  window.addEventListener('scroll', function (){
    console.log(this.scrollY);
    if (this.scrollY > 0 && this.scrollY <= 1200){
      let x =30- (30/1200)*(this.scrollY)
      let y = 1.5- (0.5/1200)*(this.scrollY)
      setLeft(x)
      setWidth(y)
    }
    if (this.scrollY > 1300 && this.scrollY <=1700){
      let x =1- (0.8/400)*(this.scrollY-1300)
      setWidth(x)
      let y = (500/400)*(this.scrollY-1300)
      setBallStyle({
        top: `${y}px`,
        position: "fixed"
      })
      // let x = (40/1300)*(this.scrollY-1200)
      // setLeft(x)
      // let y = 1+ (1/1300)*(this.scrollY-1200)
      // setWidth(y)
    }
    if (this.scrollY > 2000 && this.scrollY <=3500){
      let x = 0.2 + (1.3/1500)*(this.scrollY-2000)
      setWidth(x)
      let y = 500- (420/1500)*(this.scrollY-2000)
      setBallStyle({
        top: `${y}px`,
        position: "fixed"
      })
    }
    
    if (this.scrollY> 4100 && this.scrollY < 5100){
      let x = 1.5 + (0.5/1000)*(this.scrollY-4100)
      setWidth(x)
      let y = (100/1000)*(this.scrollY-4100)
      setLeft(y)
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
       <QuestionPayBlock/>
       {/*<div className="try">*/}
       {/*  /!*<Spline style={{position: "relative", zIndex: "9999"}} scene="https://prod.spline.design/hrAjmUuwmpLxZz8F/scene.splinecode" />*!/*/}
       
       
       {/*</div>*/}

     </div>
  )
}

export default HomeMain