import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import { useEffect } from "react";

function App() {

  // remove inspect and copy element
   useEffect(() => {
    const handleRightClick = (e) => {
      e.preventDefault();
    };

    const handleSelect = (e) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('selectstart', handleSelect);
    document.addEventListener('contextmenu', handleRightClick);

    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
      document.removeEventListener('selectstart', handleSelect);
    };
  }, []);

  return (
    <>
      <BrowserRouter>  
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home title={"Godrej Ashok Vihar| New Upcoming Project In Delhi"} descriptions={"Godrej Ashok Vihar New Upcoming Residential Project In Delhi Developed by Godrej Properties."} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
