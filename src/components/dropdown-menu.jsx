import { useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { useColorMode } from "./theme";
import { Link, useLocation } from "react-router-dom";

const MenuItem = ({ href, path, children, theme }) => {
    const active = path === href

    return (
        <Link
            to={href}
            className={`w-full px-3 py-2 text-base ${active ? theme === "light" ? "bg-[#FBD38D]/60" : "bg-white/5" : ""}`}
            preventScrollReset={true}
        >
            {children}
        </Link>
    )
}


const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useColorMode();

    const { pathname } = useLocation();
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.addEventListener('click', handleClickOutside);
        }
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
            document.body.removeEventListener('click', handleClickOutside);
        }
    };


    return (
        <div
            ref={dropdownRef}
            className={`w-[2.5rem] h-[40px] rounded-md  text-xs text-cta-btn-text flex md:hidden justify-center items-center duration-200 border-[1px] ${isOpen ? theme === "light" ? "bg-[#FBD38D]/40" : "bg-white/10" : ""} ${theme === "light" ? "border-black/30 " : "border-white/20"} relative`}
            onClick={() => toggleDropdown()}
        >
            <IoMenu className="w-5 h-5 text-cta-text" />

            <div className={`absolute top-full right-0 z-10 mt-2 w-56 text-cta-text  rounded-md border    ${theme === "light" ? "border-zinc-300 bg-white" : "dark:border-zinc-700 dark:bg-zinc-800"}  shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none  divide-zinc-400 dark:divide-zinc-700  transition transform origin-top-right ${isOpen
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95 pointer-events-none'
                } duration-200 ease-in-out`}

            >
                <div className="flex flex-col justify-start items-start pt-2">
                    <MenuItem href="/" path={pathname} theme={theme}>
                        About
                    </MenuItem >
                    <MenuItem href="/works" path={pathname} theme={theme}>
                        Works
                    </MenuItem >
                    <MenuItem href="/wallpapers" path={pathname} theme={theme}>
                        Wallpapers
                    </MenuItem >
                    <MenuItem href="/Posts" path={pathname} theme={theme}>
                        Posts
                    </MenuItem >
                </div>

            </div>

        </div>
    );
}

export default DropdownMenu; 