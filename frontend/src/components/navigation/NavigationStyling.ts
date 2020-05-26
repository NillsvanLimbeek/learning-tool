import { motion } from 'framer-motion';
import styled from 'styled-components';

export const NavWrapper = styled.div`
    display: flex;

    height: 100%;
`;

export const Header = styled.div`
    height: 5rem;
`;

export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;

    height: 100%;
    width: 100%;
`;

export const SideMenu = styled(motion.nav)`
    margin-top: 5rem;
    overflow: hidden;
`;

export const variants = {
    open: { width: `20rem` },
    closed: { width: `5rem` },
};

export const Main = styled.main`
    border-top: 1px solid black;
    border-left: 1px solid black;
    height: 100%;
`;
