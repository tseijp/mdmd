import React, {FC} from 'react';
import {BaseProps} from '../types';
import {MDBListGroupItem} from 'mdbreact';
export const ListItem:FC<BaseProps> = ({
    children, className='', style={padding:"0 50px"}, ...props
}) => {
    type Colors = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | undefined
    const colors= ["primary","secondary","success","danger","warning","info","light","dark"]
    const color = props.color && props.color in colors ? props.color as Colors: "light"
    return <MDBListGroupItem {...{children, className, color, style}} />
};
