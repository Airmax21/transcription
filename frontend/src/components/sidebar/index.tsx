import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';

const { Sider } = Layout;

interface SidebarProps {
    collapsed: boolean,
    setCollapsed: (collapse: boolean) => void;
}

type MenuItem = Required<MenuProps>['items'][number];

const siderStyle: React.CSSProperties = {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarColor: 'unset',
};

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Dashboard', '1', <PieChartOutlined />),
    getItem('Pendaftaran', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />,
        [
            getItem('Team 1', '6'),
            getItem('Team 2', '8')
        ]),
    getItem('Laporan', '9', <FileOutlined />),
];

const SidebarComponent: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {

    return (
        <Sider
            breakpoint='lg'
            collapsible
            collapsed={collapsed}
            style={siderStyle}
            width={250}
            onCollapse={(value) => setCollapsed(value)}>
            <Menu
                theme='dark'
                mode="inline"
                defaultSelectedKeys={['4']}
                style={{ height: '100%', borderRight: 0 }}
                items={items} />
            
        </Sider>
    );
};

export default SidebarComponent;