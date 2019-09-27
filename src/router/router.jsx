import React from 'react';
import { Switch, Route } from 'react-router-dom';

import loadable from '@loadable/component';

const LoadableComponent = function(componentType){
  return loadable(() => import(`pages/${componentType}/${componentType}.jsx`));
};

const getRouter = () => (
    <div>
      <Switch>
        <Route exact path="/" component={LoadableComponent('Home')} />
        <Route path="/page1" component={LoadableComponent('Page1')} />
        <Route path="/counter" component={LoadableComponent('Counter')} />
        <Route path="/userInfo" component={LoadableComponent('UserInfo')} />
      </Switch>
    </div>
);

export default getRouter;
