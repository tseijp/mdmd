import React, {FC} from 'react';
import {BaseProps} from '../types';

export const Text:FC<BaseProps> = ({
        children, className='', color='', style={}
    }) => {
    className = (color?`${color}-text `:'') + className
    return <span {...{children, className, color, style}} />
};

/*
Mdmd.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.object,
};

Mdmd.defaultProps = {
    className: '',
    color:'',
    style:{},
};
*/
