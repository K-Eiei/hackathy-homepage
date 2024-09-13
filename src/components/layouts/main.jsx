import React, { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";
import { ThemeProvider } from "../theme";
import Fonts from "../font";
import { HelmetProvider, Helmet } from "react-helmet-async";
import VoxelDogLoader from '../voxel-dog-3D/voxel-dog-loader';
import { AnimatePresence } from "framer-motion";

const Main = () => {

  const { pathname } = useLocation();

  if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
  }

  const location = useLocation(); // ใช้เพื่อติดตาม location ปัจจุบัน

  const LazyVoxelDog = React.lazy(() => import('../voxel-dog-3D/voxel-dog'));

  return (

    <HelmetProvider>
      <ThemeProvider>
        <Fonts />
        <Helmet key={"head"}>
          <title>{"Kongwarit Utapao - Homepage"}</title>
          <meta name="author" content="Kongwarit Utapao" />
        </Helmet>

        <Navbar path={pathname} />


        <div className="pt-14">
          {/* Model 3D */}
          {/* <div className="w-full h-full flex justify-center items-center">
            <div className=" w-[85%] md:w-[480px] h-[300px] mt-16 text-cta-text bg-card rounded-lg flex justify-center items-center"> Model </div>
          </div> */}

          {/* Model 3D */}
          <Suspense fallback={<VoxelDogLoader />}>
            <LazyVoxelDog />
          </Suspense>

          <Outlet />

          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>

  );
}

export default Main;