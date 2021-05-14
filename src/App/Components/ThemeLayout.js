import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { Colors } from "../Theme";
import {
  HomeOutlined,
  CalendarOutlined,
  ProfileOutlined,
  FolderAddOutlined,
  AppstoreOutlined,
  UserOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;
export const ThemeLayout = (ComposedComponent, type = 1) => (props) => {
  return (
    <Layout className="layout">
      <Header style={{ backgroundColor: Colors.white }}>
        <div className="logo" />
        {type === 1 && (
          <>
        <Menu theme="light" mode="horizontal">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/home/shamshir">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<CalendarOutlined />}>
            <Link to="/home/shamshir">Auctions</Link>
          </Menu.Item>
          {/* <Menu.Item key="3" icon={<FolderAddOutlined />}>
            <Link to="/createauction">Create</Link>
          </Menu.Item> */}
          <Menu.Item key="4" icon={<AppstoreOutlined />}>
            <Link to="/category">Categories</Link>
          </Menu.Item>

          <Menu.Item key="5" icon={<ProfileOutlined />}>
            <Link to="/myBiddings">My Biddings</Link>
          </Menu.Item>
        </Menu>
        <Menu
          style={{ float: "right", marginTop: -66.5 }}
          theme="light"
          mode="horizontal"
        >
          <Menu.Item key="6" icon={<QuestionCircleOutlined />}>
            <Link to="/">How It Works</Link>
          </Menu.Item>

          {type === 1 && (
            <SubMenu key="7" title="Profile" icon={<UserOutlined />}>
              <Menu.Item key="setting:1"><Link to="/profile">View Profile</Link></Menu.Item>
              <Menu.Item key="setting:2">Sign Out</Menu.Item>
            </SubMenu>
          )}
        </Menu>
        </>
        )}
      </Header>
      <Content
        style={{
          maxWidth: 1230,
          margin: "auto",
          paddingRight: 15,
          paddingLeft: 15,
        }}
      >
        {type === 1 && (
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
        )}
        <div className="site-layout-content">
          <ComposedComponent {...props} />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: Colors.primary,
          color: Colors.white,
          height: 200,
          float: "inline-end",
          paddingTop: 170,
        }}
      >
        Design ©2021 Created by Shamshir
      </Footer>
    </Layout>
  );
};

export default ThemeLayout;
