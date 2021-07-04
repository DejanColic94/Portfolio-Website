import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Testemonials from "./components/testemonials/Testemonials";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="app">
      <Navbar/>
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
