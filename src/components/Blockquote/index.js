import React from 'react';
//import Radium from 'radium';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
import {MDBTypography,MDBBox} from 'mdbreact';
import Grid from './Grid';

const Blockquote = (props) => {
    const {className, color, style} = props;
    const getChild = (p, depth=0) => {
        const children = p.children instanceof Array?p.children:[p.children]
        return children && children.map(c=>c.key.match('blockquote')?getChild(c.props, depth+1):c)
    }
    const child = getChild(props);
    const state = {className, color, style, child}
    if (child instanceof Array && child.every(c=>!(c instanceof Array))){
        return  <MDBTypography blockquote><MDBBox tag="div" mb={0}>{child}</MDBBox></MDBTypography>}
    return <Grid {...state}/>
};

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
export default Blockquote;

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
