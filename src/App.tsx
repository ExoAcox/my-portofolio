import Experience from "@components/Experience"
import Project from "@components/Project"
import Wrapper from "@components/Wrapper"
import About from "@components/About"
import Hero from "@components/Hero"
import Background from "@components/Background"
import Quote from "@components/Quote"
import { useEffect, useRef, useState } from "react"
import { useInView } from "motion/react"
import Contact from "@components/Contact"


const App: React.FC = () => {
  const [active, setActive] = useState("about")

  const aboutRef = useRef(null)
  const experienceRef = useRef(null)
  const projectRef = useRef(null)
  const contactRef = useRef(null)


  const aboutInView = useInView(aboutRef)
  const experienceInView = useInView(experienceRef)
  const projectInView = useInView(projectRef)
  const contactInView = useInView(contactRef)

  useEffect(() => {
    if (aboutInView) return setActive("about")
    if (experienceInView) return setActive("experience")
    if (projectInView) return setActive("project")
    if (contactInView) return setActive("contact")

  }, [aboutInView, experienceInView, projectInView, contactInView])



  return <Wrapper contactInView={contactInView}>
    <Background />
    <div className="flex flex-col lg:flex-row justify-between relative z-[2] gap-y-24">
      <Hero active={active} />
      <div className="lg:w-[42rem] lg:max-w-[60%] flex flex-col gap-24 lg:gap-36">
        <About ref={aboutRef} />
        <Experience ref={experienceRef} />
        <Project ref={projectRef} contactInView={contactInView} />
        <Quote />
      </div>
      <div className="block lg:hidden -mt-12" id="contact" ref={contactRef}>
        <Contact />
      </div>
    </div>
  </Wrapper>
}

export default App