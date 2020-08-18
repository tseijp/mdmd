/***
  * REF : Full Page Intro with fixed, transparent Navbar↓
  * https://mdbootstrap.com/docs/react/navigation/navbar/
  * https://mdbootstrap.com/docs/react/navigation/compositions/
  * https://mdbootstrap.com/previews/docs/latest/html/navigation/intro-fixed-transparent.html
***/
import React, {FC, Children, useCallback, useState} from 'react';
import {BaseProps} from '../../types';
import {getarr as getArray,getText,getLink} from '../../utils'
import {MDBNavbar,MDBNavbarBrand,MDBNavbarNav,MDBNavItem,MDBNavLink,MDBNavbarToggler,MDBCollapse} from "mdbreact";
export const Navi:FC<BaseProps> = ( {
    className, color, style, ...props
}) => {
    const children = Children.toArray(props.children)
    const [isOpen, setIsOpen] = useState(false)
    const toggleCollapse = useCallback(()=>setIsOpen(p=>!p), [])
    return (
        <MDBNavbar {...{color,className,style}}
            expand="md" fixed="top" dark scrolling transparent>
            <MDBNavbarBrand href={getLink((children as any)[0].props.children)}>
                <strong className="white-text">{getText((children as any)[0].props.children)}</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                <MDBNavbarNav left>
                {getArray(children).filter((_:any,i:number)=>i>0).map((c,i)=>
                    <MDBNavItem key={i}
                        active={window.location.href.match(getLink(c.props?.children))?true:false}
                        onClick={()=>{window.location.href=getLink(c.props?.children)}}>
                        <MDBNavLink  to="#">{getText(c.props?.children)}</MDBNavLink>
                    </MDBNavItem>
                )}
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    );
};
