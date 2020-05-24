import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import { NavButton } from '../NavButton';
import { Modal } from '../modal/Modal';

const NavWrapper = styled.div`
    display: flex;

    height: 100%;
`;

const Header = styled.div`
    height: 5rem;
`;

const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;

    height: 100%;
    width: 100%;
`;

const SideMenu = styled.nav<{ close: boolean }>`
    flex: 0 0 20rem;
    transition: all 0.25s ease-in-out;

    ${(props) =>
        props.close &&
        `
        flex: 0 0 5rem;
        transition: all 0.25s ease-in-out;
            `};
`;

const Main = styled.main`
    border-top: 1px solid black;
    border-left: 1px solid black;
    height: 100%;
`;

export const Navigation = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [showModal, setShowModal] = useState(false);

    return (
        <NavWrapper>
            <SideMenu close={showMenu}>
                <NavButton
                    icon="fas fa-tachometer-alt"
                    title="Dashboard"
                    showTitle={showMenu}
                />
            </SideMenu>

            <MenuWrapper>
                <Header></Header>
                <Main>
                    <p>{showMenu ? 'closed' : 'open'}</p>

                    <button onClick={() => setShowMenu(!showMenu)}>
                        open/close nav
                    </button>

                    <button onClick={() => setShowModal(true)}>
                        Show Modal!
                    </button>

                    <Modal showModal={showModal} setModal={setShowModal}>
                        This is a Modal!
                    </Modal>
                </Main>
            </MenuWrapper>
        </NavWrapper>
    );
};
