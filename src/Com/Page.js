import React, { Component } from "react";
import 'antd/dist/antd.min.css';
import { Pagination } from "antd";
import axios from "axios";
import Chart from "./Chart";
import "./chart.scss";
const API_URL = "https://jsonplaceholder.typicode.com/todos";
export class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUsers: [],
      show: []
    };
  }
  async componentDidMount() {
    let res = await axios.get(API_URL);
    console.log(res.data);
    this.setState({
      listUsers: res?.data || [],
      show: res.data.slice(0,5),
      total: res.data.length,
    });
  }
  changePage = (page, pageSize) => {
    var start = (page-1) * pageSize;
    var end = pageSize * page;
    this.setState(
        {
            show: this.state.listUsers.slice(start,end)
        }
    )
  };

  render() {
    return (
      <div>
        <Pagination
          defaultCurrent={1}
          total={this.state.total}
          showSizeChanger={true}
          defaultPageSize={5}
          
          pageSizeOptions={[5,10,15,20]}
          onChange={this.changePage}
          
        />
        <Chart data={this.state.show}></Chart>
      </div>
    );
  }
}

export default Page;
