import React, { Component } from "react";
import Link from "./Link";

export default class Items extends Component {
  render() {
    return (
      <div>
        <h2>Items</h2>
        <ul>
          <li>
            <Link path="item" id={1}>Item #1</Link>
          </li>
          <li>
            <Link path="item" id={2}>Item #2</Link>
          </li>
          <li>
            <Link path="item" id={3}>Item #3</Link>
          </li>
          <li>
            <Link path="item" id={4}>Item #4</Link>
          </li>
        </ul>
      </div>
    );
  }
}
