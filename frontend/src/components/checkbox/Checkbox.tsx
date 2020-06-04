import React from 'react';

import { Input, Wrapper, Text } from './CheckboxStyling';

type Props = {
    label: string;
    checked: boolean;
    name: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

export const Checkbox = ({ label, checked, name, onChange }: Props) => {
    return (
        <Wrapper>
            <Input
                name={name}
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <Text>{label}</Text>
        </Wrapper>
    );
};
