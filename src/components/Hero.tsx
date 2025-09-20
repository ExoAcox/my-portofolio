import { FaHandPointRight } from "react-icons/fa";


const Hero: React.FC = () => {
    return <div className="lg:sticky h-[calc(100dvh-12rem)] top-12 md:top-24 flex flex-col">
        <h1>Anas Arifin</h1>
        <h5>Front End Developer</h5>
        <span className="mt-12">I build accessible, pixel-perfect digital<br />experiences for the web.</span>
        <div className="hidden lg:flex flex-col mt-12 gap-8 font-medium text-sm">
            <div className="flex relative group items-center gap-3 text-base-light/50 hover:text-base-light cursor-pointer"><div className="h-0.25 w-10 bg-base-light/50 group-hover:bg-base-light group-hover:w-15" /><span>ABOUT</span></div>
            <div className="flex relative group items-center gap-3 text-base-light/50 hover:text-base-light cursor-pointer"><div className="h-0.25 w-10 bg-base-light/50 group-hover:bg-base-light group-hover:w-15" /><span>EXPERIENCE</span></div>
            <div className="flex relative group items-center gap-3 text-base-light/50 hover:text-base-light cursor-pointer"><div className="h-0.25 w-10 bg-base-light/50 group-hover:bg-base-light group-hover:w-15" /><span>PROJECTS</span></div>
        </div>
        <div className="mt-auto flex flex-col text-lg gap-1">
            <div className="flex items-center gap-2">Get in touch with me <FaHandPointRight /></div>
            <a href="mailto:anasarifin1995@gmail.com" target="_blank" className="w-fit relative pb-0.5 group">
                <span className="relative z-[2] px-1">anasarifin1995@gmail.com</span>
                <div className="absolute bottom-0 w-full h-0.5 bg-blue-500 group-hover:h-full duration-200" /></a>
            <a href="https://wa.me/628975926544" target="_blank" className="w-fit relative pb-0.5 group">
                <span className="relative z-[2] px-1">+62 897-5926-544</span>
                <div className="absolute bottom-0 w-full h-0.5 bg-blue-500 group-hover:h-full duration-200" /></a>
        </div>
    </div>
}

export default Hero