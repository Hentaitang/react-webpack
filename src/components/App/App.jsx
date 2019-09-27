import React from 'react';

import Nav from 'components/Nav/Nav.jsx';
import getRouter from "router/router.jsx";

export default class App extends React.Component{
  render() {
    return (
      <div>
        <Nav />
        {getRouter()}
      </div>
    )
  }
}
