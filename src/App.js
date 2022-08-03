import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/CustomerLogin/Login";
import Signup from "./Components/CustomerLogin/Signup";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
