//https://mdbootstrap.com/docs/react/navigation/navbar/
//https://mdbootstrap.com/docs/react/navigation/compositions/
//Full Page Intro with fixed, transparent Navbar↓
//https://mdbootstrap.com/previews/docs/latest/html/navigation/intro-fixed-transparent.html
//import { BrowserRouter as Router } from 'react-router-dom';
import React, {FC, Children, useState} from 'react';
import {BaseProps} from '../../types';
import {getarr as getArray,getText,getLink} from '../../utils'
//import PropTypes from 'prop-types';
import {MDBNavbar,/*MDBNavbarBrand,*/MDBNavbarNav,MDBNavItem,MDBNavLink,MDBNavbarToggler,MDBCollapse} from "mdbreact";
export const Navi:FC<BaseProps> = ( {className,color,style,...props}) => {
    const children = Children.toArray(props.children)
    const [isOpen, setIsOpen] = useState(false)
    const toggleCollapse=()=>setIsOpen(!isOpen)
    const state = {dark:true,scrolling:true,transparent:true,color,className,style}
    return (
        <MDBNavbar {...state} expand="md" fixed="top" >
            {/* TODO
            <MDBNavbarBrand href={getLink(children[0]?.props.children)}>
                <strong className="white-text">{getText(children[0]?.props.children)}</strong>
            </MDBNavbarBrand>
            */}
            <MDBNavbarToggler onClick={toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                <MDBNavbarNav left>
                {getArray(children).filter((c,i)=>i>0).map((c,i)=>
                    <MDBNavItem key={i}
                        active={window.location.href.match(getLink(c.props.children))?true:false}
                        onClick={()=>{window.location.href=getLink(c.props.children)}}>
                        <MDBNavLink  to="#">{getText(c.props)}</MDBNavLink>
                    </MDBNavItem>
                )}
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    );
};

/*
Mdmd.propTypes = {
    active: PropTypes.bool,
};

Mdmd.defaultProps = {
  active: false,
  className: '',
};
export default Mdmd;
*/
