import React from "react";
import {Link} from "react-router-dom";
import {svgData} from "../../source/svg/svgData";

function MenuBarLink(props) {
  let x = props.name.split('')
  
  return (
     <Link class="menuBarLink" to={`${props.link}`}>
       <div className="headBlock">
          <div className="textBlock">
            <div className="textLine">
              {x.map((el)=>{
                if (el !== ' '){
                  return(<div className="letter">{el}</div>)
                } else {
                  return (<div className="space"></div>)
                }
              })}
            </div>
            <div className="textLine">
              {x.map((el)=>{
                if (el !== " "){
                  return(<div className="letter">{el}</div>)
                } else {
                  return(<div className="space"></div>)
                }
              })}
            </div>
          </div>
          <div className="arrowBlock">
            <img className="arrowImg" src={svgData.arrowRightBlack} alt=""/>
            <img className="arrowImg" src={svgData.arrowRightBlack} alt=""/>

          </div>
       </div>
       <div className="lineBlock">
          <div className="processLine"></div>
       </div>
     
     </Link>
  );
}

export default MenuBarLink;