import React, { forwardRef } from 'react';
import './voxel-dog-style.css';

export const DogSpinner = () => (
    <div className="Spinner" />
);

// Custom Container with styles similar to Box from Chakra-UI
export const DogContainer = forwardRef(({ children }, ref) => (
    <div
        ref={ref}
        className="voxel-dog m-auto mt-[-20px] mb-[-40px] w-[280px] h-[280px] md:mt-[-60px] md:mb-[-140px] md:w-[480px] md:h-[480px] lg:mt-[-120px] lg:mb-[-180px] lg:w-[640px] lg:h-[640px] relative"
    // style={{
    //     margin: 'auto',
    //     marginTop: window.innerWidth <= 480 ? '-20px' : window.innerWidth <= 768 ? '-60px' : '-120px',
    //     marginBottom: window.innerWidth <= 480 ? '-40px' : window.innerWidth <= 768 ? '-140px' : '-180px',
    //     width: window.innerWidth <= 480 ? '280px' : window.innerWidth <= 768 ? '480px' : '640px',
    //     height: window.innerWidth <= 480 ? '280px' : window.innerWidth <= 768 ? '480px' : '640px',
    //     position: 'relative',
    // }}
    >
        {children}
    </div>
));

const Loader = () => {
    return (
        <DogContainer>
            <DogSpinner />
        </DogContainer>
    );
};

export default Loader;
