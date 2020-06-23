import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../lib/Context/Auth/AuthContext';

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
    const { user } = useAuth();
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
                        <Link to={`/${user?._id}/dashboard`}>Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        <Link to={`/${user?._id}/videos`}>Videos</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UserOutlined />}>
                        <Link to={`/${user?._id}/profile`}>Profile</Link>
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
                    <PrivateRoute path="/:id/dashboard" component={Dashboard} />
                    <PrivateRoute path="/:id/videos" component={Videos} />
                    <PrivateRoute path="/:id/profile" component={Profile} />
                </StyledContent>
            </Layout>
        </Layout>
    );
};
