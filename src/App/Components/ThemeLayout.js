import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
export const ThemeLayout = (ComposedComponent, type = 'light') => (props) => {

    return (
        <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" >
        <Menu.Item  key="1"><Link  to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link  to="/">All bids</Link></Menu.Item>
        <Menu.Item key="3"><Link  to="/createauction">Create</Link></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">


      <ComposedComponent {...props} />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Design ©2021 Created by Shamshir</Footer>
  </Layout>
    )  
}

export default ThemeLayout
