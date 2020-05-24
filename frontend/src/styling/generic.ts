import { css } from 'styled-components';

// TODO font family
export const Generic = css`
    @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600&display=swap');

    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        font-family: 'Work Sans', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
    }
`;
