import styled from 'styled-components';
import { blue, blueDark, white } from '../../styling';

export const Button = styled.button`
    border: none;
    border-radius: 3px;
    padding: 1rem;
    color: ${white};
    font-size: 1.4rem;
    background-color: ${blue};
    cursor: pointer;
    transition: all 0.25s ease-in-out;

    &:hover {
        background-color: ${blueDark};
        transition: all 0.25s ease-in-out;
    }
`;
