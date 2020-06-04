import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const { Header, Sider, Content } = Layout;

export const StyledHeader = styled(Header)`
    background-color: white;
`;

export const StyledSider = styled(Sider)`
    /* background-color: white; */
`;

export const StyledContent = styled(Content)`
    min-height: 28rem;
    margin: 2.4rem 1.6rem;
    padding: 2.4rem;

    background-color: white;
`;

export const Logo = styled.div`
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
`;
