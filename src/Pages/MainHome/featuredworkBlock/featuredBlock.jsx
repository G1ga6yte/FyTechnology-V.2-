import React, {useState} from "react";
import "./featuredWorkBlock.scss";
import FeatureComponent from "./featureComponent";
import {FeaturesData} from "./featuresData";

function FeaturedBlock() {
  const [left, setLeft] = useState("0")
  const [fixed, setFixed] = useState('relative')
  const [fLetter, setFLetter]= useState({
    translate: 'translateY(-100px)',
    opacity: "0"
  })
  const [sLetter, setSLetter] = useState({
    translate: 'translateY(100px)',
    opacity: "0"
  })
  const [tLetter, setTLetter]= useState({
    translate: 'translateY(-100px)',
    opacity: "0"
  })
  const [foLetter, setFoLetter] = useState({
    translate: 'translateY(100px)',
    opacity: "0"
  })
  window.addEventListener('scroll', function (){
    
    if (this.scrollY > 2000){
      setFixed('fixed')
    } else {
      setFixed('relative')
    }
    
    if (this.scrollY >= 3600){
      setLeft("-100%")
    }else{
      setLeft("0")
    }
    
    if (this.scrollY < 2000){
      setFLetter({
        translate: 'translateY(-100px)',
        opacity: "0"
      })
    }else if (this.scrollY >= 2000 && this.scrollY <= 2300){
        let x = (100/300)*(this.scrollY-2000)
        let y = 100-x
        let z = (1/300)*(this.scrollY-2000)
        
      setFLetter({
        translate: `translateY(-${y}px)`,
        opacity: `${z}`
      })
    } else {
      setFLetter({
        translate: 'translateY(0)',
        opacity: "1"
      })
    }
  
    if (this.scrollY < 2100){
      setSLetter({
        translate: 'translateY(100px)',
        opacity: "0"
      })
    }else if (this.scrollY >= 2100 && this.scrollY <= 2400){
      let x = (100/300)*(this.scrollY-2100)
      let y = 100-x
      let z = (1/300)*(this.scrollY-2100)
    
      setSLetter({
        translate: `translateY(${y}px)`,
        opacity: `${z}`
      })
    } else {
      setSLetter({
        translate: 'translateY(0)',
        opacity: "1"
      })
    }
  
    if (this.scrollY < 2200){
      setTLetter({
        translate: 'translateY(-100px)',
        opacity: "0"
      })
    }else if (this.scrollY >= 2200 && this.scrollY <= 2500){
      let x = (100/300)*(this.scrollY-2200)
      let y = 100-x
      let z = (1/300)*(this.scrollY-2200)
    
      setTLetter({
        translate: `translateY(-${y}px)`,
        opacity: `${z}`
      })
    } else {
      setTLetter({
        translate: 'translateY(0)',
        opacity: "1"
      })
    }
  
    if (this.scrollY < 2300){
      setFoLetter({
        translate: 'translateY(100px)',
        opacity: "0"
      })
    }else if (this.scrollY >= 2300 && this.scrollY <= 2600){
      let x = (100/300)*(this.scrollY-2300)
      let y = 100-x
      let z = (1/300)*(this.scrollY-2300)
    
      setFoLetter({
        translate: `translateY(${y}px)`,
        opacity: `${z}`
      })
    } else {
      setFoLetter({
        translate: 'translateY(0)',
        opacity: "1"
      })
    }
    
  })
  
  
  
  
  // window.addEventListener('scroll', function () {
  //   if (scrollY >= 2800) {
  //     setStyle1({
  //       width    : `800px`,
  //       transform: `0`,
  //       opacity  : `1`
  //     })
  //     if (this.scrollY >= 3500) {
  //       setStyle1({
  //         width    : `500px`,
  //         transform: `400`,
  //         opacity  : `0`
  //       })
  //     } else {
  //       setStyle1({
  //         width    : `800px`,
  //         transform: `0`,
  //         opacity  : `1`
  //       })
  //     }
  //   } else {
  //     setStyle1({
  //       width    : `500px`,
  //       transform: `0`,
  //       opacity  : `1`
  //     })
  //   }
  //
  //   if (scrollY >= 2800) {
  //     setStyle1({
  //       width    : `800px`,
  //       transform: `0`,
  //       opacity  : `1`
  //     })
  //     if (this.scrollY >= 3500) {
  //       setStyle1({
  //         width    : `500px`,
  //         transform: `400`,
  //         opacity  : `0`
  //       })
  //     } else {
  //       setStyle1({
  //         width    : `800px`,
  //         transform: `0`,
  //         opacity  : `1`
  //       })
  //     }
  //   } else {
  //     setStyle1({
  //       width    : `500px`,
  //       transform: `0`,
  //       opacity  : `1`
  //     })
  //   }
  //
  //
  // })
  //
  //
  // window.addEventListener('scroll', function (){
  //   if(this.scrollY >= 3150 && this.scrollY <=4150){
  //     if (this.scrollY >= 3150 && this.scrollY <=3650){
  //       let x =500+ ((300/500)*(this.scrollY-3150))
  //       setStyle2({
  //         width: `${x}px`,
  //         transform: `0`,
  //         opacity: `1`
  //       })
  //     }
  //     if (this.scrollY >= 3850 && this.scrollY <=4150){
  //       let x = (800/300)*(this.scrollY-3850)
  //       let y =1- (1/300)*(this.scrollY-3850)
  //       setStyle2({
  //         width: `800px`,
  //         transform: `${x}`,
  //         opacity: `${y}`
  //       })
  //     }
  //   }
  // })
  //
  // window.addEventListener('scroll', function (){
  //   if(this.scrollY >= 3500 && this.scrollY <=4500){
  //     if (this.scrollY >= 3500 && this.scrollY <=4000){
  //       let x =500+ ((300/500)*(this.scrollY-3500))
  //       setStyle3({
  //         width: `${x}px`,
  //         transform: `0`,
  //         opacity: `1`
  //       })
  //     }
  //     if (this.scrollY >= 4200 && this.scrollY <=4500){
  //       let x = (800/300)*(this.scrollY-4200)
  //       let y =1- (1/300)*(this.scrollY-4200)
  //       setStyle3({
  //         width: `800px`,
  //         transform: `${x}`,
  //         opacity: `${y}`
  //       })
  //     }
  //   }
  // })
  const [style1, setStyle1] = useState({
    scale: `0.15`,
    transform: `0`,
    left: `38`
  })
  const [style2, setStyle2] = useState({
    scale: `0.2`,
    transform: `0`,
    left: `35`
  })
  const [style3, setStyle3] = useState({
    scale: `0.2`,
    transform: `0`,
    left: `30`
  })
  const [style4, setStyle4] = useState({
    scale: `0.2`,
    transform: `0`,
    left: `32`
  })
  const [style5, setStyle5] = useState({
    scale: `0.2`,
    transform: `0`,
    left: `30`
  })
  const [style6, setStyle6] = useState({
    scale: `0.2`,
    transform: `0`,
    left: `35`
  })
  
  
  const [contFixed, setContFixed] = useState('relative')
  window.addEventListener('scroll', function(){
    if (this.scrollY >= 2000){
      setContFixed('fixed')
    } else {
      setContFixed('relative')
    }
    
    
    if (this.scrollY >=2000 && this.scrollY < 4000){
      let x
      if (this.scrollY>=2000 && this.scrollY <3400){
         x = -(800/1400) * (this.scrollY-2000)
      } else {
        x = -800+(200/600) * (this.scrollY-3400)
      }
      
      
      
      let y = 30- (100/2000) * (this.scrollY-2000)
      let z = 0.2 + (2.8/2000) * (this.scrollY-2000)
  
      setStyle3({
        scale: `${z}`,
        transform: `${x}`,
        left: `${y}`
      })
    }
  
    if (this.scrollY >=2050 && this.scrollY < 4050){
      let x
      if (this.scrollY>=2050 && this.scrollY <3050){
        x = -(700/1000) * (this.scrollY-2050)
      } else {
        x = -700+(200/1000) * (this.scrollY-3050)
      }
    
    
    
      let y = 35+ (100/2000) * (this.scrollY-2050)
      let z = 0.2 + (2.5/2000) * (this.scrollY-2050)
    
      setStyle2({
        scale: `${z}`,
        transform: `${x}`,
        left: `${y}`
      })
    }
  
    if (this.scrollY >=2020 && this.scrollY < 4020){
      let x
      if (this.scrollY>=2020 && this.scrollY <2620){
        x = -(700/600) * (this.scrollY-2020)
      } else {
        x = -700+(1100/1400) * (this.scrollY-2620)
      }
    
    
    
      let y = 38- (20/2020) * (this.scrollY-2020)
      let z = 0.15 + (2.2/2020) * (this.scrollY-2020)
    
      setStyle1({
        scale: `${z}`,
        transform: `${x}`,
        left: `${y}`
      })
    }
    
    if (this.scrollY >=2040 && this.scrollY < 4040){
      let x
      if (this.scrollY>=2040 && this.scrollY <2640){
        x = -(500/600) * (this.scrollY-2040)
      } else {
        x = -500+(800/1400) * (this.scrollY-2640)
      }
    
    
    
      let y = 32+ (60/2040) * (this.scrollY-2040)
      let z = 0.15 + (2.0/2040) * (this.scrollY-2040)
    
      setStyle4({
        scale: `${z}`,
        transform: `${x}`,
        left: `${y}`
      })
    }
  
    if (this.scrollY >=2500 && this.scrollY < 4500){
      let x
      if (this.scrollY>=2500 && this.scrollY <3500){
        x = -(800/1000) * (this.scrollY-2500)
      } else {
        x = -800+(300/1000) * (this.scrollY-3500)
      }
    
    
    
      let y = 30+ (120/2500) * (this.scrollY-2500)
      let z = 0.15 + (2.8/2500) * (this.scrollY-2500)
    
      setStyle5({
        scale: `${z}`,
        transform: `${x}`,
        left: `${y}`
      })
    }
  
  
  
  
  })
  
  return (
     <div  className="FeaturedWorkBlock ">
       {/*<p className="header G-Block-Header">Featured work</p>*/}
       <div style={{position: fixed, left: left}} className="Header">
         <div style={{transform: fLetter.translate, opacity: fLetter.opacity}} className="letter">F</div>
         <div style={{transform: sLetter.translate, opacity: sLetter.opacity}} className="letter">E</div>
         <div style={{transform: foLetter.translate, opacity: foLetter.opacity}} className="letter">A</div>
         <div style={{transform: tLetter.translate, opacity: tLetter.opacity}} className="letter">T</div>
         <div style={{transform: fLetter.translate, opacity: fLetter.opacity}} className="letter">U</div>
         <div style={{transform: tLetter.translate, opacity: tLetter.opacity}} className="letter">R</div>
         <div style={{transform: foLetter.translate, opacity: foLetter.opacity}} className="letter">E</div>
         <div style={{transform: sLetter.translate, opacity: sLetter.opacity}} className="letter">D</div>
         
         <div className="space"> </div>
         
         <div style={{transform: fLetter.translate, opacity: fLetter.opacity}} className="letter">W</div>
         <div style={{transform: foLetter.translate, opacity: foLetter.opacity}} className="letter">O</div>
         <div style={{transform: sLetter.translate, opacity: sLetter.opacity}} className="letter">R</div>
         <div style={{transform: tLetter.translate, opacity: tLetter.opacity}} className="letter">K</div>
       
       </div>
       
       <div style={{position: `${contFixed}`}} className="worksCont">
         
         {/*<FeatureComponent style={style1} el={FeaturesData[0]}/>*/}
         {/*<FeatureComponent style={style2} el={FeaturesData[1]}/>*/}
         <FeatureComponent  style={style5} el={FeaturesData[4]}/>
         <FeatureComponent  style={style6} el={FeaturesData[5]}/>
         
         <FeatureComponent  style={style3} el={FeaturesData[2]}/>
         <FeatureComponent  style={style2} el={FeaturesData[1]}/>
         <FeatureComponent  style={style1} el={FeaturesData[3]}/>
         <FeatureComponent  style={style4} el={FeaturesData[0]}/>
  
         


       </div>
     </div>
  );
}

export default FeaturedBlock;