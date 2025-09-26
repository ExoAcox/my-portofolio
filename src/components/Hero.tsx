import Contact from "./Contact";


interface SectionProps {
    children: string;
    active: boolean;
    onClick: () => void;
}


const Section: React.FC<SectionProps> = ({ children, active, onClick }) => {
    return <div onClick={onClick} className={`flex relative group items-center gap-3 hover:text-primary cursor-pointer ${active && "text-primary"}`}>
        <div className={`h-0.25 w-10 group-hover:bg-primary group-hover:w-15 duration-200 ${active ? "bg-primary w-15" : "bg-secondary"}`} />
        <span>{children}</span>
    </div>
}

interface Props {
    active: string;
}


const Hero: React.FC<Props> = ({ active }) => {
    const handleClick = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" })
    }


    return <div className="lg:sticky lg:h-[calc(100dvh-12rem)] top-12 md:top-24 flex flex-col overflow-auto pr-8">
        <h1 className="text-primary text-5xl md:text-6xl">Anas Arifin</h1>
        <h2 className="text-primary font-medium mt-2 mb-6">Front End Developer</h2>
        <span className="max-w-[300px]">I build accessible, pixel-perfect digital experiences for the web.</span>
        <div className="hidden lg:flex flex-col my-18 gap-8 font-medium text-sm">
            <Section active={active === "about"} onClick={() => handleClick("about")}>ABOUT</Section>
            <Section active={active === "experience"} onClick={() => handleClick("experience")}>EXPERIENCE</Section>
            <Section active={active === "project"} onClick={() => handleClick("project")}>PROJECTS</Section>
        </div>
        <div className="hidden mt-auto lg:block">
            <Contact />
        </div>
    </div>
}

export default Hero