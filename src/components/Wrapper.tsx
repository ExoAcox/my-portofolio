
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { BiMailSend } from "react-icons/bi";

interface Props {
    children: React.ReactNode;
    contactInView: boolean;
}

const Wrapper: React.FC<Props> = ({ children, contactInView }) => {
    const [contactVisible, setContactVisible] = useState(false)
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (value) => {
        setContactVisible(value > 300)
    });

    const handleContact = () => {
        const element = document.getElementById("contact")
        console.log(element)
        element!.scrollIntoView({ behavior: "smooth" })
    }

    console.log(contactInView)


    return (
        <div className="relative scroll-mt-[4.5rem] max-w-dvw">
            <motion.button
                initial={{ translateX: "125%" }}
                animate={(contactVisible && !contactInView) ? { translateX: 0 } : {}}
                onClick={handleContact}
                className={`lg:hidden fixed top-4 right-4 z-10 flex items-center gap-1 bg-blue-500 py-1 px-2 rounded-xl text-primary`}>
                <BiMailSend className="size-5" />
                <span className="text-xs font-medium">Contact Me</span>
            </motion.button>
            <div className="mx-auto px-8 max-w-999 py-12 md:py-24">{children}</div>
        </div>
    );
};

export default Wrapper;
