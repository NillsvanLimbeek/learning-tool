import React from 'react';
import { AnimatePresence } from 'framer-motion';

import { Icon, NavButtonWrapper, Title } from './NavButtonStyling';

type Props = {
    icon: string;
    title: string;
    showTitle: boolean;
};

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
