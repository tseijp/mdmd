import React, {FC} from 'react';
import {BaseProps} from '../types';
import {MDBBadge} from 'mdbreact';
export const Delete:FC<BaseProps> = ({
        children, className="", color="", style={}
    }) => {
    const colors = ["default","primary","success","info","warning","danger","light","dark"]
    color = colors.some(c=>c===color) ? color :"danger"
    return <MDBBadge {...{className,color,style}}>×{children}</MDBBadge>;
};
