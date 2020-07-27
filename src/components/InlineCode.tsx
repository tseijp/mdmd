import React, {FC} from 'react';
import {BaseProps} from '../types';
//import Radium from 'radium';
//import PropTypes from 'prop-types';
//import classNames from 'classnames';
import {Code} from './Code'

export const InlineCode:FC<BaseProps> = ({...props}) => {
    return <Code {...props} inline/>
}
