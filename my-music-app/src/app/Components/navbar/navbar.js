import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Image from 'next/image';
import { GithubFilled, HomeFilled, InstagramFilled, UploadOutlined, UserOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const items = [
    {
        key: 1,
        icon: <HomeFilled />,
    },
    {
        key: 2,
        icon:  <InstagramFilled />,
    },
    {
        key: 3,
        icon: <GithubFilled />,
    },
    {
        key: 4,
        icon: <UserOutlined />
    }
]
const NavBar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            justifyContent:"flex-end"
          }}
        />
      </Header>
    </Layout>
  );
};
export default NavBar;