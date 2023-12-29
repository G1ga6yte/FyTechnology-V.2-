import React, {Suspense, useState} from "react";
import HeaderBlock from "./headerBlock/headerBlock";
import "./homeMain.scss"
import Opportunity from "./opportunityBlock/opportunity";
import FeaturedBlock from "./featuredworkBlock/featuredBlock";

function HomeMain (){
  const Spline = React.lazy(() => import("@splinetool/react-spline"));
  const [ballStyle, setBallStyle]=useState({
    width: "100%",
    top: "100px",
    left: "0",
    height: "100vh",
    position: "fixed"
  })
  
  window.addEventListener('scroll', function (){
    if (this.scrollY >= 100){
      setBallStyle({
        width: "90%",
        top: "100px",
        left: "10%",
        height: "90vh",
        position: "fixed"
      })
      if (this.scrollY >= 200){
        setBallStyle({
          width: "80%",
          top: "150px",
          left: "20%",
          height: "85vh",
          position: "fixed"
        })
        if (this.scrollY >= 300){
          setBallStyle({
            width: "75%",
            top: "200px",
            left: "25%",
            height: "80vh",
            position: "fixed"
          })
          if (this.scrollY >=400){
            setBallStyle({
              width: "70%",
              top: "200px",
              left: "30%",
              height: "75vh",
              position: "fixed"
            })
            if (this.scrollY >= 600){
              setBallStyle({
                width: "65%",
                top: "200px",
                left: "30%",
                height: "75vh",
                position: "fixed"
              })
              if (this.scrollY >= 800){
                setBallStyle({
                  width: "60%",
                  top: "200px",
                  left: "30%",
                  height: "75vh",
                  position: "fixed"
                })
                if (this.scrollY >= 900){
                  setBallStyle({
                    width: "60%",
                    top: "200px",
                    left: "26%",
                    height: "75vh",
                    position: "fixed"
                  })
                  if (this.scrollY >=1000){
                    setBallStyle({
                      width: "60%",
                      top: "200px",
                      left: "22%",
                      height: "75vh",
                      position: "fixed"
                    })
                    if (this.scrollY >= 1200){
                      setBallStyle({
                        width: "60%",
                        top: "1300px",
                        left: "22%",
                        height: "75vh",
                        position: "absolute"
                      })
                    } else{
                      setBallStyle({
                        width: "60%",
                        top: "200px",
                        left: "22%",
                        height: "75vh",
                        position: "fixed"
                      })
                    }
                  }else{
                    setBallStyle({
                      width: "60%",
                      top: "200px",
                      left: "28%",
                      height: "75vh",
                      position: "fixed"
                    })
                  }
                }else{
                  setBallStyle({
                    width: "60%",
                    top: "200px",
                    left: "30%",
                    height: "75vh",
                    position: "fixed"
                  })
                }
              } else{
                setBallStyle({
                  width: "60%",
                  top: "200px",
                  left: "30%",
                  height: "75vh",
                  position: "fixed"
                })
              }
            } else {
              setBallStyle({
                width: "60%",
                top: "200px",
                left: "30%",
                height: "75vh",
                position: "fixed"
              })
            }
          }else{
            setBallStyle({
              width: "70%",
              top: "200px",
              left: "25%",
              height: "80vh",
              position: "fixed"
            })
          }
        }else{
          setBallStyle({
            width: "80%",
            top: "150px",
            left: "20%",
            height: "85vh",
            position: "fixed"
          })
        }
      }else{
        setBallStyle({
          width: "90%",
          top: "100px",
          left: "10%",
          height: "90vh",
          position: "fixed"
        })
      }
    }else{
      setBallStyle({
        width: "100%",
        top: "100px",
        left: "0",
        height: "100vh",
        position: "fixed"
      })
    }
  })
  
  
  return(
     <div className="homeMain">
       <div style={{width: ballStyle.width, height: ballStyle.height, top: ballStyle.top, left: ballStyle.left, position: ballStyle.position}}  className="imageBlock G-flex-center">
         <Suspense fallback={<div>Loading...</div>}>
           <Spline scene="https://prod.spline.design/gQOkQ2BEvut7DqqV/scene.splinecode"/>
         </Suspense>
       </div>
       
       <HeaderBlock/>
       <Opportunity/>
       <FeaturedBlock/>
     </div>
  )
}

export default HomeMain