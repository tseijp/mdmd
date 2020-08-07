import React, {FC} from 'react';
import {BaseProps} from '../types';
import {MDBListGroupItem} from 'mdbreact';
export const ListItem:FC<BaseProps> = ({ children, className='', style={}, ...props }) => {
    type Colors = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | undefined
    const colors= ["primary","secondary","success","danger","warning","info","light","dark"]
    const color = props.color && props.color in colors ? props.color as Colors: "success"
    return <MDBListGroupItem {...{children, className, color, style}} />
};

/*
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
*/
