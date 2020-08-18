import React, {FC, useCallback, useMemo} from 'react';
import {MDBCol, MDBRow} from 'mdbreact';
//import {BaseProps} from '../../types'

export const Grid:FC<any> = ({grid=null}) => {
    const isBlock =(c:any)=> 0
         || c instanceof Array
         || !!c?.key?.match('blockquote')
         || !!c?.key?.match('paragraph')
    const renderGrid =useCallback((arr:any)=>
        (arr instanceof Array && arr.every(c=>isBlock(c)) )
          ? <MDBRow>
                {arr.map((c,i)=>
                    <MDBCol key={`${i}-${c.length}`}>
                    {(c instanceof Array)
                        ? renderGrid(c)
                        : c
                    }</MDBCol>
                )}
                </MDBRow>
          : arr, [])
    return useMemo(()=>renderGrid(grid), [renderGrid, grid])
};
/* props- children : [blockquote, ...]
> if depth = 0 (no \n)
    props.children
      - c   (key=text)
        .props.children
          - c (key=None)
> if depth = 0 (include \n)
> if depth = 1 (include \n)
    props.children
      - c (key=blockquote)
        .props.children
          - c (key=paragraph)
            .props.children
              - c (key=text)
              - c (key=text)...
>if depth=1
    //bind depth=0
>?
    props.children
      - c (key=blockquote)
        .prosp.children
          - c (key=paragraph)
          - c
            .props.children
              - c (key=text)
              - c
              - c ...
*/
