import React, {useState} from "react";
import "./QuestionPayBlock.scss"
import LinkButton from "../../../source/GlobalFiles/linkButton";
import Spline from "@splinetool/react-spline";

function QuestionPayBlock (){
  let x = "What are you paying for?"
  let y = x.split('')
  
  const [hRotate, setHRotate] = useState(90)
  window.addEventListener('scroll', function (){
    if (this.scrollY > 4800){
      setHRotate(360)
    } else {
      setHRotate(90)
    }
    
    
  })
  
  return(
     <div className="QuestionPayBlock">
        <div  className="header">
          {y.map((el)=>{
            if (el !== " "){
              return(
                 <span style={{transform: `rotateY(${hRotate}deg)`}} className="letter">{el}</span>
              )
            } else {
              return (<span className="space"></span>)
            }
          })}
        </div>
       
       <div className="Sprints-Hours">
          <div className="SprintsCont mainCont">
            <div className="TextBlock">
              <div className="MHeader">Sprints</div>
              <p className="MPrg">You've described <span className="markedPrg">a sprint-based approach</span> to project management , where a team <span className="markedPrg">focuses on a specific task</span> for a set period of time. This method allows for <span className="markedPrg">concentrated effort</span> and clear milestones. Splitting a large project into smaller, manageable tasks can enhance productivity and accountability.</p>
              <div className="Animation">
                <Spline scene="https://prod.spline.design/8KKj74xENKTtAomC/scene.splinecode"/>
              </div>
            </div>
            <div className="buttonBlock">
              <LinkButton Text={"Leave a request"}/>
            </div>
          </div>
         
         <div className="ForHoursCont mainCont">
           <div className="TextBlock">
             <div className="Animation">
                <Spline scene="https://prod.spline.design/8KKj74xENKTtAomC/scene.splinecode"/>
             </div>
             <div className="MHeader">For hours</div>
             <p className="MPrg">Payment model <span className="markedPrg">is based on the time</span> spent on <span className="markedPrg">your project.</span> Once you provide us with the technical requirements, we dedicate our time to your project and <span className="markedPrg">you pay for the hours worked.</span> This approach is ideal when tasks are not recurring regularly.</p>
             
           </div>
           <div className="buttonBlock">
             <LinkButton Text={"Leave a request"}/>
           </div>
         </div>
       </div>
     </div>
  )
}

export default QuestionPayBlock