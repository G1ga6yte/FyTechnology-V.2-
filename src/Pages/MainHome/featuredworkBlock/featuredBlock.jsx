import React, {useState} from "react";
import "./featuredWorkBlock.scss";
import FeatureComponent from "./featureComponent";
import {FeaturesData} from "./featuresData";

function FeaturedBlock() {
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
  
  
  const [style1, setStyle1] = useState({
    width: `500px`,
    transform: `0`,
    opacity: `1`
  })
  const [style2, setStyle2] = useState({
    width: `500px`,
    transform: `0`,
    opacity: `1`
  })
  const [style3, setStyle3] = useState({
    width: `500px`,
    transform: `0`,
    opacity: `1`
  })
  
  window.addEventListener('scroll', function (){
    if(this.scrollY >= 2800 && this.scrollY <=3800){
      if (this.scrollY >= 2800 && this.scrollY <=3300){
        let x =500+ ((300/500)*(this.scrollY-2800))
        setStyle1({
          width: `${x}px`,
          transform: `0`,
          opacity: `1`
        })
      }
      if (this.scrollY >= 3500 && this.scrollY <=3800){
        let x = (800/300)*(this.scrollY-3500)
        let y =1- (1/300)*(this.scrollY-3500)
        setStyle1({
          width: `800px`,
          transform: `${x}`,
          opacity: `${y}`
        })
      }
    }
  })
  
  window.addEventListener('scroll', function (){
    if(this.scrollY >= 3150 && this.scrollY <=4150){
      if (this.scrollY >= 3150 && this.scrollY <=3650){
        let x =500+ ((300/500)*(this.scrollY-3150))
        setStyle2({
          width: `${x}px`,
          transform: `0`,
          opacity: `1`
        })
      }
      if (this.scrollY >= 3850 && this.scrollY <=4150){
        let x = (800/300)*(this.scrollY-3850)
        let y =1- (1/300)*(this.scrollY-3850)
        setStyle2({
          width: `800px`,
          transform: `${x}`,
          opacity: `${y}`
        })
      }
    }
  })
  
  window.addEventListener('scroll', function (){
    if(this.scrollY >= 3500 && this.scrollY <=4500){
      if (this.scrollY >= 3500 && this.scrollY <=4000){
        let x =500+ ((300/500)*(this.scrollY-3500))
        setStyle3({
          width: `${x}px`,
          transform: `0`,
          opacity: `1`
        })
      }
      if (this.scrollY >= 4200 && this.scrollY <=4500){
        let x = (800/300)*(this.scrollY-4200)
        let y =1- (1/300)*(this.scrollY-4200)
        setStyle3({
          width: `800px`,
          transform: `${x}`,
          opacity: `${y}`
        })
      }
    }
  })
  
  return (
     <div  className="FeaturedWorkBlock G-paddingRL-100">
       {/*<p className="header G-Block-Header">Featured work</p>*/}
       <div style={{position: fixed}} className="Header">
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
       
       <div className="worksCont">
         
         <FeatureComponent style={style1} el={FeaturesData[0]}/>
         <FeatureComponent style={style2} el={FeaturesData[1]}/>
         <FeatureComponent style={style3} el={FeaturesData[2]}/>



       </div>
     </div>
  );
}

export default FeaturedBlock;