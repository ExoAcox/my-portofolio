


interface Props {
    children: string
    permanent?: boolean
}

const SectionTitle: React.FC<Props> = ({ children, permanent }) => {
    return <div className={`${permanent ? "block" : "block lg:hidden"} sticky top-0 text-lg py-4 pl-4 bg-background-dark/75 backdrop-blur w-full z-3`}>{children}</div>
}

export default SectionTitle