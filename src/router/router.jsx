import { Switch, Route } from 'react-router-dom';
import React from 'react';
import loadable from '@loadable/component';

const LoadableComponent = (componentType) => {
  return loadable(() => import(`pages/${componentType}/${componentType}.jsx`))
};

const getRouter = () => {
  return (
    <Switch>
      <Route exact={true} path='/' component={LoadableComponent('Items')}></Route>
      <Route exact={true} path='/item' component={LoadableComponent('NewItem')}></Route>
      <Route path='/item/:id' component={LoadableComponent('SetItem')}></Route>
    </Switch>
  )
};

export default getRouter;
