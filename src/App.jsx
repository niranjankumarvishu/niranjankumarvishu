import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Blog />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <>
      <Background />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
