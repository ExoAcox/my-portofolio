


interface Props {
    children: string
    permanent?: boolean
}

const SectionTitle: React.FC<Props> = ({ children, permanent }) => {
    return <div className={`${permanent ? "block" : "block lg:hidden"} sticky top-0 py-4 bg-background-dark backdrop-blur w-full z-3`}>
        <div className="w-dvw h-full absolute right-0 top-0 translate-x-full bg-background-dark/75" />
        <label className="text-primary font-semibold text-base lg:text-lg">{children}</label>
        <div className="w-dvw h-full absolute left-0 top-0 -translate-x-full bg-background-dark/75" />
    </div>
}

export default SectionTitle