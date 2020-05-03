import React from 'react';
//import Radium from 'radium';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
import {MDBCol, MDBRow} from 'mdbreact';

const Grid = (props) => {
    const {child} = props;
    const isBlock =(c)=> !c.key || (c.key.match('blockquote') || c.key.match('paragraph'))
    const renderChild =(child)=> {
        if (child instanceof Array && child.every(c=>isBlock(c)) ){
            return (
                <MDBRow>
                {child.map((c,i)=>
                    <MDBCol key={i}>{(c instanceof Array)?renderChild(c):c}</MDBCol>
                )}
                </MDBRow>
            )
        }
        return child;
    }
    return renderChild(child)
};

Grid.propTypes = {
    className: PropTypes.string,
    color    : PropTypes.string,
    style    : PropTypes.object,
};
Grid.defaultProps = {
};
export default Grid;

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
