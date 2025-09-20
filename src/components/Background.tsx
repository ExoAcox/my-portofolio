
import { motion, useSpring } from "motion/react"
import { useEffect, useState } from "react"

interface Props {
    width: number;
    height: number;
    maxSize: number;
    background: string;
}

const Circle: React.FC<Props> = ({ width, height, maxSize, background }) => {


    const generateDuration = () => {
        return Math.floor(Math.random() * 10000) + 5000
    }

    const generateSize = () => {
        return Math.floor(Math.random() * maxSize) + (maxSize - (maxSize / 8))
    }

    const size = useSpring(generateSize(), { stiffness: 1, damping: 10 })

    const generateRandom = (max: number) => {
        return Math.floor(Math.random() * (max + (size.get() / 2))) + (size.get() / 2)
    }

    const x = useSpring(generateRandom(width), { stiffness: 1, damping: 10 })
    const y = useSpring(generateRandom(height), { stiffness: 1, damping: 10 })

    useEffect(() => {
        x.set((generateRandom(width)))
        y.set((generateRandom(height)))

        setInterval(() => {
            x.set((generateRandom(width)))
            y.set((generateRandom(height)))
        }, generateDuration())
    }, [])

    useEffect(() => {

        size.set(generateSize())

        setInterval(() => {
            size.set(generateSize())
        }, generateDuration())
    }, [])



    return <motion.div
        className={`${background} absolute -translate-full`}
        style={{ x, y, width: size, height: size }}
        animate={{ rotate: 360 }}
        transition={{
            rotate: {
                duration: 100,
                repeat: Infinity,
                ease: "linear"
            },
        }} />
}


const Background: React.FC = () => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    const maxSize = width > height ? height : width

    useEffect(() => {
        setWidth(document.documentElement.clientWidth)
        setHeight(document.documentElement.clientHeight)
    }, [])


    if (!width || !height) return null

    return <div className="fixed inset-0">
        <Circle width={width} height={height} maxSize={(maxSize / 10) * 9} background="bg-gray-400/15" />
        <Circle width={width} height={height} maxSize={(maxSize / 10) * 8} background="bg-red-100/7" />
        <Circle width={width} height={height} maxSize={(maxSize / 10) * 7} background="bg-blue-200/7" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
    </div>
}

export default Background