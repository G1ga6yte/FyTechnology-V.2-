import './App.scss';
import {Route, Routes} from "react-router-dom";
import Navigation from "./FixedPages/navigationBlock/navigation";
import HomeMain from "./Pages/MainHome/homeMain";


function App() {
  return (
    <div className="App G-container">
      
      <Navigation/>
      
      <Routes>
        <Route path="/" element={<HomeMain />} /> // MainHome - home global file
        <Route path="/home" element={<HomeMain />} /> // MainHome - home global file
        
      </Routes>
      
    </div>
  );
}

export default App;
