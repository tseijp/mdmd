import React from 'react';
//import Radium from 'radium';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
import {MDBContainer} from 'mdbreact';
const Root = (props) => {
    const {className, color, style} = props;
    const state = {className, color, style}
    return <MDBContainer {...state}>{props.children}</MDBContainer>;
};

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
export default Root;
/*props
  - children
*/
