import React from 'react';
import ReactDom from 'react-dom';
import App from 'components/App/App.jsx'
import store from "./redux/store";
import {Provider} from "react-redux";

if (module.hot) {
  module.hot.accept()
}

const render = (Component) => {
  ReactDom.render(
      <Provider store={store}>
        <Component/>
      </Provider>,
    document.getElementById('app')
  )
};

render(App);
