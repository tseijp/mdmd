//https://mdbootstrap.com/docs/react/navigation/footer/
import React from 'react';
import PropTypes from 'prop-types';

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Mdmd = (props) => {
    const {children,color,getArray,getText,getLink} = props;
    const className = 'footer-copyright text-center font-small py-3'+props.className;
    const style = { maxWidth:"99vw",left:"50%",right:"50%",marginLeft:"-50vw",marginRight:"-50vw",
                    position:"relative",bottom:"0",overflow:"hidden",...props.style}
    const state ={className,color,style}
    return (
        <MDBFooter {...state}>
            <MDBContainer fluid>
                <MDBRow>
                    {getArray(children).map((c,i)=>
                        <MDBCol key={i}
                            onClick={()=>{window.location.href=getLink(c.props)}}>
                                {getText(c.props)}
                        </MDBCol>
                    )}
                </MDBRow>
            </MDBContainer>
        </MDBFooter>
    )
};

Mdmd.propTypes = {
    active: PropTypes.bool,
};

Mdmd.defaultProps = {
  active: false,
  className:'',
  color:"default-color",
};
export default Mdmd;
