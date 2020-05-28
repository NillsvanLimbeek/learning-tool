import styled, { css } from 'styled-components';

import { FlexCenterAlign, blue, grey, black } from './../../styling';

export const RegisterWrapper = styled.div`
    ${FlexCenterAlign};

    width: 100vw;
    height: 100vh;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: 1.5rem;

    & > button {
        width: 100%;
    }
`;

export const Tab = styled.button<{ active: boolean }>`
    border: none;
    border-bottom: 1px solid transparent;
    background-color: transparent;
    padding: 5px 1rem;
    color: ${grey};
    transition: all 0.25s ease-in-out;
    cursor: pointer;

    &:hover {
        color: ${black};
        transition: all 0.25s ease-in-out;
    }

    &:focus {
        outline: none;
    }

    /* active */
    ${({ active }) =>
        active &&
        css`
            border-bottom: 1px solid ${blue};
            color: ${black};
            transition: all 0.25s ease-in-out;
        `}
`;
