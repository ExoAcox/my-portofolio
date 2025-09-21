import { FaHandPointRight } from "react-icons/fa"




const Contact: React.FC = () => {
    return <div className="flex flex-col gap-1 text-base">
        <div className="flex items-center gap-2">Get in touch with me <FaHandPointRight /></div>
        <a href="mailto:anasarifin1995@gmail.com" target="_blank" className="w-fit relative pb-0.5 group">
            <span className="relative z-[2] px-1 group-hover:text-primary text-primary lg:text-secondary">anasarifin1995@gmail.com</span>
            <div className="absolute bottom-0 w-full h-0.5 bg-blue-500 group-hover:h-full duration-200" /></a>
        <a href="https://wa.me/628975926544" target="_blank" className="w-fit relative pb-0.5 group">
            <span className="relative z-[2] px-1 group-hover:text-primary text-primary lg:text-secondary">+62 897-5926-544</span>
            <div className="absolute bottom-0 w-full h-0.5 bg-blue-500 group-hover:h-full duration-200" /></a>
    </div>
}

export default Contact