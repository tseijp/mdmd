import React from 'react';
import List from './List';
import Navi from './Navi';
import Foot from './Foot';
import Drop from './Drop';
//import Carousel from './Carousel';
import PropTypes from 'prop-types';

const Mdmd = (props) => {
    //grands:i want to know as g0 is btn? link? g0.child is ?
    //i want know g0 have 'link' child and g0 have 'strong' grandchild.
    const {children, className, color, style} = props;
    const getArray =arr=> arr?(arr instanceof Array?arr:[arr]).filter(a=>a):[]
    const getAnyChild =(props,key)=>getArray(props.children).filter(c=>c.key&&c.key.match(key))//[g0,..]or[]
    const getAnyGrand =(props,k1,k2)=>getAnyChild(props,k1).map(c=>getAnyChild(c.props,k2)).filter(g=>g.length)
    const getText=(props)=>getArray(props.children).map(c=>c.key&&c.key.match('link')?c.props.children:c)
    const getLink=(props)=>getArray(props.children).map(c=>c.key&&c.key.match('link')?c.props.href:'#!').filter(n=>n)[0]||'#!'
    const state = {className,color,style,children,getArray,getAnyChild,getText,getLink}
    if( children.every(c=>getAnyChild(c.props, 'link').length ) ){
        if ( children.every(c=>getAnyGrand(c.props, 'link', 'strong').length) )
            return <Foot {...state}/>
        if ( children.every(c=>getAnyGrand(c.props, 'link', 'emphasis').length) )
            return <Navi {...state}/>
        return <Drop {...state}/>
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
