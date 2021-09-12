import React, { Component } from "react";
import Card from "../components/Card";
import Pageheader from "../components/Pageheader"

class Reproduce extends Component {
  render() {
    return (
      <div className="page">
        <Pageheader />
        <Card />
      </div>
    );
  }
}

export default Reproduce;
