import React from 'react';

import { RegisterWrapper } from './RegisterStyling';

import { Card, Tabs } from 'antd';
import { SignUp } from '../../components';
import { SignIn } from '../../components';

const { TabPane } = Tabs;

export const Register = () => {
    return (
        <RegisterWrapper>
            <Card style={{ width: 350 }}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Sign In" key="1">
                        <SignIn />
                    </TabPane>
                    <TabPane tab="Sign Up" key="2">
                        <SignUp />
                    </TabPane>
                </Tabs>
            </Card>
        </RegisterWrapper>
    );
};
