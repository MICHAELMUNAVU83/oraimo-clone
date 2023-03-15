import "./App.css";
import NavBar from "./components/NavBar";
import AfterNavbar from "./components/AfterNavbar";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <NavBar />
      <AfterNavbar />
      <Home />
    </div>
  );
}

export default App;
