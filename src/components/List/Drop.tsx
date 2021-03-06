/***
  * REF
  * https://mdbootstrap.com/docs/react/components/dropdowns/
***/
import React, {FC} from 'react';
import {BaseProps} from '../../types';
import {getarr as getArray,getText,getLink} from '../../utils'
import {MDBDropdown,MDBDropdownToggle,MDBDropdownMenu,MDBDropdownItem} from "mdbreact";

export const Drop:FC<BaseProps> = ({
        children, className='', color='', style={}
    }) => {
    color = color.replace('-color','')
    const state = {className,style}
    return (
        <MDBDropdown {...state}>
            <MDBDropdownToggle caret color={color}>
                {getText(getArray(children)[0]?.props?.children)}
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
            {getArray(children).filter((_,i:number)=>i>0).map((c,i)=>
                <MDBDropdownItem key={i}
                    onClick={()=>{window.location.href=getLink(c.props?.children)}}>
                    {getText(c.props?.children)||c.props?.children}</MDBDropdownItem>
            )}
            </MDBDropdownMenu>
        </MDBDropdown>
    )
};
