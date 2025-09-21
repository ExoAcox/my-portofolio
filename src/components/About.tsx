import SectionTitle from "./SectionTitle"

interface Props {
    ref: React.RefObject<HTMLDivElement | null>
}

const About: React.FC<Props> = ({ ref }) => {

    return <div className="scroll-mt-24" ref={ref} id="about">
        <SectionTitle>ABOUT</SectionTitle>
        <div className="mt-4 lg:mt-0 lg:px-6">
            <div className="hover:text-primary duration-500">I’m a Front End Developer passionate about crafting accessible, pixel-perfect user interfaces that balance thoughtful design with robust engineering. I love working at the intersection of design and development, creating experiences that not only look great but are also performant and user-friendly.</div>
            <br />
            <div className="hover:text-primary duration-500">Currently, I work as a Freelance Front-End Developer, helping clients build modern web applications using React, Next.js, and various state management and styling solutions. My focus is on delivering clean, testable, and maintainable code while ensuring an excellent user experience.</div>
            <br />
            <div className="hover:text-primary duration-500">In the past, I worked at Telkom Indonesia as a Senior Front-End Developer, where I contributed to building and maintaining applications that supported both internal operations and customer-facing platforms. There, I gained hands-on experience in performance optimization, accessibility, and collaboration within large, cross-functional teams.</div>
            <br />
            <div className="hover:text-primary duration-500">Outside of client work, I’m pursuing my studies and taking German language courses in the evenings. While also enjoying hiking, riding, traveling, and photography—interests that keep me inspired and fuel my creativity.</div>
        </div>
    </div>
}

export default About