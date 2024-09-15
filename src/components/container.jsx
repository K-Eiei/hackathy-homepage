import { AnimatePresence } from "framer-motion";

const Container = ({ children, pt, mt = 0 }) => {
    if (typeof window !== 'undefined') {
        window.history.scrollRestoration = 'manual';
    }

    return (
        <div className={`w-full h-full flex justify-center pt-${pt} mt-${mt}`}  >
            <div className="w-[20rem] md:w-[30rem] h-auto ">
                {children}
            </div>
        </div>
    );
}

export default Container;