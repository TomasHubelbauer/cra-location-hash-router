import React, { Component } from "react";
import { Route } from "./App";

export default class Link extends Component<Route> {
  render() {
    switch (this.props.path) {
      case 'item':
        return <a href={'#' + this.props.path + '/' + this.props.id}>{this.props.children}</a>;
      default:
        return <a href={'#' + this.props.path}>{this.props.children}</a>;
    }
  }
}
