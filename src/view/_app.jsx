import { useLocation } from "react-router-dom";
import Layout from "../components/layouts/main";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "../components/theme";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Fonts from "../components/font";
import Component from "../router/routes";

export default function _app() {
  if (typeof window !== "undefined") {
    window.history.scrollRestoration = "manual";
  }

  const location = useLocation(); // ใช้เพื่อติดตาม location ปัจจุบัน
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Fonts />
        <Layout router={location}>
          <AnimatePresence
            mode="wait"
            initial={true}
            onExitComplete={() => {
              if (typeof window !== "undefined") {
                window.scrollTo({ top: 0 });
                // console.log("scroll to top");
              }
            }}
          >
            <Component location={location} key={location.pathname} />
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    </HelmetProvider>
  );
}
