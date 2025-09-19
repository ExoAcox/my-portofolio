
import projects from "@constants/projects";
import type stacks from "@constants/stacks";
import stackData from "@constants/stacks";
import SectionTitle from "./SectionTitle";
import { HiMiniArrowUpRight } from "react-icons/hi2";

interface Props {
    image: string;
    title: string;
    children: string;
    href: string;
    stacks: [keyof typeof stackData]
}


const Card: React.FC<Props> = ({ image, title, children, stacks, href }) => {
    return <div className="flex gap-12 gap-y-6 flex-wrap">
        <div className="w-full max-w-[600px] h-[400px] bg-blue-300">
            <img src={image} alt="" />
        </div>
        <div className="flex-1">
            <a href={href} target="_blank">
                <h5 className="flex gap-1 group w-fit hover:text-sky-300">
                    {title}
                    <HiMiniArrowUpRight className="size-5 transition translate-y-2.5 group-hover:translate-y-1 group-hover:translate-x-1.5" />
                </h5>
            </a>
            <p className="mt-2 mb-4">{children}</p>
            <div className="flex flex-wrap gap-3 text-xs font-medium">
                {stacks.map(stack => {
                    return <a key={stack} href={stackData[stack].href} className="py-1 px-3 bg-sky-400/10 text-sky-300 rounded-xl">{stackData[stack].label}</a>
                })}</div>
        </div>
    </div>
}

const Project = () => {
    return <div>
        <SectionTitle permanent>FEATURED PROJECTS</SectionTitle>
        <div className="flex flex-col gap-24 lg:gap-12 mt-4">
            {projects.map(project => {
                return <Card key={project.title} title={project.title} href={project.href} stacks={project.stacks as [keyof typeof stacks]} image={project.image}>
                    {project.desc}
                </Card>
            })}
        </div>
    </div>
}

export default Project