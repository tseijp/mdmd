import React, {FC,useMemo} from 'react';
import {BaseProps} from '../../types';
import {getarr, getAnyCh, getAnyGr} from '../../utils';
import {ListGroup} from './ListGroup';
import {Navi} from './Navi';
import {Foot} from './Foot';
import {Drop} from './Drop';
export const List:FC<BaseProps> = ({
        children, className='', color='elegant', style={}
    }) => {
    const state = useMemo(()=>({
        children,className,color,style
    }),[children,className,color,style])
    if( getarr( children ).every((c:any)=>getAnyCh(c.props?.children,'link').length ) ){
        if ( getarr( children ).every(c=>getAnyGr(c.props?.children, 'link', 'strong').length) )
            return <Foot {...state}/>
        if ( getarr( children ).every(c=>getAnyGr(c.props?.children, 'link', 'emphasis').length) )
            return <Navi {...state}/>
        return <Drop {...state}/>
    }
    return <ListGroup>{children}</ListGroup>
/***
  * TODO : not used (migrate to table)
  * if( children.every(c=>getAnyChild(c.props?.children, 'image').length ) )
  *     return <Carousel {...state}/>
  * if( children.map(c=>getAnyGrand(c.props?.children, 'link', 'emphasis')).filter(a=>a.length).length )
  *     return <Pill {...state}/>
  * if( children.map(c=>getAnyGrand(c.props?.children, 'link', 'strong')).filter(a=>a.length).length )
  *   return <Tabs {...state}/>
***/
}
export {
    ListGroup,
    Navi,
    Foot,
    Drop,
};
/*props
props.depth  : 0
props.ordered: false
props.start  : null
props.tight  :false
props?.children
  - child (key=listItem)
  - cilld ...
    .props?.children
      - child(key=text and so)
*/
