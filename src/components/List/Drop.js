//https://mdbootstrap.com/docs/react/components/dropdowns/
import React from 'react';
import PropTypes from 'prop-types';
import {MDBDropdown,MDBDropdownToggle,MDBDropdownMenu,MDBDropdownItem} from "mdbreact";

const Mdmd = (props) => {
    const {children,className,style,getArray,getText,getLink} = props;
    const state = {className,style}
    const color = props.color.replace('-color','')
    return (
        <MDBDropdown {...state}>
            <MDBDropdownToggle caret color={color}>
                {getText(children[0].props)}
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
            {getArray(children).filter((c,i)=>i>0).map((c,i)=>
                <MDBDropdownItem key={i}
                    onClick={()=>{window.location.href=getLink(c.props)}}>
                    {getText(c.props)||c.props.children}</MDBDropdownItem>
            )}
            </MDBDropdownMenu>
        </MDBDropdown>
    )
};

Mdmd.propTypes = {
    active: PropTypes.bool,
};

Mdmd.defaultProps = {
  active: false,
  className: '',
};
export default Mdmd;
