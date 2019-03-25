import React, { Component } from "react";
import Link from "./Link";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <ul>
          <li>
            <Link path="">Home</Link>
          </li>
          <li>
            <Link path="items">Items</Link>
          </li>
        </ul>
      </div>
    );
  }
}
