import { useState } from "react";
import { CiBoxList } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { LuClipboardList } from "react-icons/lu";
import { MdOutlineGavel, MdOutlineSecurity, MdOutlinePayment, MdHistory } from "react-icons/md"; // New icons
import { Button, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import LoggedInNavBar from "../../../../EscrowModule/Pages/LoggedInPages/LoggedInNavBar/LoggedInNavBar";

const { Header, Sider, Content } = Layout;

const MianLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          className="logo"
          style={{
            height: "64px",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <h2 className="text-white fs-5 text-center">
            <span className="lg-logo">TrustBridge</span>
            <span className="sm-logo">TB</span>
          </h2>
        </div>
        <Menu
          className="mt-2"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => {
            if (key === "EscrowHistory") {
              navigate(`/loggedin/${key}`);
            } else {
              navigate(key.startsWith("/") ? key : `/dashboard/${key}`);
            }
          }}
          items={[
            {
              key: "/dashboard",
              icon: <RxDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "catalog",
              icon: <IoCartOutline className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <IoCartOutline className="fs-4" />,
                  label: "Add Product",
                },
                {
                  key: "product-list",
                  icon: <CiBoxList className="fs-4" />,
                  label: "Product List",
                },
              ],
            },
            {
              key: "orders",
              icon: <LuClipboardList className="fs-4" />,
              label: "Orders",
            },
            {
              key: "Dispute",
              icon: <MdOutlineGavel className="fs-4" />,
              label: "Disputes",
            },
            {
              key: "escrow",
              icon: <MdOutlineSecurity className="fs-4" />,
              label: "Escrow",
            },
            {
              key: "PaymentHistory",
              icon: <MdOutlinePayment className="fs-4" />,
              label: "Payments",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: "0.2rem 1.5rem 0.5rem 0.75rem" }}>
          <LoggedInNavBar
            title={false}
            navColor={"inherit"}
            padd={false}
            isAdmin={false}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 56,
                color: "white",
              }}
            />
          </LoggedInNavBar>
        </Header>
        <Content
          style={{
            padding: "10px 24px",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MianLayout;
