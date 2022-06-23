import React, { Component } from "react";
import 'antd/dist/antd.min.css';
import { Avatar, List } from "antd";
import "./chart.scss";


export class Chart extends Component {
  render() {
    return (
      <div>
        <List
          itemLayout="horizontal"
          dataSource={this.props.data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description={item.completed}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default Chart;
