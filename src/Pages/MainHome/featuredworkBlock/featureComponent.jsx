import React from "react";

function FeatureComponent(props) {
  return (
     <div style={{width: props.style.width, transform: `translateX(-${props.style.transform}px)`, opacity: props.style.opacity}} className="ItemBlock">
       <img className="ItemImg" src={props.el.images[0]} alt=""/>
       <div className="textBlock">
         <div className="ItemSkills G-flex-wrap">
           {props.el.skills.map((el, index) => {
             return (
                <div key={index} className={`ItemSkill ${el.marked ? "ItemSkillM" : ""}`}>
                  {el.skill}
                </div>
             );
           })}
         </div>
         <p className="ItemName G-fzNormal">{props.el.name}</p>
         <p className="ItemDesc">{props.el.desc}</p>
       </div>
     </div>
  );
}

export default FeatureComponent