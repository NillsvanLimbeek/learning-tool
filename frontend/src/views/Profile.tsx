import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';

import { useAuth } from '../context/auth/AuthContext';

const StyledForm = styled(Form)`
    width: 50%;
    margin: 0 auto;
`;

const layout = {
    labelCol: { span: 5 },
};

export const Profile = () => {
    const { user, signOut } = useAuth();

    if (user) {
        return (
            <StyledForm {...layout}>
                <Form.Item label="Name">
                    <Input />
                </Form.Item>

                <Form.Item label="E-mail" rules={[{ type: 'email' }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Password">
                    <Input.Password />
                </Form.Item>

                <Button type="primary" htmlType="submit" block>
                    Submit
                </Button>
                <Button type="default" onClick={() => signOut()} block>
                    Signout
                </Button>
            </StyledForm>
        );
    }

    return <h3>Something went wrong...</h3>;
};
