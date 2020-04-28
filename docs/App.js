import React from 'react';
import Mdmd from '../src';
;//import logo from './logo.svg';
//import './App.css';

function App() {
    const source = "# Hi \nmy name is t%sei"
    return (
        <div className="App">
            <Mdmd source={source}/>
        </div>
    );
}

export default App;
