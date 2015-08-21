import React from 'react'
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';

import App from 'catkin'

export default <Router history={history}>
    <Route path="/" component={App}>
    </Route>
</Router>
