import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/About Us/AboutUs";
import Header from "./Components/Header";
import Inventory from "./Components/Inventory/Inventory";
import Login from "./Components/LogIn/Login";
import Order from "./Components/Order/Order";
import Resister from "./Components/Resister/Resister";
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
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Register" element={<Resister></Resister>}></Route>
        <Route path="/*" element={<Shop></Shop>}></Route>
      </Routes>
    </div>
  );
}

export default App;
