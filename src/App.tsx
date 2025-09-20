import Experience from "@components/Experience"
import Project from "@components/Project"
import Wrapper from "@components/Wrapper"
import About from "@components/About"
import Hero from "@components/Hero"
import Background from "@components/Background"
import Quote from "@components/Quote"


const App: React.FC = () => {
  return <Wrapper>
    <Background />
    <div className="flex gap-4 justify-between mb-24 flex-wrap relative z-[2]">
      <Hero />
      <div className="lg:max-w-[42rem] flex flex-col gap-36">
        <About />
        <Experience />
        <Project />
        <Quote />
      </div>
    </div>
  </Wrapper>
}

export default App