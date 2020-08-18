import React, {FC, useMemo} from 'react';
import {BaseProps} from '../../types';
import {getGrid} from '../../utils';
import {Grid} from './Grid';
import {MDBTypography,MDBBox} from 'mdbreact';
export const Blockquote:FC<BaseProps> = ({children, className='', color='', style={}}) => {
    const grid = useMemo(()=>
        getGrid(children as React.ReactElement)
    ,[children])
    if ( grid instanceof Array && grid.some((c:any)=>(c instanceof Array)) )
        return <Grid {...{className, color, style, grid}} />
    return  (
        <MDBTypography blockquote>
            <MDBBox tag="div" mb={0}>{grid}</MDBBox>
        </MDBTypography>
    )
};

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
