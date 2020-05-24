import React from 'react';
import styled from 'styled-components';

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

const Title = styled.p`
    margin: 0;
`;

const Icon = styled.i`
    margin-right: 1rem;
`;

export const NavButton = ({ icon, showTitle, title }: Props) => {
    return (
        <NavButtonWrapper>
            <Icon className={icon} />
            {!showTitle && <Title>{title}</Title>}
        </NavButtonWrapper>
    );
};
