import React from "react";
import "./Nav.scss";
import {  NavLink } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink  to="/" >
          Home
        </NavLink>
        <NavLink to="/todo"  >
          Todos
        </NavLink>
        <NavLink to="/about" >
          About
        </NavLink>
        <NavLink to="/users" >
          ListUser
        </NavLink>
        <NavLink to="/antd" >
          Antd
        </NavLink>
        {/* <a className="active" href="/">
          Home
        </a>
        <a href="/todo">Todos</a>
        <a href="/about">About</a> */}
      </div>
    );
  }
}

export default Nav;
