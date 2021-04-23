import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { Colors } from '../Theme';

const { Header, Content, Footer } = Layout;
export const ThemeLayout = (ComposedComponent, type = 'light') => (props) => {

    return (
        <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="light" mode="horizontal" >
        <Menu.Item  key="1"><Link  to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link  to="/">All Auctions</Link></Menu.Item>
        <Menu.Item key="3"><Link  to="/createauction">Create</Link></Menu.Item>
        <Menu.Item key="4"><Link  to="/category">Categories</Link></Menu.Item>

        <Menu.Item key="5"><Link  to="/myBiddings">My Biddings</Link></Menu.Item>

      </Menu>
    </Header>
    <Content style={{maxWidth: 1230,
    margin:'auto',
    paddingRight: 15,
    paddingLeft: 15 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">


      <ComposedComponent {...props} />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center',backgroundColor:Colors.primary,color:Colors.white,height:200,float:'inline-end',paddingTop:170 }}>Design ©2021 Created by Shamshir</Footer>
  </Layout>
    )  
}

export default ThemeLayout
