//https://mdbootstrap.com/docs/react/components/dropdowns/
import React from 'react';
import PropTypes from 'prop-types';
import {MDBDropdown,MDBDropdownToggle,MDBDropdownMenu,MDBDropdownItem} from "mdbreact";

const Mdmd = (props) => {
    const {children,className,getArray,getText,getLink} = props;
    const state = {className}
    return (
        <MDBDropdown {...state}>
            <MDBDropdownToggle caret color="default">
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
