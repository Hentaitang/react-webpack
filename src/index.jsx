import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from 'components/App/App.jsx';
import store from './redux/store';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";

const render = (Component) => {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <Component />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('app'));
};

render(App);

if (module.hot) {
  module.hot.accept('components/App/App.jsx', () => {
    const NextApp = require('components/App/App.jsx').default;
    render(NextApp);
  });
}
