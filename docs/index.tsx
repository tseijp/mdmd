import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// MDBReact:Import style files into the src/index.js before the App.js file:
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
