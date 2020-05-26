import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Body = styled(motion.div)`
    position: absolute;
    left: 50%;
    z-index: 100;

    border: 1px solid black;
    padding: 5rem;
    background-color: white;
`;

export const Background = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;

    height: 100vh;
    width: 100vw;

    background: rgba(0, 0, 0, 0.2);
`;
