import {Router} from 'react-router-dom';
import React from 'react';
import getRouter from 'router/router.jsx';
import history from "router/history";
import { connect } from 'react-redux';
import { initItem } from '../../redux/actions';

class App extends React.Component{
  constructor(props){
    super(props);
    this.props.initItem([{name: 'item1', desc: 'item desc1', id: '1'}, {name: 'item2', desc: 'item desc2', id: '2'}]);
  }
  render() {
    return (
        <Router history={history}>
          {getRouter()}
        </Router>
    )
  }
}

const mapDispatchToProps = {
  initItem
};

export default connect(null, mapDispatchToProps)(App);
