import { lazy, Suspense, useMemo } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import { Helmet } from "react-helmet-async";
import VoxelDogLoader from "../voxel-dog-loader";
import Box from "../box";

const Main = ({ children, router }) => {
  if (typeof window !== "undefined") {
    window.history.scrollRestoration = "manual";
  }

  // const LazyVoxelDog = lazy(() => import('../voxel-dog'));VoxelDog
  const LazyVoxelDog = useMemo(() => lazy(() => import("../voxel-dog")), []);

  return (
    <Box css={"pb-8"}>
      <Helmet key={"head"}>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Kongwarit's homepage" />
        <meta name="author" content="hackathy" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Kongwarit Utapao" />
        <meta name="og:title" content="Kongwarit Utapao" />
        <meta property="og:type" content="website" />
        <meta name="author" content="Kongwarit Utapao" />
        <title>{"Kongwarit Utapao - Homepage"}</title>
      </Helmet>

      <Navbar path={router.pathname} />

      <div className="pt-14">
        {/* Model 3D */}
        <Suspense fallback={<VoxelDogLoader />}>
          <LazyVoxelDog />
        </Suspense>

        {children}

        <Footer />
      </div>
    </Box>
  );
};

export default Main;
