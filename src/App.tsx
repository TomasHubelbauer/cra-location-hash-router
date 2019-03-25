import React, { Component } from 'react';
import Home from './Home';
import Items from './Items';
import Item from './Item';
import Error from './Error';

export type Route =
  | { path: '' }
  | { path: 'items' }
  | { path: 'item', id: number }
  ;

export default class App extends Component {
  render() {
    const [path, id] = location.hash ? location.hash.slice(1).split('/') : ['', undefined];
    switch (path) {
      case '': return <Home />;
      case 'items': return <Items />;
      case 'item': return <Item id={Number(id)} />;
      default: return <Error route={location.hash} />;
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', _event => {
      // Render with the new URL so that the route gets picked up
      this.forceUpdate();
    });
  }
}
