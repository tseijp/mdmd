import React, {FC} from 'react';
import {BaseProps} from '../types';
import {MDBContainer} from 'mdbreact';
export const Root:FC<BaseProps> = ({
        children, ...props
    }) => {
    return <MDBContainer {...props}>{children}</MDBContainer>;
};

/*
Root.propTypes = {
    className: PropTypes.string,
    color    : PropTypes.string,
    style    : PropTypes.object,
};

Root.defaultProps = {
    className: '',
    coor :'',
    style:{},
};
*/
