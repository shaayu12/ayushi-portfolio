import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [active, setActive] = useState("about");

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Sidebar active={active} setActive={setActive} />

      <main className="flex-1 overflow-y-auto px-10 py-8">
        {active === "about" && <About />}
        {active === "skills" && <Skills />}
        {active === "experience" && <Experience />}
        {active === "projects" && <Projects />}
        {active === "contact" && <Contact />}
      </main>
    </div>
  );
}
