import { Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import ShippingPayment from "./Components/ShippingPayment";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ShippingPayment />
      <Routes>{/* <Router /> */}</Routes>
    </div>
  );
}

export default App;
