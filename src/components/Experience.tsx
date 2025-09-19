

import experiences from "@constants/experiences";
import { FaLink } from "react-icons/fa6";
import SectionTitle from "./SectionTitle";


interface Props {
    date: string;
    title: string;
    desc: string;
    links?: {
        label: string;
        href: string;
    }[]
}

const Card: React.FC<Props> = ({ date, title, desc, links }) => {
    return <div className="flex flex-col md:flex-row gap-12 gap-y-1 py-4 lg:px-6">
        <div className="w-[136px] mt-1 text-sm">{date}</div>
        <div className="flex-1">
            <label className="font-bold text-base">{title}</label>
            <p className="mt-2 mb-4 text-sm">{desc}</p>
            <div className="flex flex-wrap gap-3 text-xs text-white max-w-[360px]">
                {links?.map(link => {
                    return <a href={link.href} target="_blank" key={link.href} className="flex items-center gap-1 border rounded px-2 py-1 text-sky-300"><FaLink /> {link.label}</a>
                })}
            </div>
        </div>
    </div>
}

const Experience = () => {
    return <div>
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