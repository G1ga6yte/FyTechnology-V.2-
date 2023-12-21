import React from "react";
import "./featuredWorkBlock.scss"
import {FeaturesData} from "./featuresData";
import LinkButton from "../../../source/GlobalFiles/linkButton";

function FeaturedBlock (){
  return(
     <div className="FeaturedWorkBlock G-paddingRL-100">
       <p className="header G-Block-Header">Featured work</p>
       <div className="worksCont">
         
         <div className="leftLine G-flex-column">
           {FeaturesData.map((el, index)=>{
             if (index < 3){
               return(
                  <div className="ItemBlock">
                    <img className="ItemImg" src={el.images[0]} alt=""/>
                    <div className="ItemSkills G-flex-wrap">
                      {el.skills.map((el)=>{
                        return(
                           <div className={`ItemSkill ${el.marked ? "ItemSkillM" : ""}`}>
                             {el.skill}
                           </div>
                        )
                      })}
                    </div>
                    <div className="line"></div>
                    <p className="ItemName G-fzNormal">{el.name}</p>
                    <p className="ItemDesc">{el.desc}</p>
                  </div>
               )
             }
           })}
         </div>
         
         <div className="centerLine G-flex-wrap">
           {FeaturesData.map((el, index)=>{
             if (index < 7 && index > 2){
               return(
                  <div className={`ItemBlock ${el.width ? "ItemBlockW" : "ItemBlock"}`}>
                    <img className="ItemImg" src={el.images[0]} alt=""/>
                    <div className="ItemSkills G-flex-wrap">
                      {el.skills.map((el)=>{
                        return(
                           <div className={`ItemSkill ${el.marked ? "ItemSkillM" : ""}`}>
                             {el.skill}
                           </div>
                        )
                      })}
                    </div>
                    <div className="line"></div>
                    <p className="ItemName G-fzNormal">{el.name}</p>
                    <p className="ItemDesc">{el.desc}</p>
                  </div>
               )
             }
           })}
           <div className="ButtonBlock G-flex-center G-alignItems-center">
             <LinkButton Text="Find out more"/>
           </div>
         </div>
         
         <div className="rightLine G-flex-column">
           {FeaturesData.map((el, index)=>{
             if (index < 10 && index > 6){
               return(
                  <div className="ItemBlock">
                    <img className="ItemImg" src={el.images[0]} alt=""/>
                    <div className="ItemSkills G-flex-wrap">
                      {el.skills.map((el)=>{
                        return(
                           <div className={`ItemSkill ${el.marked ? "ItemSkillM" : ""}`}>
                             {el.skill}
                           </div>
                        )
                      })}
                    </div>
                    <div className="line"></div>
                    <p className="ItemName G-fzNormal">{el.name}</p>
                    <p className="ItemDesc">{el.desc}</p>
                  </div>
               )
             }
           })}
         </div>
         
       </div>
     </div>
  )
}
export default FeaturedBlock