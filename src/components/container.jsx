import { AnimatePresence } from "framer-motion";

const Container = ({ children, pt, mt = 0 }) => {
  if (typeof window !== "undefined") {
    window.history.scrollRestoration = "manual";
  }

  return (
    <div
      className={`w-full h-full flex justify-center px-8 md:px-0 pt-${pt} mt-${mt}`}
    >
      <div className="w-auto md:w-[36rem] h-auto ">{children}</div>
    </div>
  );
};

export default Container;
