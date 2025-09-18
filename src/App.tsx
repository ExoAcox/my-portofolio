import Experience from "@components/Experience"
import Project from "@components/Project"
import Wrapper from "@components/Wrapper"
import projects from "@constants/projects"
import experiences from "@constants/experiences"
import type stacks from "@constants/stacks"


const App: React.FC = () => {
  return <Wrapper>
    <div className="flex gap-4 justify-between mb-24">
      <div className="sticky h-fit top-12 md:top-24 flex flex-col">
        <h1>Anas Arifin</h1>
        <h5>Front End Developer</h5>
        <span className="mt-12">I build accessible, pixel-perfect digital<br />experiences for the web.</span>
        <div className="flex flex-col mt-12 gap-8 text-lg pl-4">
          <span>ABOUT</span>
          <span>EXPERIENCE</span>
          <span>PROJECTS</span>
        </div>
      </div>
      <div className="max-w-[42rem]">
        <p className="mb-25 px-6">
          I’m a Front End Developer passionate about crafting accessible, pixel-perfect user interfaces that balance thoughtful design with robust engineering. I love working at the intersection of design and development, creating experiences that not only look great but are also performant and user-friendly.
          <br /><br />
          Currently, I work as a Freelance Front-End Developer, helping clients build modern web applications using React, Next.js, and various state management and styling solutions. My focus is on delivering clean, testable, and maintainable code while ensuring an excellent user experience.
          <br /><br />
          In the past, I worked at Telkom Indonesia as a Senior Front-End Developer, where I contributed to building and maintaining applications that supported both internal operations and customer-facing platforms. There, I gained hands-on experience in performance optimization, accessibility, and collaboration within large, cross-functional teams.
          <br /><br />
          Outside of client work, I’m pursuing my studies and taking German language courses in the evenings. While also enjoying hiking, riding, traveling, and photography—interests that keep me inspired and fuel my creativity.
        </p>

        <div className="flex flex-col gap-6">
          {experiences.map(experience => {
            return <Experience
              key={experience.title}
              desc={experience.desc}
              title={experience.title}
              date={experience.date}
              links={experience.links} />
          })}

        </div>
      </div>
    </div>
    <div>
      <div className="sticky top-0 text-lg py-4 pl-4 bg-background-dark/75 backdrop-blur w-full">FEATURED PROJECTS</div>
      <div className="flex flex-col gap-12 mt-4">
        {projects.map(project => {
          return <Project key={project.title} title={project.title} stacks={project.stacks as [keyof typeof stacks]} image={project.image}>
            {project.desc}
          </Project>
        })}

      </div>
    </div>
  </Wrapper>
}

export default App