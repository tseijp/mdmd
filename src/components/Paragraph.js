import React from 'react';
//import Radium from 'radium';
import PropTypes from 'prop-types';
//import classNames from 'classnames';

const Paragraph = (props) => {
    const {className,color,style} = props;
    const state = {className,color,style};
    return <div {...state}>{props.children}</div>;
};

Paragraph.propTypes = {
    className: PropTypes.string,
    color    : PropTypes.string,
    style    : PropTypes.object,
};

Paragraph.defaultProps = {
  className: '',
};
export default Paragraph;