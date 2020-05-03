//https://mdbootstrap.com/docs/react/navigation/navbar/
//https://mdbootstrap.com/docs/react/navigation/compositions/
//Full Page Intro with fixed, transparent Navbar↓
//https://mdbootstrap.com/previews/docs/latest/html/navigation/intro-fixed-transparent.html
//import { BrowserRouter as Router } from 'react-router-dom';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {MDBNavbar,MDBNavbarBrand,MDBNavbarNav,MDBNavItem,MDBNavLink,MDBNavbarToggler,MDBCollapse} from "mdbreact";
const Mdmd = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const {children,className,getArray,getText,getLink} = props;
    const toggleCollapse=()=>setIsOpen(!isOpen)
    const state = {color:"default-color",dark:true, expand:"md",fixed:"top",scrolling:true,transparent:true,className}
    return (
        <MDBNavbar {...state}>
            <MDBNavbarBrand href={getLink(children[0].props)}>
                <strong className="white-text">{getText(children[0].props)}</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                <MDBNavbarNav left>
                {getArray(children).filter((c,i)=>i>0).map((c,i)=>
                    <MDBNavItem key={i}
                        active={window.location.href.match(getLink(c.props))?true:false}
                        onClick={()=>{window.location.href=getLink(c.props)}}>
                        <MDBNavLink  to="#">{getText(c.props)}</MDBNavLink>
                    </MDBNavItem>
                )}
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    );
};

Mdmd.propTypes = {
    active: PropTypes.bool,
};

Mdmd.defaultProps = {
  active: false,
  className: '',
};
export default Mdmd;
