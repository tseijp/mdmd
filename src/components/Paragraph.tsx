import React, {FC} from 'react';
import {BaseProps} from '../types';

export const Paragraph:FC<BaseProps> = ({
        children, className='', color='', style={padding:"0 25px 0 25px"},
    }) => {
    return <div {...{className,color,style}}>{children}</div>;
};
