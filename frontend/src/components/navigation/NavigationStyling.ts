import styled from 'styled-components';
import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;

export const StyledHeader = styled(Header)`
    background-color: white;
`;

export const StyledSider = styled(Sider)`
    /* background-color: white; */
`;

export const StyledContent = styled(Content)`
    min-height: 28px;
    margin: 24px 16px;
    padding: 24px;

    background-color: white;
`;

export const Logo = styled.div`
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
`;
