import React from 'react';
import { Row, Col, Layout, Divider, Space } from 'antd';

const { Footer } = Layout;

const FooterComponent = () => {
  return (
//   <Footer style={{ background: '#f0f2f5', padding: '24px 0' }}>
    <div style={{ background: '#76bc21', padding: '72px 0' }}>
      <Row gutter={24}>
        <Col xs={24} sm={12} md={6}>
          <div>
            <img src="/your-logo.png" alt="Logo" width="100" height="auto" />
          </div>
          <Space size="small">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </Space>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <h3>Categories</h3>
          <ul>
            <li><a href="#">Category 1</a></li>
            <li><a href="#">Category 2</a></li>
            <li><a href="#">Category 3</a></li>
          </ul>
        </Col>
        <Col xs={24} sm={12} md={4}>
          <h3>Contact Us</h3>
          <p>Phone: +1234567890</p>
          <p>Email: example@example.com</p>
        </Col>
        <Col xs={24} sm={12} md={4}>
          <h3>Contact Us</h3>
          <p>Phone: +1234567890</p>
          <p>Email: example@example.com</p>
        </Col>
        <Col xs={24} sm={12} md={4}>
          <h3>Contact Us</h3>
          <p>Phone: +1234567890</p>
          <p>Email: example@example.com</p>
        </Col>
      </Row>
      <Divider />
      <p style={{ textAlign: 'center', margin: 0 }}>
        © {new Date().getFullYear()} Your Website Name
      </p>
      </div> 
    // </Footer>
    )
};

export default FooterComponent;