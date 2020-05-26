import React, { useState } from 'react';

import {
    Header,
    Main,
    MenuWrapper,
    NavWrapper,
    SideMenu,
    variants,
} from './NavigationStyling';

import { NavButton } from '../nav-button/NavButton';
import { Modal } from '../modal/Modal';

export const Navigation = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [showModal, setShowModal] = useState(false);

    return (
        <NavWrapper>
            <SideMenu
                animate={showMenu ? 'closed' : 'open'}
                transition={{ ease: 'easeInOut' }}
                variants={variants}
            >
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
