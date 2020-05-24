import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

type Props = {
    showModal: boolean;
    setModal: (value: boolean) => void;
    children: ReactNode;
};

const Body = styled(motion.div)`
    position: absolute;
    left: 50%;

    border: 1px solid black;
    padding: 5rem;
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    height: 100vh;
    width: 100vw;
`;

export const Modal = ({ showModal, setModal, children }: Props) => {
    return (
        <AnimatePresence>
            {showModal && (
                <Body
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                >
                    <button onClick={() => setModal(false)}>Close...</button>
                    {children}
                </Body>
            )}
        </AnimatePresence>
    );
};
