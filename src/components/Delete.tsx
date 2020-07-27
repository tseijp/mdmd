import React, {FC} from 'react';
import {BaseProps} from '../types';
//import Radium from 'radium';
//import PropTypes from 'prop-types';
//import classNames from 'classnames';
import {MDBBadge} from 'mdbreact';
export const Delete:FC<BaseProps> = ({children, ...props}) => {
    return <MDBBadge {...props}>×{children}</MDBBadge>;
};
/*
Delete.propTypes = {
    className: PropTypes.string,
    color    : PropTypes.string,
    style    : PropTypes.object,
};

Delete.defaultProps = {
//  active: false,
  className: '',
  color:'danger',
  style:{},
};
*/
