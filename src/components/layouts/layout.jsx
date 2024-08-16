import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";
import { ThemeProvider } from "../theme";
import { AnimatePresence } from 'framer-motion'
import Fonts from "../font";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Layout = () => {

  const { pathname } = useLocation();

  if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
  }

  return (
    <AnimatePresence
      mode="wait"
      initial={true}
      onExitComplete={() => {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0 })
          console.log("scroll to top")
        }
      }}
    >
      <HelmetProvider>
        <ThemeProvider>
          <Fonts />

          <Helmet key={"head"}>
            <title>{"Kongwarit Utapao - Homepage"}</title>
            <meta name="author" content="Kongwarit Utapao" />
          </Helmet>

          <Navbar path={pathname} key={"Navbar"} />

          {/* Model 3D */}
          <div className="w-full h-full flex justify-center items-center">
            <div className=" w-[85%] md:w-[480px] h-[300px] mt-16 text-cta-text bg-card rounded-lg flex justify-center items-center"> Model </div>
          </div>

          <Outlet key={"bodycomonents"} />

          <Footer key={"footer"} />


        </ThemeProvider>
      </HelmetProvider>
    </AnimatePresence>
  );
}

export default Layout