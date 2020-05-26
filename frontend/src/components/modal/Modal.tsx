import React, { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Background, Body } from './ModalStyling';

type Props = {
    showModal: boolean;
    setModal: (value: boolean) => void;
    children: ReactNode;
};

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
