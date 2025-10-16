


interface Props {
    children: string
    permanent?: boolean
}

const SectionTitle: React.FC<Props> = ({ children, permanent }) => {
    return <div className={`${permanent ? "block" : "block lg:hidden"} sticky top-0 py-4 backdrop-blur w-full z-3 max-w-dwh`}>
        <label className="text-primary font-semibold text-base lg:text-lg">{children}</label>
    </div>
}

export default SectionTitle