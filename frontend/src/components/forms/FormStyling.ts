import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FlexCenter } from '../../styling/utils/flex';

export const Form = styled(motion.form)`
    ${FlexCenter}
    flex-direction: column;
`;

export const ErrorText = styled.p`
    font-size: 1.25rem;
    color: red;
    margin: 0;
`;
