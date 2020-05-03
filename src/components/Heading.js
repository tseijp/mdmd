import React from 'react';
import PropTypes from 'prop-types';
import { MDBTypography } from 'mdbreact'
const Heading = (props) => {
    const {abbr, active, variant, className, color, style} = props;
    const state = {abbr, active, className, color, style}
    const addvariant = variant?'-'+variant:''
    return <MDBTypography {...state}
                tag={"h"+props.level}
                variant={`h${props.level}${addvariant}`}>
                {props.children}</MDBTypography>;
};

Heading.propTypes = {
    className: PropTypes.string,
    color    : PropTypes.string,
    style    : PropTypes.object,
};

Heading.defaultProps = {
  //active: false,
  abbr:'false', //error if not here
  className: '',
  color:'',
  style:{},
  variant:'display'
};
export default Heading;

/*props
props.children
props.level
*/
