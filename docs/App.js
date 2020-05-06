import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Demo from './Demo';
import * as Pages from './pages';
export default class App extends React.Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Demo} />
                    {Object.keys(Pages).map((key, i)=>
                        <Route key={key} exact path={'/'+key} component={Pages[key]} />
                    )}
                    <Route render={()=><h1>Not Found</h1>}/>
                </Switch>
            </Router>
        );
    }
};
