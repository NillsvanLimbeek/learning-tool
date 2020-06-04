import styled from 'styled-components';

import { blue, grey } from '../../styling';

export const Text = styled.span`
    font-weight: 300;
    margin-top: 1px;
`;

export const Input = styled.input`
    height: 2rem;
    width: 2rem;

    margin-right: 1rem;
    appearance: none;
    border: 1px solid ${grey};
    border-radius: 3px;
    outline: none;
    background-color: transparent;
    transition: all 0.25s ease-in-out;
    cursor: pointer;

    &:checked {
        border: 1px solid ${blue};
        background-color: ${blue};
    }
`;

export const Wrapper = styled.label`
    position: relative;
    display: inline-flex;

    margin-bottom: 1.5rem;
    cursor: pointer;

    &:hover > ${Input} {
        border: 1px solid ${blue};
        transition: all 0.25s ease-in-out;
    }
`;
