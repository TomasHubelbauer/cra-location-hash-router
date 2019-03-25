import React, { Component } from "react";
import Link from "./Link";

type ItemProps = { id: number; }

export default class Item extends Component<ItemProps> {
  render() {
    return (
      <div>
        <h2>Item #{this.props.id}</h2>
        <ul>
          <li>
            <Link path="">Back home</Link>
          </li>
          <li>
            <Link path="items">Back to items</Link>
          </li>
        </ul>
      </div>
    );
  }
}
