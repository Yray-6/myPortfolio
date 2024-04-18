import "./App.css";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

const App = () => {
  return (
    <div>
      <Cursor/>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
       <section>
        <Services />
      </section>
      {/* <section id="Portfolio">
        <Parallax type="p" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section> */} 
    </div>
  );
};

export default App;
