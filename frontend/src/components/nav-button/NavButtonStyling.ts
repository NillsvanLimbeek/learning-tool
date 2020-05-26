import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FlexAlign } from '../../styling';

export const NavButtonWrapper = styled.div`
    ${FlexAlign}

    padding: 5px 1rem;
`;

export const Title = styled(motion.p)`
    margin: 0;
`;

export const Icon = styled.i`
    margin-right: 1rem;
`;
