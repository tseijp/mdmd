import React, {FC} from 'react';
import {BaseProps} from '../types';

export const Paragraph:FC<BaseProps> = ({
        children, className='', color='', style={}
    }) => {
    return <div {...{className,color,style}}>{children}</div>;
};
/*
Paragraph.propTypes = {
    className: PropTypes.string,
    color    : PropTypes.string,
    style    : PropTypes.object,
};

Paragraph.defaultProps = {
  className: '',
};
*/
