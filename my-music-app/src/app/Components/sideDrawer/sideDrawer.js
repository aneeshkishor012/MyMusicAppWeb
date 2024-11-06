'use client'; // <-- Add this at the top
import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Flex, Layout, Menu, theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import RightSongList from '@/app/screens/rightSongList/rightSongList';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const { Header, Sider, Content } = Layout;
function SideDrawer() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const items = [
        {
            key: '1',
            icon: <UserOutlined />,
            label: 'Library',
        },
        {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'Browse',
        },
        {
            key: '3',
            icon: <UploadOutlined />,
            label: 'Songs',
        },
        {
            key: '4',
            icon: <UserOutlined />,
            label: 'Playlist',
        },
        {
            key: '5',
            icon: <VideoCameraOutlined />,
            label: 'Album',
        },
        {
            key: '6',
            icon: <UploadOutlined />,
            label: 'Artist',
        },
        {
            key: '7',
            icon: <UserOutlined />,
            label: 'Playlist',
        },
        {
            key: '8',
            icon: <VideoCameraOutlined />,
            label: 'Album',
        },
        {
            key: '9',
            icon: <UploadOutlined />,
            label: 'Artist',
        },
    ]
    const headerStyle = {
        display: 'flex',
        alignItems:"center",
        color: '#fff',
        height: 64,
        paddingInline: 48,
        lineHeight: '64px',
        backgroundColor: '#0e3e6d',
    };
    const contentStyle = {
        textAlign: 'center',
        // minHeight: 120,
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: '#0958d9',
    };
    const siderStyle = {
        textAlign: 'center',
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: '#1677ff',
    };
    const footerStyle = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#4096ff',
    };
    const layoutStyle = {
        borderRadius: 8,
        overflow: 'hidden',
        width: '100%',
        flex:1
    };
    return (
        <Layout style={{flex:1}}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <Header
                    style={{
                        padding: 0,
                        background: "#001529",
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                            color: "white"
                        }}
                    />
                </Header>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={items}
                />
            </Sider>
            <Layout style={layoutStyle}>
                <Header style={headerStyle}>
                    <Search
                        placeholder="input search text"
                        enterButton="Search"
                        size="large"
                        suffix={suffix}
                        onSearch={onSearch}
                        style={{width:"20vw"}}
                    />
                </Header>
                <Layout>
                    <Content style={contentStyle}>Content</Content>
                    <Sider width="25%" style={siderStyle}>
                        <RightSongList/>
                    </Sider>
                </Layout>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </Layout>
    );
};
export default SideDrawer;