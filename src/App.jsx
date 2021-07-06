import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Testemonials from "./components/testemonials/Testemonials";
import Contact from "./components/contact/Contact";
import "./App.scss";
import { useState } from "react";

function App() {
  // state for burger menu animation, toggles 'active' class
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        
        <Intro/>
        <Portfolio/>
        <Projects/>
        <Testemonials/>
        <Contact/>
        
      </div>
    </div>
  );
}

export default App;
