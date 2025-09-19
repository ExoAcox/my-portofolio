import Experience from "@components/Experience"
import Project from "@components/Project"
import Wrapper from "@components/Wrapper"
import About from "@components/About"
import Hero from "@components/Hero"


const App: React.FC = () => {
  return <Wrapper>
    <div className="flex gap-4 justify-between mb-24 flex-wrap">
      <Hero />
      <div className="lg:max-w-[42rem] flex flex-col gap-25">
        <About />
        <Experience />
      </div>
    </div>
    <Project />
  </Wrapper>
}

export default App