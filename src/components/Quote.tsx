import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa6";



const Quote: React.FC = () => {
    return <div className="">
        <p className="italic px-6 max-w-[560px] text-justify leading-6.5">
            <span className="relative">
                <span className="invisible w-6 inline-block"></span>
                <FaQuoteLeft className="absolute top-0 left-0" />
            </span>
            I understand that front-end tech evolves fast, and I see it as an opportunity to keep growing. I’m always ready to learn new stacks and flexible in adopting different libraries, so I can contribute effectively in any development environment.
            <span className="relative">
                <FaQuoteRight className="absolute top-0 -right-1 translate-x-full" />
            </span>
        </p>
    </div>

}

export default Quote