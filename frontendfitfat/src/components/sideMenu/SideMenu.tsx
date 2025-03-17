import { motion } from "motion/react"
import { Menu } from "lucide-react"

export default function SideMenu() {
    return (
        <div className="h-screen flex">
            <div className=" bg-red-500 w-1/5">
                <h1>olha o texto aqui!</h1>
                <h2>txt</h2>

                <motion.div
                initial={{opacity:0,y:-50}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.5}} 
                className='text-4xl font-fbold mb-8'>
                  helcome to motion
                </motion.div>

                <motion.button
                whileHover={{scale: 1.1}}
                whileTap={{scale:0.95}}
                className='px-4 py-2 bg-blue-500 text-white rounded-md'>
                    <Menu size={48} strokeWidth={1.5} fill="green" />
                </motion.button>

                <Menu size={48} strokeWidth={1.5} fill="green" />




            </div>
        </div>
    )
}