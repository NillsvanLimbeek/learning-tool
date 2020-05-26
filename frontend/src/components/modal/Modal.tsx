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
    z-index: 100;

    border: 1px solid black;
    padding: 5rem;
    background-color: white;
`;

const Background = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;

    height: 100vh;
    width: 100vw;

    background: rgba(0, 0, 0, 0.2);
`;

export const Modal = ({ showModal, setModal, children }: Props) => {
    return (
        <AnimatePresence>
            {showModal && (
                <>
                    <Body
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                    >
                        <button onClick={() => setModal(false)}>
                            Close...
                        </button>
                        {children}
                    </Body>

                    <Background
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                </>
            )}
        </AnimatePresence>
    );
};
