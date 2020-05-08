import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Demo from './Demo';
import * as Pages from './pages';
export default class App extends React.Component {
    render () {
        return (
            <Router>
                <Switch>
                    {Object.keys(Pages).map((key, i)=>
                        <Route key={key} exact path={'/mdmd/'+key} component={Pages[key]} />
                    )}
                    <Route component={Demo}/>
                </Switch>
            </Router>
        );
    }
};
