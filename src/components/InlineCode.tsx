import React, {FC} from 'react';
import {BaseProps} from '../types';
import {Code} from './Code'

export const InlineCode:FC<BaseProps> = ({...props}) => {
    return <Code {...props} inline/>
}
