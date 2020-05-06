import React from 'react';
import {MDBEdgeHeader,MDBFreeBird,MDBContainer} from 'mdbreact';
//import Mdmd from './mdmd';  //production
import Mdmd from "../../src"; //develop&test
//import Demo from './Demo';
import About     from './About.md';
import Basic     from './Basic.md';
import Component from './Component.md';
import Container from './Container.md';
import Content   from './Content.md';
import Grid      from './Grid.md';
import Help      from './Help.md';
import How       from './How.md';

const RootCustom = (props) => {
    const style = {
        backgroundImage:"url('https://mdbootstrap.com/wp-content/uploads/2016/12/big-bundle1.jpg')",
        backgroundColor:"#123456",
        backgroundPosition:"center center",
        backgroundSize:"cover",
        filter:"blur(3px) opacity(.3) drop-shadow(5px -25px 50px blue) hue-rotate(-90deg) ",}
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
const state = {
    renderers : {root: RootCustom},
    styleRoot : {padding:"5000px"},
    color     :   "success-color" ,
}
const AboutPage     = (props) => <Mdmd {...state} md={About}    />
const BasicPage     = (props) => <Mdmd {...state} md={Basic}    />
const ComponentPage = (props) => <Mdmd {...state} md={Component}/>
const ContainerPage = (props) => <Mdmd {...state} md={Container}/>
const ContentPage   = (props) => <Mdmd {...state} md={Content}  />
const GridPage      = (props) => <Mdmd {...state} md={Grid}     />
const HelpPage      = (props) => <Mdmd {...state} md={Help}     />
const HowPage       = (props) => <Mdmd {...state} md={How}      />

//export default Demo;
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
