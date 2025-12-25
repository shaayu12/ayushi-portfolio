import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [active, setActive] = useState("home");

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-800">
      <Sidebar active={active} setActive={setActive} />

      {/* Right panel */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto px-4 lg:px-10 py-6 lg:py-8 mt-14 lg:mt-0">
          {active === "home" && <Hero />}
          {active === "about" && <About />}
          {active === "skills" && <Skills />}
          {active === "projects" && <Projects />}
          {active === "experience" && <Experience />}
          {active === "contact" && <Contact />}
        </main>

        {/* Footer ONLY on Home */}
        {active === "home" && <Footer />}
      </div>
    </div>
  );
}
