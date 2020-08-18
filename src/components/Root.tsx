import React, {FC} from 'react';
import {BaseProps} from '../types';
import {MDBContainer} from 'mdbreact';
export const Root:FC<BaseProps> = ({
        children, style={padding:"0 0 0 0"}, ...props
}) => {
    return <MDBContainer style={style} {...props}>{children}</MDBContainer>;
};
