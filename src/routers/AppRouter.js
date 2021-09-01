import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import firstExpensePage from '../components/firstExpensePage'
import secondExpensePage from '../components/secondPage'
import editPage from '../components/editPage'
import helpPage from '../components/helpPage'
import Header from '../components/Header'
import notFoundPage from '../components/notFoundPage'



const AppRouter =()=>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={firstExpensePage} exact={true} />
                <Route path='/create' component={secondExpensePage} />
                <Route path='/edit/:id' component={editPage} />
                <Route path='/help' component={helpPage} />
                <Route component={notFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;