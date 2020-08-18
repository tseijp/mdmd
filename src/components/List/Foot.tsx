//https://mdbootstrap.com/docs/react/navigation/footer/
import React, {FC} from 'react';
import {BaseProps} from '../../types';
import {getarr as getArray,getText,getLink} from '../../utils'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export const Foot:FC<BaseProps> = ({
        children, className='', color='', style={}
    }) => {
    className = 'footer-copyright text-center font-small py-3'+className;
    style = { maxWidth:"99vw",left:"50%",right:"50%",marginLeft:"-50vw",marginRight:"-50vw",
                    position:"relative",bottom:"0",overflow:"hidden",...style}
    const state ={className,color,style}
    return (
        <MDBFooter {...state}>
            <MDBContainer fluid>
                <MDBRow>
                    {getArray(children).map((c,i)=>
                        <MDBCol key={i}
                            onClick={()=>{window.location.href=getLink(c.props.children)}}>
                                {getText(c.props.children)}
                        </MDBCol>
                    )}
                </MDBRow>
            </MDBContainer>
        </MDBFooter>
    )
};
