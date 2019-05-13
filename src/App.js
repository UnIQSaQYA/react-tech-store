import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome } from "react-icons/fa";
import styled from "styled-components";

export default class App extends Component {
  render() {
    return (
      <div>
        Hello from techstore
        <Button>Hello styled components</Button>
      </div>
    );
  }
}

const Button = styled.button`
  color: red;
  background: blue;
  font-size: 2rem;
`;
