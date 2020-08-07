import React from 'react';
//import Radium from 'radium';
import PropTypes from 'prop-types';
//import classNames from 'classnames';

const Mdmd = (props) => {
    //const {active, className} = props;
    return <div>COMING SOON</div>;
};

Mdmd.propTypes = {
    className: PropTypes.string,
    color    : PropTypes.string,
    style    : PropTypes.object,
};

Mdmd.defaultProps = {
  active: false,
  className: '',
};
export default Mdmd;
