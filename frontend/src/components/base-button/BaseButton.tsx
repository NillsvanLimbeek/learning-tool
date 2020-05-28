import React, { ReactNode } from 'react';

import { Button } from './BaseButtonStyling';

type Props = {
    children: ReactNode;
};

export const BaseButton = ({ children }: Props) => {
    return <Button>{children}</Button>;
};
