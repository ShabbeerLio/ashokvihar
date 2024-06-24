import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import { useEffect } from "react";
import Gallery from "./Pages/Gallery/Gallery";
import PriceList from "./Pages/PriceList/PriceList";
import MasterPlan from "./Pages/MasterPlan/MasterPlan";
import FloorPlan from "./Pages/FloorPlan/FloorPlan";
import Location from "./Pages/Location/Location";
import SiteVisit from "./Pages/SiteVisit/SiteVisit";

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
          <Route path="/gallery" exact element={<Gallery title={"Godrej Ashok Vihar| New Upcoming Project In Delhi"} descriptions={"Godrej Ashok Vihar New Upcoming Residential Project In Delhi Developed by Godrej Properties."} />} />
          <Route path="/price-list" exact element={<PriceList title={"Godrej Ashok Vihar| New Upcoming Project In Delhi"} descriptions={"Godrej Ashok Vihar New Upcoming Residential Project In Delhi Developed by Godrej Properties."} />} />
          <Route path="/master-plan" exact element={<MasterPlan title={"Godrej Ashok Vihar| New Upcoming Project In Delhi"} descriptions={"Godrej Ashok Vihar New Upcoming Residential Project In Delhi Developed by Godrej Properties."} />} />
          <Route path="/floor-plans" exact element={<FloorPlan title={"Godrej Ashok Vihar| New Upcoming Project In Delhi"} descriptions={"Godrej Ashok Vihar New Upcoming Residential Project In Delhi Developed by Godrej Properties."} />} />
          <Route path="/location" exact element={<Location title={"Godrej Ashok Vihar| New Upcoming Project In Delhi"} descriptions={"Godrej Ashok Vihar New Upcoming Residential Project In Delhi Developed by Godrej Properties."} />} />
          <Route path="/enquery" exact element={<SiteVisit title={"Godrej Ashok Vihar| New Upcoming Project In Delhi"} descriptions={"Godrej Ashok Vihar New Upcoming Residential Project In Delhi Developed by Godrej Properties."} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
