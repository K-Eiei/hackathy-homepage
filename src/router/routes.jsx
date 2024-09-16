import { Route, Routes } from "react-router-dom";
import HomePage from "../view";
import WorksPage from "../view/works";
import WallpapersPage from "../view/wallpapers";
import PostsPage from "../view/posts";
import NotFound from "../view/_404";

export default function Routers({ location }) {
    return (
        <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/wallpapers" element={<WallpapersPage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
}
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