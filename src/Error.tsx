import React, { Component } from "react";
import Link from "./Link";

type ErrorProps = { route: string; }

export default class Error extends Component<ErrorProps> {
  render() {
    return (
      <div>
        <h2>Error</h2>
        <p>The route <code>{this.props.route}</code> was not found.</p>
        <ul>
          <li>
            <Link path="">Home</Link>
          </li>
        </ul>
      </div>
    );
  }
}
