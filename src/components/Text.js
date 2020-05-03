import React from 'react';
//import Radium from 'radium';
import PropTypes from 'prop-types';
//import classNames from 'classnames';

const Mdmd = (props) => {
    const {color, style} = props;
    const className = (color?`${color}-text `:'')+props.className
    const state =  {className, color, style};
    return <span {...state}>{props.children}</span>
};

Mdmd.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.object,
};

Mdmd.defaultProps = {
    className: '',
    color:'',
    style:{},
};
export default Mdmd;
