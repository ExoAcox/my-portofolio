interface Props {
    image: string;
    title: string;
    children: string;
    stacks: [keyof typeof stackData]
}

import stackData from "@constants/stacks";

const Project: React.FC<Props> = ({ image, title, children, stacks }) => {
    return <div className="flex gap-12">
        <div className="min-w-[600px] h-[400px] bg-red-400">
            <img src={image} />
        </div>
        <div>
            <h5>{title}</h5>
            <p className="mt-2 mb-4">{children}</p>
            <div className="flex flex-wrap gap-3 text-xs font-medium">
                {stacks.map(stack => {
                    return <a key={stack} href={stackData[stack].href} className="py-1 px-3 bg-sky-400/10 text-sky-300 rounded-xl">{stackData[stack].label}</a>
                })}</div>
        </div>
    </div>
}

export default Project