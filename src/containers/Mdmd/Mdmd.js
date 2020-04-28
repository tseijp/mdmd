import * as Components from './import';
import React from 'react';
//import Radium from 'radium';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
//import MathJax from 'react-mathjax';
import ReactMarkdown from 'react-markdown';
//import RemarkMathPlugin from 'remark-math';

const Mdmd = (props) => {
    //const {active, className} = props;
    return (
        <ReactMarkdown {...props} renderes={ {...Components, ...props.renderes} }/>
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
