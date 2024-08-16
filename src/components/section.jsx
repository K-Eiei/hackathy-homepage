// src/components/Section.js
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

// สร้าง StyledDiv โดยใช้ motion.div และ styled-components
const StyledDiv = styled(motion.div)`
  
`;

const Section = ({ children, delay = 0 }) => (
    <StyledDiv
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay }}
    >
        {children}
    </StyledDiv>
);

export default Section;