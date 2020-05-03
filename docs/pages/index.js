import React from 'react';
import {MDBContainer,MDBFreeBird,MDBEdgeHeader} from 'mdbreact';
import Mdmd from '../../src';

import About     from './About.md';
import Basic     from './Basic.md';
import Component from './Component.md';
import Container from './Container.md';
import Content   from './Content.md';
import Grid      from './Grid.md';
import Help      from './Help.md';
import How       from './How.md';

const Root = (props) => {
    const style = {
        backgroundImage:"url('https://mdbootstrap.com/wp-content/uploads/2016/12/big-bundle1.jpg')",
        backgroundColor:"#123456",
        backgroundPosition:"center center",
        backgroundSize:"cover",
        filter:"blur(3px) opacity(.3) drop-shadow(5px -25px 50px blue) hue-rotate(-90deg) ",}
    return (
        <main>
            <MDBEdgeHeader style={style}>
            </MDBEdgeHeader>
            <MDBFreeBird>
                <MDBContainer {...props}>
                    {props.children}
                </MDBContainer>
            </MDBFreeBird>
        </main>
    )
}
const renderers = {root:Root}
const state = { renderers,}

const AboutPage     = (props) => <Mdmd {...state} path={About}    />
const BasicPage     = (props) => <Mdmd {...state} path={Basic}    />
const ComponentPage = (props) => <Mdmd {...state} path={Component}/>
const ContainerPage = (props) => <Mdmd {...state} path={Container}/>
const ContentPage   = (props) => <Mdmd {...state} path={Content}  />
const GridPage      = (props) => <Mdmd {...state} path={Grid}     />
const HelpPage      = (props) => <Mdmd {...state} path={Help}     />
const HowPage       = (props) => <Mdmd {...state} path={How}      />

export {
    AboutPage     as About  ,
    BasicPage     as Basic  ,
    ComponentPage as Component,
    ContainerPage as Container,
    ContentPage   as Content,
    GridPage      as Grid,
    HelpPage      as Help,
    HowPage       as How,
}
