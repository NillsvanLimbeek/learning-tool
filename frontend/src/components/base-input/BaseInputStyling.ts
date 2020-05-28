import styled, { css } from 'styled-components';
import { grey, blue, red, blueFocus, redFocus } from '../../styling';

export const BaseInputWrapper = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

    margin-bottom: 1.5rem;
`;

export const Label = styled.label`
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
`;

export const Input = styled.input<{ error: boolean }>`
    padding: 1rem;
    border: 1px solid ${grey};
    border-radius: 3px;
    transition: all 0.25s ease-in-out;

    &::placeholder {
        color: ${grey};
    }

    &:hover,
    &:focus {
        outline: none;
        border: 1px solid ${blue};
        transition: all 0.25s ease-in-out;
    }

    &:focus {
        box-shadow: 0 0 0 2px ${blueFocus};
    }

    /* error */
    ${({ error }) =>
        error &&
        css`
            border: 1px solid ${red};
            transition: all 0.25s ease-in-out;

            &:hover,
            &:focus {
                outline: none;
                border: 1px solid ${red};
                transition: all 0.25s ease-in-out;
            }

            &:focus {
                box-shadow: 0 0 0 2px ${redFocus};
            }
        `}
`;
