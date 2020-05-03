import React from 'react';
//import Radium from 'radium';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
import {MDBBadge} from 'mdbreact';
const Delete = (props) => {
    const {className, color, style} = props;
    const state = {className, color, style}
    return <MDBBadge {...state}>×{props.children}</MDBBadge>;
};

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
export default Delete;
