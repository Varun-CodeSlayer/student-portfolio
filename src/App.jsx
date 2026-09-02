import "./App.css"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Achievements from "./components/Achievements"
import Certifications from "./components/Certifications"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Achievements />
        <Certifications />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default App