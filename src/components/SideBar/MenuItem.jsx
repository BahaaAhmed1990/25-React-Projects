import { motion } from 'framer-motion'
const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};
export default function MenuItem({ item }) {
    return (
        <motion.li className='list-none flex items-center cursor-pointer mb-5' variants={variants} whileHover={{ scale: '1.1' }}>
            <div className='w-[40px] h-[40px] rounded-full mr-5 border-[2px] border-solid border-red-600'></div>
            <div className='w-[200px] h-[20px] rounded-[5px] border-[2px] border-solid border-blue-600'></div>
        </motion.li>
    )
}
