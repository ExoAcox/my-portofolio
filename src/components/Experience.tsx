

import experiences from "@constants/experiences";
import { FaLink } from "react-icons/fa6";
import SectionTitle from "./SectionTitle";


interface CardProps {
    date: string;
    title: string;
    desc: string;
    links?: {
        label: string;
        href: string;
    }[]
}

const Card: React.FC<CardProps> = ({ date, title, desc, links }) => {
    return <div className="group flex flex-col md:flex-row gap-10 gap-y-1 rounded-md py-4 lg:px-6 sm:hover:bg-black/25 duration-500">
        <div className="w-[136px] mt-1.5 text-xs font-medium">{date}</div>
        <div className="flex-1 mb-1">
            <label className="font-bold text-base text-primary group-hover:text-tertiary">{title}</label>
            <p className="mt-2 mb-4 text-sm group-hover:text-primary">{desc}</p>
            <div className="flex flex-wrap gap-3 text-xs text-white max-w-[360px]">
                {links?.map(link => {
                    return <a href={link.href} target="_blank" key={link.href} className="flex items-center gap-1 border rounded px-2 py-1 text-tertiary"><FaLink /> {link.label}</a>
                })}
            </div>
        </div>
    </div>
}


interface Props {
    ref: React.RefObject<HTMLDivElement | null>
}

const Experience: React.FC<Props> = ({ ref }) => {
    return <div ref={ref} id="experience" className="scroll-mt-24">
        <SectionTitle>EXPERIENCE</SectionTitle>
        <div className="flex flex-col gap-6">
            {experiences.map(experience => {
                return <Card
                    key={experience.title}
                    desc={experience.desc}
                    title={experience.title}
                    date={experience.date}
                    links={experience.links} />
            })}
        </div>
    </div>
}

export default Experience