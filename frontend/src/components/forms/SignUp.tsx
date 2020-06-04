import React from 'react';
import axios from 'axios';

import { useAuth } from '../../context/auth/AuthContext';

import { Form, Input, Button } from 'antd';

export const SignUp = () => {
    const { createUserWithEmailAndPassword } = useAuth();
    const [form] = Form.useForm();

    const onSubmit = (values: any) => {
        const { email, password } = values;

        createUserWithEmailAndPassword(email, password)
            .then((res) => {
                console.log(res);
                form.resetFields();
            })
            .catch((err) => console.log(err));

        // createUserWithEmailAndPassword(signUp.email, signUp.password).then(
        //     (res: any) => {
        // // create user in db
        // const user: firebase.User = res.user;
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:5000/users',
        //     data: {
        //         username: user.email,
        //         email: user.email,
        //         _id: user.uid,
        //     },
        // })
        // .then((res) => console.log(res))
        // .catch((err) => console.log(err));
        //     },
        // );
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
