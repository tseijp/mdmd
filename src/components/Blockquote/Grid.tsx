import React, {FC} from 'react';
import {MDBCol, MDBRow} from 'mdbreact';
//import {BaseProps} from '../../types'

export const Grid:FC<any> = ({child=null}) => {
    const isBlock =(c:any)=> !c?.key || (c?.key?.match('blockquote') || c?.key?.match('paragraph'))
    const renderChild =(c:any)=> {
        if (c && c instanceof Array && c.every(c=>isBlock(c)) )
            return (
                <MDBRow>
                {c.map((c,i)=>
                    <MDBCol key={i}>
                    {(c instanceof Array)
                        ?renderChild(c)
                        :c
                    }</MDBCol>
                )}
                </MDBRow>
            )
        return c;
    }
    console.log(child)
    return renderChild(child)
};

/*
Grid.propTypes = {
    className: PropTypes.string,
    color    : PropTypes.string,
    style    : PropTypes.object,
};
Grid.defaultProps = {
};
*/

/*props
  - cren : [blockquote, ]

>if depth = 0 (no \n)
props.cren
  - c   (key=text)
    .props.cren
      - c (key=None)

>if depth = 0 (include \n)

>>if depth = 1 (include \n)
props.cren
  - c (key=blockquote)
    .props.cren
      - c (key=paragraph)
        .props.cren
          - c (key=text)
          - c (key=text)...

>>if depth=1
>  //bind depth=0
>>?
props.cren
  - c (key=blockquote)
    .prosp.cren
      - c (key=paragraph)
      - c
        .props.cren
          - c (key=text)
          - c
          - c ...
*/
