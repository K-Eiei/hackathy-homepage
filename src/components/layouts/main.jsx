import { lazy, Suspense } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import { Helmet } from "react-helmet-async";
import VoxelDogLoader from '../voxel-dog-3D/voxel-dog-loader';
import Box from "../box";

const Main = ({ children, router }) => {

  if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
  }

  const LazyVoxelDog = lazy(() => import('../voxel-dog-3D/voxel-dog'));

  return (

    <Box pb={8}>
      <Helmet key={"head"}>
        <title>{"Kongwarit Utapao - Homepage"}</title>
        <meta name="author" content="Kongwarit Utapao" />
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
}

export default Main;