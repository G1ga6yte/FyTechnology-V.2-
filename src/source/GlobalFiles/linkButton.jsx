import React from "react";
import {svgData} from "../svg/svgData";

function LinkButton ({...props}){
  let x = props.Text.split('')
  return(
     <div className="G-Link-Button G-flex-center G-alignItems-center G-transition03">
       <div className="link-button-text G-transition03">
         <div className="firstLine">
           {x.map((el)=>{
             if (el !== ' '){
               return(<div className="letter">{el}</div>)
             } else {
               return (<div className="space"></div>)
             }
           })}
         </div>
         <div className="firstLine">
           {x.map((el)=>{
             if (el !== ' '){
               return(<div className="letter">{el}</div>)
             } else {
               return (<div className="space"></div>)
             }
           })}
         </div>
       </div>
       <div className="button-arrow G-transition03"></div>
       <div className="arrowBlock">
         <img className="arrow-img" src={svgData.arrowRight} alt=""/>
         <img className="arrow-img" src={svgData.arrowRight} alt=""/>
         <img className="arrow-imgB" src={svgData.arrowRightBlack} alt=""/>
         <img className="arrow-imgB" src={svgData.arrowRightBlack} alt=""/>
       </div>
     </div>
  )
}
export default LinkButton