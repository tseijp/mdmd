import React from 'react';
//import Radium from 'radium';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
import {MDBListGroup} from 'mdbreact';
const List = (props) => {
    const {className} = props;
    const state = {className};
    const style={margin:"auto auto"};
    return (
          <MDBListGroup {...state} style={style}>
              {props.children}
          </MDBListGroup>
    )

};

List.propTypes = {
    active: PropTypes.bool,
};

List.defaultProps = {
  active: false,
  className: '',
};
export default List;