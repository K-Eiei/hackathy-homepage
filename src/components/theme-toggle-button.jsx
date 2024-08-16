import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useColorMode } from './theme';
import { AiOutlineSun, AiFillMoon } from "react-icons/ai";

export default function ThemeToggle() {

    const { theme, toggleColorMode } = useColorMode();

    return (

        <AnimatePresence mode='wait' initial={false}>
            <motion.div
                style={{ display: 'inline-block' }}
                key={theme}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <div className=' w-auto h-auto flex justify-end'>
                    <button
                        className={`w-[2.5rem] h-[40px] rounded-md font-bold text-xs text-cta-btn-text flex justify-center items-center duration-200 ${theme === "light" ? "bg-[#3e3e3e] hover:bg-[#2f2f2f]" : "bg-[#FBD38D] hover:bg-[#f7ad56]"}`}
                        type="text"
                        onClick={() => toggleColorMode()}
                    >
                        {theme === "light" ? <AiFillMoon className='size-5 text-white' /> : <AiOutlineSun className='size-5 text-black' />}
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}