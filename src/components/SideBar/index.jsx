import { motion, useCycle } from 'framer-motion'
import Navigation from './Navigation'
import MenuToggle from './MenuToggle'
import { useDimension } from './useDimension';
import { useRef } from 'react';

const sideBar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
}

export default function SideBar() {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null)
    const { height } = useDimension(containerRef);
    return (
        <div className='flex items-center justify-center w-full h-full overflow-hidden bg-slate-400 bg-gradient-to-r from-[#0055ff] to-[#0099ff]'>
            <motion.nav className='w-[300px] absolute top-0 left-0 bottom-0'
                initial={false} custom={height} animate={isOpen ? 'open' : 'closed'} ref={containerRef}
            >
                <motion.div className='w-[300px] bg-slate-100 absolute top-0 left-0 bottom-0'
                    variants={sideBar}></motion.div>
                <Navigation />
                <MenuToggle toggle={() => toggleOpen()} />
            </motion.nav>
        </div>
    )
}
