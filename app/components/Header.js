/* eslint-disable @next/next/no-img-element */

import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@ant-design/icons";
  import { Menu, Row, Col, Input, Button } from "antd";
  import "../App.css"
  import image from "../../public/logo.png"

  
  const items = [
    {
      label: "Medicine",
      key: "medicine",
      icon: <MailOutlined />,
    },
    {
      label: "Baby & Mother Care",
      key: "app",
      icon: <AppstoreOutlined />,
    },
    {
      label: "Nutritions & Supplements",
      key: "SubMenu",
      icon: <SettingOutlined />,
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            {
              label: "Option 1",
              key: "setting:1",
            },
            {
              label: "Option 2",
              key: "setting:2",
            },
          ],
        },
        {
          type: "group",
          label: "Item 2",
          children: [
            {
              label: "Option 3",
              key: "setting:3",
            },
            {
              label: "Option 4",
              key: "setting:4",
            },
          ],
        },
      ],
    },
    {
      label: "Foods & Beverages",
      key: "food",
      icon: <AppstoreOutlined />,
    },
    {
      label: "Device & Support",
      key: "support",
      icon: <AppstoreOutlined />,
    },
    {
      label: "Personal Care",
      key: "care",
      icon: <AppstoreOutlined />,
    },
  ];
    
const Header = () => {
    return (
        <div className="header">
          <Row align="middle" justify="space-between" className="header-content">
            <Col span={6}>
              <img
                src={image}
                alt="Logo"
                className="logo"
              />
            </Col>
            <Col span={6}>
              {/* Search bar */}
              <Input
                placeholder="Search for products"
                prefix={<SearchOutlined />}
                className="search-bar"
              />
            </Col>
            <Col span={6} className="cart-button">
              {/* View Cart button */}
              <Button
                icon={<ShoppingCartOutlined />}
                size="large"
              >
                View Cart
              </Button>
            </Col>
          </Row>
          <Menu mode="horizontal" items={items} />
        </div>
      );
};
export default Header;
