import React, { useState } from 'react';

import { useAuth } from '../../context/auth/AuthContext';

import {
    Header,
    Main,
    MenuWrapper,
    NavWrapper,
    SideMenu,
    variants,
} from './NavigationStyling';

import { NavButton } from '../nav-button/NavButton';

export const Navigation = () => {
    const { user, signOut } = useAuth();

    const [showMenu, setShowMenu] = useState(true);

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

                    {user && (
                        <>
                            <p>{user.email}</p>
                            <button onClick={() => signOut()}>Sign out</button>
                        </>
                    )}
                </Main>
            </MenuWrapper>
        </NavWrapper>
    );
};
