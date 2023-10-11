import React from "react";
import image1 from "../../../public/Med-Bank-Discount-web.webp";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { Carousel, Card, Row, Col, Tabs } from "antd";
import "../../App.css";

const { Meta } = Card;

const contentStyle = {
  width: "80%",
  height: "600px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
};

const cardStyle = {
  marginBottom: "24px", // Add vertical spacing of 2px between cards
  marginTop: "48px",
};

const HomeScreen = () => {
  return (
    <div className="home">
      <Carousel
        style={cardStyle}
        // afterChange={onChange}
      >
        <div>
          <Image src={image1} alt="image 1" style={contentStyle} />
        </div>
      </Carousel>
      <div className="tabs-container" >
        <Tabs
          defaultActiveKey="1"
          tabPosition="top"
          style={{
            height: 220,
          }}
          items={new Array(30).fill(null).map((_, i) => {
            const id = String(i);
            return {
              label: `Tab-${id}`,
              key: id,
              disabled: i === 28,
              children: `Content of tab ${id}`,
            };
          })}
        />
      </div>
      <div className="card-list">
        <Row gutter={16} justify="center">
          <Col span={6} style={cardStyle}>
            <Card
              cover={
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            ></Card>
          </Col>
          <Col span={6} style={cardStyle}>
            <Card
              cover={
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            ></Card>
          </Col>
          <Col span={6} style={cardStyle}>
            <Card
              cover={
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            ></Card>
          </Col>
          <Col span={6} style={cardStyle}>
            <Card
              cover={
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            ></Card>
          </Col>
          <Col span={6}>
            <Card
              cover={
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            ></Card>
          </Col>
          <Col span={6}>
            <Card
              cover={
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            ></Card>
          </Col>
          <Col span={6}>
            <Card
              cover={
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            ></Card>
          </Col>
          <Col span={6}>
            <Card
              cover={
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            ></Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomeScreen;
