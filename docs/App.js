import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as Pages from './pages';

class App extends React.Component {
    render () {
        return (
            <Router>
                <Switch>
                    {Object.keys(Pages).map((key, i)=>
                        <Route key={key} exact path={'/'+key} component={Pages[key]} />
                    )}
                    <Route render={()=><h1>Not Found</h1>}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
