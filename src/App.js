import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CourseDetails from "./components/CourseDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
