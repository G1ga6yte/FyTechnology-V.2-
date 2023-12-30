import React, {useState} from "react";
import "./opportunity.scss";
import {ImgData} from "../../../source/img/imgData";
import {Link} from "react-router-dom";
import LinkButton from "../../../source/GlobalFiles/linkButton";
import {OpportunityData} from "./opportunityData";

function Opportunity() {
  const [active, setActive] = useState(OpportunityData[0])
  const [blocksX, setBlocksX] = useState(0)
  
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
    if (this.scrollY < 400){
      setFLetter({
        translate: 'translateY(-100px)',
        opacity: "0"
      })
    }else if (this.scrollY >= 400 && this.scrollY <= 600){
      let x = (100/200)*(this.scrollY-400)
      let y = 100-x
      let z = (1/200)*(this.scrollY-400)
    
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
  
    if (this.scrollY < 450){
      setSLetter({
        translate: 'translateY(100px)',
        opacity: "0"
      })
    }else if (this.scrollY >= 450 && this.scrollY <= 650){
      let x = (100/200)*(this.scrollY-450)
      let y = 100-x
      let z = (1/200)*(this.scrollY-450)
    
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
  
    if (this.scrollY < 500){
      setTLetter({
        translate: 'translateY(-100px)',
        opacity: "0"
      })
    }else if (this.scrollY >= 500 && this.scrollY <= 700){
      let x = (100/200)*(this.scrollY-500)
      let y = 100-x
      let z = (1/200)*(this.scrollY-500)
    
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
  
    if (this.scrollY < 550){
      setFoLetter({
        translate: 'translateY(100px)',
        opacity: "0"
      })
    }else if (this.scrollY >= 550 && this.scrollY <= 750){
      let x = (100/200)*(this.scrollY-550)
      let y = 100-x
      let z = (1/200)*(this.scrollY-550)
    
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
    
    if (this.scrollY >= 1300 && this.scrollY < 2000){
      let x = this.scrollY-1300
      setBlocksX(x)
    }
  })
  
  return (<div className="Opportunity G-paddingRL-100">
    <div  className="Header">
      <div style={{transform: fLetter.translate, opacity: fLetter.opacity}} className="letter">W</div>
      <div style={{transform: sLetter.translate, opacity: sLetter.opacity}} className="letter">h</div>
      <div style={{transform: foLetter.translate, opacity: foLetter.opacity}} className="letter">a</div>
      <div style={{transform: tLetter.translate, opacity: tLetter.opacity}} className="letter">t</div>
      <div className="space"> </div>
  
      <div style={{transform: fLetter.translate, opacity: fLetter.opacity}} className="letter">w</div>
      <div style={{transform: tLetter.translate, opacity: tLetter.opacity}} className="letter">e</div>
      <div className="space"> </div>
  
      <div style={{transform: foLetter.translate, opacity: foLetter.opacity}} className="letter">c</div>
      <div style={{transform: sLetter.translate, opacity: sLetter.opacity}} className="letter">a</div>
      <div style={{transform: fLetter.translate, opacity: fLetter.opacity}} className="letter">n</div>
      <div className="space"> </div>
  
      <div style={{transform: foLetter.translate, opacity: foLetter.opacity}} className="letter">d</div>
      <div style={{transform: sLetter.translate, opacity: sLetter.opacity}} className="letter">o</div>
  
    </div>
    
    <div className="opportunityCont G-flex-between">
      <div style={{transform: `translateX(-${blocksX}px)`}} className="servicesBlock G-flex-column">
        {OpportunityData.map((el, index)=>{
          return(
             <p key={index} onClick={()=>{
               setActive(el)
             }} className={`serviceItem G-fzNormal G-transition03 ${active.name === el.name ? "active" : " "}`}>{el.name}</p>
          )
        })}
        
      </div>
      
      
      <div style={{transform: `translateX(${blocksX}px)`}} className="includingBlock G-flex-column">
        <p className="textHeader G-fzNormal">Including services</p>
        
        <div className="includingServicesBlock G-flex-column">
          {active.content.map((el, index)=>{
            return(
               <span key={index} className="includingServices G-fzNormal">{el}</span>
            )
          })}
        </div>
        
        <span className="skill G-skill-inBlock marginTop">App development</span>
        <span className="skill G-skill-inBlock">Web development </span>
        <span className="skill G-skill-inBlock">Software development</span>
        
        <Link className="findOutMoreLink"><LinkButton Text={"Find out more"}/></Link>

      </div>
    
    </div>
  </div>);
}

export default Opportunity;