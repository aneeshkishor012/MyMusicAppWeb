'use client'; // <-- Add this at the top
import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import SideDrawer from '@/app/Components/sideDrawer/sideDrawer';
import NavBar from '@/app/Components/navbar/navbar';
const { Header, Sider, Content } = Layout;
function HomePage() {

    return (
        <Layout>
            <NavBar />
            <SideDrawer/>
        </Layout>
    );
};
export default HomePage;