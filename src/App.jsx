import './App.scss';
import {Route, Routes} from "react-router-dom";
import Navigation from "./FixedPages/navigationBlock/navigation";
import HomeMain from "./Pages/MainHome/homeMain";
import {svgData} from "./source/svg/svgData";
import {useState} from "react";


function App() {
  const [left, setLeft] = useState(0)
  const [top, setTop] = useState(0)
  window.addEventListener('mousemove', function (event){
    // console.log(event.clientX);
    // console.log(event.clientY);
    setLeft(event.clientX)
    setTop(event.clientY)
  })
  return (
    <div className="App G-container">
      {/*<img className="cursor" style={{ left: `${left-12}px`, top: `${top-12}px`}} src={svgData.cursor} alt=""/>*/}
      
      <Navigation/>
      
      <Routes>
        <Route path="/" element={<HomeMain />} /> // MainHome - home global file
        <Route path="/home" element={<HomeMain />} /> // MainHome - home global file
        
      </Routes>
      
    </div>
  );
}

export default App;
