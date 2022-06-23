import React, { Component } from "react";
import 'antd/dist/antd.min.css';
import { Col, Divider, Row } from "antd";



const style = { background: "#0092ff", padding: "8px 0" };
export class Grid extends Component {
  render() {
    return (
      <>
        <Divider orientation="left">Horizontal</Divider>
        <Row gutter={16}>   
          <Col className="gutter-row" md={6} sm={24}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" md={6} sm={24}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" md={6} sm={24}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" md={6} sm={24}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
        <Divider orientation="left">Responsive</Divider>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
        <Divider orientation="left">Vertical</Divider>
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
      </>
    );
  }
}

export default Grid;
