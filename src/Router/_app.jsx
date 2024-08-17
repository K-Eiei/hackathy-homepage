import React from "react";
import HomePage from "../view/index";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "../components/layouts/main";
import WorksPage from "../view/works";
import NotFound from "../view/_404";
import PostsPage from "../view/posts";
import WallpapersPage from "../view/wallpapers";
import { AnimatePresence } from "framer-motion";

// const AppContent = () => {
//   const location = useLocation();

//   return (
//     <Layout pathname={location.pathname}>
//       <AnimatePresence
//         mode="wait"
//         initial={true}
//         onExitComplete={() => {
//           if (typeof window !== 'undefined') {
//             window.scrollTo({ top: 0 });
//           }
//         }}
//       >
//         <Routes location={location} key={location.pathname}>
//           <Route path="/" element={<HomePage />} />
//           {/* <Route path="/works" element={<WorksPage />} />
//           <Route path="/wallpapers" element={<WallpapersPage />} />
//           <Route path="/posts" element={<PostsPage />} />
//           <Route path="*" element={<NotFound />} /> */}
//         </Routes>
//       </AnimatePresence>
//     </Layout>
//   );
// };

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes >
//         <Route path="/" element={<HomePage />} />
//         <Route path="/works" element={<WorksPage />} />
//         <Route path="/wallpapers" element={<WallpapersPage />} />
//         <Route path="/posts" element={<PostsPage />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };


const _app = () => {
    if (typeof window !== 'undefined') {
        window.history.scrollRestoration = 'manual';
    }

    const location = useLocation(); // ใช้เพื่อติดตาม location ปัจจุบัน

    return (
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
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/works" element={<WorksPage />} />
                    <Route path="/wallpapers" element={<WallpapersPage />} />
                    <Route path="/posts" element={<PostsPage />} />
                    <Route path="/*" element={<NotFound />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
};

export default _app;

// -----------------------------------------------------------------------------
// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/works" element={<WorksPage />} />
//           <Route path="/wallpapers" element={<WallpapersPage />} />
//           <Route path="/posts" element={<PostsPage />} />
//           <Route path="/*" element={<NotFound />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App; 