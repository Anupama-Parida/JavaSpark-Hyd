import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
          Home
        </NavLink>

        <NavLink to="/About" className={({ isActive }) => isActive ? "active" : ""}>
          About
        </NavLink>

        <NavLink to="/Contact" className={({ isActive }) => isActive ? "active" : ""}>
          Contact
        </NavLink>

        <NavLink to="/Login" className={({ isActive }) => isActive ? "active" : ""}>
          Login
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
