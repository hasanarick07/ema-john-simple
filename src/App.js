import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/About Us/AboutUs";
import Header from "./Components/Header";
import Inventory from "./Components/Inventory/Inventory";
import Order from "./Components/Order/Order";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/Order" element={<Order></Order>}></Route>
        <Route path="/Inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/AboutUs" element={<AboutUs></AboutUs>}></Route>
        <Route path="/*" element={<Shop></Shop>}></Route>
      </Routes>
    </div>
  );
}

export default App;
