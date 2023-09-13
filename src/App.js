import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section from "./components/Section";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Section/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </div>

  );
}
export default App;
