import React from 'react';
import {MDBEdgeHeader,MDBFreeBird,MDBContainer} from 'mdbreact';
//import Mdmd from '../mdmd';    //production
import Mdmd from "../../src";  //develop&test
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
    color     :   "default-color" ,
}
const AboutPage    =()=><Mdmd {...state} md={About}    />
const BasicPage    =()=><Mdmd {...state} md={Basic}    />
const ComponentPage=()=><Mdmd {...state} md={Component}/>
const ContainerPage=()=><Mdmd {...state} md={Container}/>
const ContentPage  =()=><Mdmd {...state} md={Content}  />
const GridPage     =()=><Mdmd {...state} md={Grid}     />
const HelpPage     =()=><Mdmd {...state} md={Help}     />
const HowPage      =()=><Mdmd {...state} md={How}      />

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
