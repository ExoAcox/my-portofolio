

interface Props {
    children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
    return (
        <div className="relative scroll-mt-[4.5rem] max-w-dvw">
            <div className="mx-auto px-8 max-w-999 py-12 md:py-24 lg:pb-0">{children}</div>
        </div>
    );
};

export default Wrapper;
