// import AppRoutes from "../routes/routes.jsx";
import { Route, Routes } from "react-router-dom";
import StoreAddresses from "../ pages/StoreAddresses/StoreAddresses.jsx";
import Layout from "../layout/Layout.jsx";
import HomePage from "../ pages/Home/HomePage.jsx";
import ToTheMap from "../ pages/ToTheMap/ToTheMap.jsx";
import ShoppingCentre from "../ pages/ShoppingCentre/ShoppingCentre.jsx";

const App = () => {
  return (
    <div>
    {/* <StoreAddresses />
    <ToTheMap/> */}
    <ShoppingCentre/>
    </div>
  )
}

export default App