import React, {FC} from 'react';
import {BaseProps} from '../../types';
import {getarr, getAnyCh, getAnyGr} from '../../utils';
import {ListGroup} from './ListGroup';
import {Navi} from './Navi';
import {Foot} from './Foot';
import {Drop} from './Drop';
//import Carousel from './Carousel';
//import PropTypes from 'prop-types';
export const List:FC<BaseProps> = ({
        children, className='', color='', style={}
    }) => {
    if( getarr( children ).every((c:any)=>getAnyCh(c.props.children,'link').length ) ){
        if ( getarr( children ).every(c=>getAnyGr(c.props.children, 'link', 'strong').length) )
            return <Foot {...{children,className,color,style}}/>
        if ( getarr( children ).every(c=>getAnyGr(c.props, 'link', 'emphasis').length) )
            return <Navi {...{children,className,color,style}}/>
        return <Drop {...{children,className,color,style}}/>
    }
    // not used (migrate to table)
    //if( children.every(c=>getAnyChild(c.props, 'image').length ) )
    //    return <Carousel {...state}/>
    //if( children.map(c=>getAnyGrand(c.props, 'link', 'emphasis')).filter(a=>a.length).length )
    //    return <Pill {...state}/>
    //if( children.map(c=>getAnyGrand(c.props, 'link', 'strong')).filter(a=>a.length).length )
    //    return <Tabs {...state}/>
    return <List>{children}</List>
}
export {
    ListGroup,
    Navi,
    Foot,
    Drop,
};
/*
Mdmd.propTypes = {
    className: PropTypes.string,
    color    : PropTypes.string,
    style    : PropTypes.object,
};

Mdmd.defaultProps = {
    className: '',
    color    : '',
    style    : {},
}
export default Mdmd;
export {
    List,
    Navi,
    Foot,
    Drop,
};
*/
/*props
props.depth  : 0
props.ordered: false
props.start  : null
props.tight  :false
props.children
  - child (key=listItem)
  - cilld ...
    .props.children
      - child(key=text and so)
*/
