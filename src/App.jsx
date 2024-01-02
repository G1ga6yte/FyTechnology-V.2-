import React, {Route, Routes} from "react-router-dom";
import Navigation from "./FixedPages/navigationBlock/navigation";
import HomeMain from "./Pages/MainHome/homeMain";
import {svgData} from "./source/svg/svgData";
import {useState} from "react";
import Spline from "@splinetool/react-spline";
import "./App.scss"
import MenuBarLink from "./FixedPages/navigationBlock/MenuBarLink";



function App() {
  const [left, setLeft] = useState(0)
  const [top, setTop] = useState(0)
  window.addEventListener('mousemove', function (event){
    // console.log(event.clientX);
    // console.log(event.clientY);
    setLeft(event.clientX)
    setTop(event.clientY)
  })
  const [ffalse, setFalse] = useState(false)
  
  if (Navigation === false){
    setFalse(false)
  }
  
  const [menuBar, setMenuBar]= useState(false)
  function handleMenuBar (num){
    if (num === 1){
      setMenuBar(prev => !prev)
    } else{
      setMenuBar(false)
    }
  }
  
  let y = 'Instagram'
  let x = y.split('')
  let z = 'Mail'
  let f = z.split('')
  
  {if(ffalse){
       return(
          <div className="App G-container">
            {/*<img className="cursor" style={{ left: `${left-12}px`, top: `${top-12}px`}} src={svgData.cursor} alt=""/>*/}
     
     
            <div></div>
     
            <Navigation/>
     
            <Routes>
              <Route path="/" element={<HomeMain />} /> // MainHome - home global file
              <Route path="/home" element={<HomeMain />} /> // MainHome - home global file
     
            </Routes>
   
          </div>
       )
       } else {
       return (
          
          <div  className="comingSonn">
            <div onClick={handleMenuBar} className="Scene">
              <Spline scene="https://prod.spline.design/VbFwDwlDYBPBpcWf/scene.splinecode" />
            </div>
            
            <div onClick={()=>{
              handleMenuBar(1)
            }} className={`menubar ${menuBar ? "activeBar" : " "}`}>
  
              <div className="Hicon">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              
              <div className="links">
                <a blank target='_blank' className="LinkBlock" href="https://www.instagram.com/fytechnology/">
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
                </a>
                
                <a className="LinkBlock" href="mailto:office@fytechnology.eu">
                  <div className="headBlock">
                    <div className="textBlock">
                      <div className="textLine">
                        {f.map((el)=>{
                          if (el !== ' '){
                            return(<div className="letter">{el}</div>)
                          } else {
                            return (<div className="space"></div>)
                          }
                        })}
                      </div>
                      <div className="textLine">
                        {f.map((el)=>{
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
                </a>
                
                
              </div>
            </div>
          </div>
       )
     }
     }
  
}

export default App;
