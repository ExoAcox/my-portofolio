


const Hero: React.FC = () => {
    return <div className="lg:sticky h-fit top-12 md:top-24 flex flex-col">
        <h1>Anas Arifin</h1>
        <h5>Front End Developer</h5>
        <span className="mt-12">I build accessible, pixel-perfect digital<br />experiences for the web.</span>
        <div className="hidden lg:flex flex-col mt-12 gap-8 text-lg pl-4">
            <span>ABOUT</span>
            <span>EXPERIENCE</span>
            <span>PROJECTS</span>
        </div>
    </div>
}

export default Hero