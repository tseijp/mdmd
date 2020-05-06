import React from 'react';
//import Radium from 'radium';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
import {MDBListGroupItem} from 'mdbreact';
const ListItem = (props) => {
    const {className, style} = props;
    const colors= ["primary","secondary","success","danger","warning","info","light","dark"]
    const color = (props.color in colors)?props.color:null
    const state = {className, color, style}
    return <MDBListGroupItem {...state}>
            {props.children}</MDBListGroupItem>;
};

ListItem.propTypes = {
    className: PropTypes.string,
    color    : PropTypes.string,
    style    : PropTypes.object,
};

ListItem.defaultProps = {
  active: false,
  color:"light",
  className: '',
};
export default ListItem;