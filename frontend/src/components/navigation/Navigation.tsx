import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DashboardOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

import { PrivateRoute } from '../';
import { Dashboard, Profile, Videos } from '../../views';

import {
    StyledHeader,
    Logo,
    StyledSider,
    StyledContent,
} from '../Navigation/NavigationStyling';

export const Navigation = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => setCollapsed(!collapsed);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <StyledSider
                trigger={null}
                collapsible
                collapsed={collapsed}
                theme="dark"
            >
                <Logo />

                <Menu mode="inline" defaultSelectedKeys={['1']} theme="dark">
                    <Menu.Item key="1" icon={<DashboardOutlined />}>
                        <Link to="/dashboard">Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        <Link to="/videos">Videos</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UserOutlined />}>
                        <Link to="/profile">Profile</Link>
                    </Menu.Item>
                </Menu>
            </StyledSider>

            <Layout>
                <StyledHeader>
                    {collapsed ? (
                        <MenuUnfoldOutlined
                            className="trigger"
                            onClick={() => toggle()}
                        />
                    ) : (
                        <MenuFoldOutlined
                            className="trigger"
                            onClick={() => toggle()}
                        />
                    )}
                </StyledHeader>

                <StyledContent>
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <PrivateRoute path="/videos" component={Videos} />
                    <PrivateRoute path="/profile" component={Profile} />
                </StyledContent>
            </Layout>
        </Layout>
    );
};
