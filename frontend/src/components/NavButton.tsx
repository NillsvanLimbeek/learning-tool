import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import { FlexAlign } from '../styling';

type Props = {
    icon: string;
    title: string;
    showTitle: boolean;
};

const NavButtonWrapper = styled.div`
    ${FlexAlign}

    padding: 5px 1rem;
`;

const Title = styled(motion.p)`
    margin: 0;
`;

const Icon = styled.i`
    margin-right: 1rem;
`;

export const NavButton = ({ icon, showTitle, title }: Props) => {
    return (
        <NavButtonWrapper>
            <Icon className={icon} />
            <AnimatePresence>
                {!showTitle && (
                    <Title
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {title}
                    </Title>
                )}
            </AnimatePresence>
        </NavButtonWrapper>
    );
};
