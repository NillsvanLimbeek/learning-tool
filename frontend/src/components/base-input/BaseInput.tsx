import React, { useState, useEffect } from 'react';

import { Input, Label, BaseInputWrapper } from './BaseInputStyling';

type Props = {
    type: string;
    name: string;
    value: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    label?: string;
    required?: boolean;
    placeholder?: string;
    error?: boolean;
};

export const BaseInput = ({
    label,
    type,
    name,
    value,
    required,
    error = false,
    placeholder,
    onChange,
}: Props) => {
    const [focus, setFocus] = useState(false);

    useEffect(() => {
        return value.length > 0 || focus ? setFocus(true) : setFocus(false);
    }, [value, focus]);

    return (
        <BaseInputWrapper>
            {label && <Label htmlFor={name}>{label}</Label>}
            <Input
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                required={required}
                error={error}
                onChange={onChange}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
        </BaseInputWrapper>
    );
};
