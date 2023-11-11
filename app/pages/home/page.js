/* eslint-disable @next/next/no-img-element */
import React from "react";
import image1 from "../../../public/Med-Bank-Discount-web.webp";
import getAllMedicine from "@/app/services/getAllMedecine";
import {
  FileSearchOutlined,
  AuditOutlined,
  FileProtectOutlined
} from "@ant-design/icons";
import Image from "next/image";
import { Carousel, Card, Row, Col, Divider } from "antd";
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

export default async function HomeScreen() {
  const MedicineData = await getAllMedicine();
  return (
    <div className="home">
      <Carousel>
        <div>
          <Image src={image1} alt="image 1" style={contentStyle} />
        </div>
      </Carousel>
      <Divider orientation="center">Our Specialist</Divider>
      <Row justify="center" gutter={16}>
        <Col span={4}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src={
                  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                }
              />
            }
          ></Card>
        </Col>
        <Col span={4}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src={
                  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                }
              />
            }
          ></Card>
        </Col>
        <Col span={4}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src={
                  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                }
              />
            }
          ></Card>
        </Col>
        <Col span={4}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src={
                  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                }
              />
            }
          ></Card>
        </Col>
      </Row>
      <Row justify={"center"} align="middle" gutter={[16]}>
        <Col span={4}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src={
                  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                }
              />
            }
          ></Card>
        </Col>
        <Col span={4}>
          <div>
            <h1 style={{ color: "GrayText", fontWeight: "bold" }}>
              Hospital Karachi
            </h1>

            <p style={{ color: "GrayText" }}>
              In the process of internal desktop applications development, many
              different design specs and implementations would be involved,
              which might cause designers and developers difficulties and
              duplication and reduce the efficiency of development.
            </p>
          </div>
        </Col>
      </Row>
      <Divider orientation="center">We made it simple
     <p>
      how it <span style={{color:'blue', fontWeight:'bold'}}>WORKS</span>
      </p> 
      </Divider>
      <Row justify={"center"} align="middle" style={{padding:48}} gutter={16}>
        <Col span={4}>
          <span>
            <FileSearchOutlined
              twoToneColor="#eb2f96"
              style={{ color: "blue", fontSize: "50px" }}
            />
            <p style={{ color: "black" }}>
              Search
              <p style={{ fontWeight: "bold", fontSize: "20PX" }}>Doctor</p>
            </p>
          </span>
        </Col>
        <Col span={4}>
          <span>
            <AuditOutlined
              twoToneColor="#eb2f96"
              style={{ color: "blue", fontSize: "50px" }}
            />
            <p style={{ color: "black" }}>
            Get Instant
              <p style={{ fontWeight: "bold", fontSize: "20PX" }}>Appointment</p>
            </p>
          </span>
        </Col>
        <Col span={4}>
          <span>
            <FileProtectOutlined
              twoToneColor="#eb2f96"
              style={{ color: "blue", fontSize: "50px" }}
            />
            <p style={{ color: "black" }}>
            Leave Your
              <p style={{ fontWeight: "bold", fontSize: "20PX" }}>Feedback</p>
            </p>
          </span>
        </Col>
      </Row>
      <Divider orientation="center">Latest Article</Divider>
      <Row justify={"center"} align="middle" style={{padding:48}} gutter={16}>
        <Col span={4}>
        <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src={
                  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                }
              />
            }
          ></Card>
        </Col>
        <Col span={4}>
        <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src={
                  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                }
              />
            }
          ></Card>
        </Col>
        <Col span={4}>
        <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src={
                  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                }
              />
            }
          ></Card>
        </Col>
      </Row>
      

    </div>
  );
}
