import React, {useMemo} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {MDBEdgeHeader,MDBFreeBird,MDBContainer} from 'mdbreact';
import * as serviceWorker from './serviceWorker';

import Mdmd from "../src";  //develop&test
import {Demo} from './Demo';
import * as Pages from './pages';

// MDBReact:Import style files into the src/index.js before the App.js file:
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const RootCustom = (props:any) => {
    const style = useMemo(()=>({
        backgroundImage:"url('https://mdbootstrap.com/wp-content/uploads/2016/12/big-bundle1.jpg')",
        backgroundColor:"#123456",
        backgroundPosition:"center center",
        backgroundSize:"cover",
        filter:"blur(3px) opacity(.3) drop-shadow(5px -25px 50px blue) hue-rotate(-90deg) ",
    }),[])
    return (
        <main>
            <MDBEdgeHeader style={style} />
            <MDBFreeBird>
                <MDBContainer {...props}>
                    {props.children}
                </MDBContainer>
            </MDBFreeBird>
        </main>
    )
}
export const App =()=> (
    <BrowserRouter>
        <Switch>
            { Object.keys(Pages).map((key)=>
                <Route key={key} exact path={'/mdmd/'+key}>
                    <Mdmd md={Pages[key]}
                        styleRoot={{padding:"500px"}}
                        renderers={{root: RootCustom}} />
                </Route>
            ) }
            <Route component={Demo}/>
        </Switch>
    </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
