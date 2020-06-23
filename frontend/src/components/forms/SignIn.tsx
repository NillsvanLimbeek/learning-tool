import React from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../lib';

import { Form, Input, Button, Checkbox } from 'antd';
import { Store } from 'antd/lib/form/interface';

export const SignIn = () => {
    const { signInWithEmailAndPassword } = useAuth();
    const history = useHistory();

    const [form] = Form.useForm();

    const onSubmit = async (values: Store) => {
        const { email, password, remember } = values;
        const rememberVal = remember ? 'local' : 'session';

        signInWithEmailAndPassword(email, password, rememberVal)
            .then((res) => {
                history.push('/');
                form.resetFields();
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <Form
            initialValues={{ remember: true }}
            onFinish={onSubmit}
            form={form}
        >
            {/* TODO rules */}
            <Form.Item
                name="email"
                rules={[
                    //     {
                    //         type: 'email',
                    //         message: 'The input is not valid E-mail!',
                    //     },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
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
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
                <Checkbox name="remember">Remember me</Checkbox>
            </Form.Item>

            <Button type="primary" htmlType="submit" block>
                Sign In
            </Button>
        </Form>
    );
};
