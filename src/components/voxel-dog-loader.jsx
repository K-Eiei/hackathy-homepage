import React, { forwardRef } from "react";

export const DogSpinner = () => (
  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <div
      className="inline-block h-14 w-14 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-cta-text"
      role="status"
    ></div>
  </div>
);

// Custom Container with styles similar to Box from Chakra-UI
export const DogContainer = forwardRef(({ children }, ref) => (
  <div
    ref={ref}
    className="m-auto 
                 mt-[-20px] mb-[-40px] w-[280px] h-[280px]
                 md:mt-[-60px] md:mb-[-140px] md:w-[480px] md:h-[480px]
                 lg:mt-[-120px] lg:mb-[-200px] lg:w-[640px] lg:h-[640px]
                 relative"
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
