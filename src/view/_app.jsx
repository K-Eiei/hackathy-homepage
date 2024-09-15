import { lazy, Suspense, useEffect } from "react";
import HomePage from "./index";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "../components/layouts/main";
import WorksPage from "./works";
import NotFound from "./_404";
import PostsPage from "./posts";
import WallpapersPage from "./wallpapers";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/navbar";
import { ThemeProvider } from "../components/theme";
import VoxelDogLoader from '../components/voxel-dog-3D/voxel-dog-loader';
import { HelmetProvider, Helmet } from "react-helmet-async";
import Fonts from "../components/font";
import Footer from "../components/footer";

const _app = ({ router }) => {

    if (typeof window !== 'undefined') {
        window.history.scrollRestoration = 'manual';
    }

    const location = useLocation(); // ใช้เพื่อติดตาม location ปัจจุบัน
    const LazyVoxelDog = lazy(() => import('../components/voxel-dog-3D/voxel-dog'));

    return (
        <HelmetProvider>
            <ThemeProvider>
                <Fonts />
                <Helmet key={"head"}>
                    <title>{"Kongwarit Utapao - Homepage"}</title>
                    <meta name="author" content="Kongwarit Utapao" />
                </Helmet>
                <Navbar path={location.pathname} />

                <div className="p-14">
                    <Suspense fallback={<VoxelDogLoader />}>
                        <LazyVoxelDog />
                    </Suspense>


                    <AnimatePresence
                        mode="wait"
                        initial={true}
                        onExitComplete={() => {
                            if (typeof window !== 'undefined') {
                                window.scrollTo({ top: 0 });
                                console.log("scroll to top");
                            }
                        }}
                    >
                        <Routes location={location} key={location.pathname}>
                            {/* <Routes > */}
                            {/* <Route path="/" element={<Layout />}> */}
                            <Route path="/" element={<HomePage />} />
                            {/* <Route index element={<HomePage />} /> */}
                            <Route path="/works" element={<WorksPage />} />
                            <Route path="/wallpapers" element={<WallpapersPage />} />
                            <Route path="/posts" element={<PostsPage />} />
                            <Route path="/*" element={<NotFound />} />
                            {/* </Route> */}
                        </Routes>
                    </AnimatePresence>
                </div>
                <Footer />
            </ThemeProvider>
        </HelmetProvider>
    );
};

export default _app;

// -----------------------------------------------------------------------------
// const App = () => {
//   return (
//       <AnimatePresence
//           mode="wait"
//           initial={true}
//           onExitComplete={() => {
//               if (typeof window !== 'undefined') {
//                   window.scrollTo({ top: 0 });
//                   console.log("scroll to top");
//               }
//           }}
//       >
//       <Routes location={location} key={location.pathname}>
//         <Route path="/" element={<Layout />}>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/works" element={<WorksPage />} />
//           <Route path="/wallpapers" element={<WallpapersPage />} />
//           <Route path="/posts" element={<PostsPage />} />
//           <Route path="/*" element={<NotFound />} />
//         </Route>
//       </Routes>
//     </AnimatePresence>
//   );
// }

// export default App; 