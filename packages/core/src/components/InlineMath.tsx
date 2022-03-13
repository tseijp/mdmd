import React, {FC} from 'react';
import {BaseProps} from '../types';
import {Math} from './Math'

export const InlineMath:FC<BaseProps> = ({...props}) => {
    return <Math {...props} inline/>
}
