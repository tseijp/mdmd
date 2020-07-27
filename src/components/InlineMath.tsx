import React, {FC} from 'react';
import {BaseProps} from '../types';
//import Radium from 'radium';
//import PropTypes from 'prop-types';
//import classNames from 'classnames';
import Math from './Math'

export const InlineMath = ({...props}) => {
    return <Math {...props} inline/>
}
