import SectionTitle from "./SectionTitle"

interface Props {
    ref: React.RefObject<HTMLDivElement | null>
}

const About: React.FC<Props> = ({ ref }) => {

    return <div className="scroll-mt-24" ref={ref} id="about">
        <SectionTitle>ABOUT</SectionTitle>
        <div className="mt-4 lg:mt-0 lg:px-6">
            <div className="hover:text-primary duration-500">I’m a Front End Developer passionate about crafting accessible, pixel-perfect user interfaces that balance thoughtful design with robust engineering. My strength lies in bridging the gap between design and development, bringing creative ideas to life with clean, efficient code while ensuring every product is performant, user-friendly, and scalable.</div>
            <br />
            <div className="hover:text-primary duration-500">In the past, I had the opportunity to work at Telkom Indonesia as a Front-End Developer, where I contributed to building and maintaining applications that supported both internal operations and customer-facing platforms. There, I gained industry best practices and hands-on experience in performance optimization, accessibility, and collaboration within large, cross-functional teams.</div>
            <br />
            <div className="hover:text-primary duration-500">Right now, I’m exploring new career opportunities while continuing to take on freelance projects that challenge me creatively and technically. I keep  improving my skills, experimenting with modern tools, and staying ahead in the fast-evolving landscape of web technologies. Ensuring every solution I build is not only reliable today but also ready for the future.</div>
            <br />
            <div className="hover:text-primary duration-500">Outside of work, I really enjoying hiking, riding, traveling, and photography interests that keep me inspired and fuel my creativity. While also learning and improving my language skills, especially English and German.</div>
        </div>
    </div>
}

export default About