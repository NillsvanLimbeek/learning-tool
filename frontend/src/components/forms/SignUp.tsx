import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import {
    AddUserVariables,
    AddUser as AddUserData,
} from './__generated__/AddUser';
import { User } from '../../lib/Types/User';

import { useAuth } from '../../lib';

import { Form, Input, Button } from 'antd';

const ADD_USER = gql`
    mutation AddUser($user: UserInput) {
        addUser(user: $user) {
            _id
            email
        }
    }
`;

export const SignUp = () => {
    const { createUserWithEmailAndPassword } = useAuth();
    const [addUser] = useMutation<AddUserData, AddUserVariables>(ADD_USER);
    const [form] = Form.useForm();

    const onSubmit = async (values: any) => {
        // TODO error handling
        const { email, password } = values;
        const { user } = await createUserWithEmailAndPassword(email, password);

        if (user && user.email) {
            const newUser: User = {
                _id: user.uid,
                email: user.email,
            };

            await addUser({ variables: { user: newUser } });
        }
    };

    return (
        <Form onFinish={onSubmit} form={form}>
            <Form.Item
                name="email"
                // TODO rules
                rules={[
                    {
                        // required: true,
                        // type: 'email',
                        message: 'Please input your e-mail!',
                    },
                ]}
            >
                <Input placeholder="E-mail" />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your e-mail!',
                    },
                ]}
            >
                <Input.Password placeholder="Password" />
            </Form.Item>

            <Button type="primary" htmlType="submit" block>
                Sign up
            </Button>
        </Form>
    );
};
