import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, Row, Col, Space } from "antd";
import "../App.css";
import Image from "next/image";
import image from "../../public/logo.jpeg";
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";

const items = [
  {
    label: "Home",
    key: "home",
    icon: <MailOutlined />,
  },
  {
    label: "About Us",
    key: "app",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Covid-19",
    key: "SubMenu",
    icon: <SettingOutlined />,
  },
  {
    label: "Check Report",
    key: "food",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Gallery",
    key: "support",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Pharmacy",
    key: "care",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Search Doctors",
    key: "care",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Contact us",
    key: "care",
    icon: <AppstoreOutlined />,
  },
];

const Header = () => {
  return (
    <>
      <Row
        style={{
          backgroundColor: "#7A7A7A",
          display: "flex",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Col span={12}>
          Emergency Help!
          <p style={{ color: "#1d9dd9" }}>++92 21 349991-4</p>
        </Col>
        <Col span={12}>
          <Space>
            <HomeOutlined />
            <SettingFilled />
            <SmileOutlined />
            <SyncOutlined spin />
            <SmileOutlined rotate={180} />
            <LoadingOutlined />
          </Space>
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          padding: 30,
        }}
      >
        <Col span={6}>
          <Image src={image} alt="Logo" className="logo" />
        </Col>
        <Col span={18}>
          <Menu 
          mode="horizontal" items={items} />;
        </Col>
      </Row>
    </>
  );
};
export default Header;
