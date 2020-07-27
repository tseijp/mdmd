import React, {Children, FC} from 'react';
import {BaseProps} from '../../types';
import {getChild} from '../../utils';
import {Grid} from './Grid';
//import Radium from 'radium';
//import PropTypes from 'prop-types';
//import classNames from 'classnames';
import {MDBTypography,MDBBox} from 'mdbreact';
export const Blockquote:FC<BaseProps> = ({children, className='', color='', style={}}) => {
    const child = getChild(children);
    if (child instanceof Array && child.every(c=>!(c instanceof Array))){
        return  <MDBTypography blockquote><MDBBox tag="div" mb={0}>{child}</MDBBox></MDBTypography>}
    return <Grid {...{className, color, style, child}}/>
};

/*
Blockquote.propTypes = {
    className: PropTypes.string,
    color    : PropTypes.string,
    style    : PropTypes.object,
};
Blockquote.defaultProps = {
    className: '',
    color:'',
    style:{},
};
*/

/*props
  - children : [blockquote, ]

>if depth = 0 (no \n)
props.children
  - child   (key=text)
    .props.children
      - child (key=None)

>if depth = 0 (include \n)

>>if depth = 1 (include \n)
props.children
  - child (key=blockquote)
    .props.children
      - child (key=paragraph)
        .props.children
          - child (key=text)
          - child (key=text)...

>>if depth=1
>  //bind depth=0
>>?
props.children
  - child (key=blockquote)
    .prosp.children
      - child (key=paragraph)
      - child
        .props.children
          - child (key=text)
          - child
          - child ...
*/
