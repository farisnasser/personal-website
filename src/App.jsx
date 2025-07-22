import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="min-h-screen w-full text-white font-sans relative">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Experience />
        <Research />
        <Skills />
        <Gallery />
        <Contact />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
