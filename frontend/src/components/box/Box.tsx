import React, { ReactNode } from 'react';

import { BoxWrapper } from './BoxStyling';

type Props = {
    children: ReactNode;
};

export const Box = ({ children }: Props) => {
    return <BoxWrapper>{children}</BoxWrapper>;
};
