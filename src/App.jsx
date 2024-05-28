import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Heroine from "./Components/Heroine";
import CanvasContainer from "./Components/canvasContainer";
import Casio from "./Components/Casio";

function App() {
  return (
    <>
      <Navbar />
      <CanvasContainer />
      <Hero/>
      <Heroine/>
      <Casio/>
      
    </>
  );
}

export default App;
