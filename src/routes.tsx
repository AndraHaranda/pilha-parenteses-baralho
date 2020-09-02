import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import index from './pages/Parenteses/index'

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route path= "/" exact component={index} />
    </Switch>
</BrowserRouter>
);

export default Routes;