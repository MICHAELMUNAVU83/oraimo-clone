import "./App.css";
import NavBar from "./components/NavBar";
import AfterNavbar from "./components/AfterNavbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CreateYourWay from "./pages/CreateYourWay";
import DailyDeals from "./pages/DailyDeals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <AfterNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-your-way" element={<CreateYourWay />} />
        <Route path="/daily-deals" element={<DailyDeals />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
