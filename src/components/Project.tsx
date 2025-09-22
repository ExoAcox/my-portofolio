
import projects from "@constants/projects";
import type stacks from "@constants/stacks";
import stackData from "@constants/stacks";
import SectionTitle from "./SectionTitle";
import { HiMiniArrowUpRight } from "react-icons/hi2";

interface CardProps {
    image: string;
    title: string;
    desc: string;
    href: string;
    stacks: [keyof typeof stackData]
    links?: {
        label: string;
        href: string;
    }[]
}


const Card: React.FC<CardProps> = ({ image, title, desc, stacks, href, links }) => {
    return <div className="flex flex-col-reverse sm:pl-4 sm:pr-6 sm:py-4 rounded-md sm:flex-row gap-8 gap-y-6 group sm:hover:bg-black/25">
        <div className="w-full max-w-[260px] sm:max-w-[300px] h-fit max-h-[200px] border-2 border-secondary/50 group-hover:border-secondary overflow-hidden">
            <img src={image} alt="" />
        </div>
        <div className="flex-1 min-w-[300px]">
            <div className="flex gap-4 items-end justify-between">
                <a href={href} target="_blank">
                    <h4 className="flex items-end gap-1 group/link w-fit text-primary group-hover:text-tertiary">
                        {title}
                        <HiMiniArrowUpRight className="size-5 transition -translate-y-0.5 group-hover/link:-translate-y-1.5 group-hover/link:translate-x-1.5" />
                    </h4>
                </a>
                <div className="flex gap-4 text-sm -translate-y-1.5">
                    {links?.map(link => {
                        return <a href={link.href} key={link.href} target="_blank">
                            <span className="flex items-end gap-0.5 group/link w-fit hover:text-tertiary underline text-xs">
                                {link.label}
                                <HiMiniArrowUpRight className="size-3 transition translate-y-0.25 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                            </span>
                        </a>
                    })}
                </div>
            </div>
            <p className="mt-2 mb-4 text-sm group-hover:text-primary">{desc}</p>
            <div className="flex flex-wrap gap-3 text-xs font-medium">
                {stacks.map(stack => {
                    return <a key={stack} href={stackData[stack].href} target="_blank" className="py-1 px-3 bg-sky-400/10 text-tertiary rounded-xl">{stackData[stack].label}</a>
                })}</div>
        </div>
    </div>
}


interface Props {
    ref: React.RefObject<HTMLDivElement | null>
    contactInView: boolean;
}

const Project: React.FC<Props> = ({ ref, contactInView }) => {
    return <div className="relative z-[2] scroll-mt-24" ref={ref} id="project">
        {!contactInView && <SectionTitle>PROJECTS</SectionTitle>}
        <div className="flex flex-col gap-24 lg:gap-12 mt-4">
            {projects.map(project => {
                return <Card key={project.title}
                    title={project.title}
                    desc={project.desc}
                    href={project.href}
                    image={project.image}
                    links={project.links}
                    stacks={project.stacks as [keyof typeof stacks]}
                >
                </Card>
            })}
        </div>
    </div>
}

export default Project