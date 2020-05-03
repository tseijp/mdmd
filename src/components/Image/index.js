import React from 'react';
import {MDBIcon} from 'mdbreact';
import PropTypes from 'prop-types';

import Image from './Image';

const Mdmd = (props) => {
    const {alt,src,children,className,color,style} = props;
    const getArr=arr=>arr?(arr instanceof Array?arr:[arr]):[]
    const keys = getArr(children).map(el=>el.key).filter(k=>k);
    //const is_w= keys.every(key=>key.match('delete'))  //put by delete      ~~e.g.~~
    const is_1 = keys.every(key=>key.match('emphasis'))//put by 1 underbar  _e.g._
    const is_2 = keys.every(key=>key.match('strong'))  //put by 2 underbar __e.g.__
    const is_3 = [].concat(...getArr(props.children).map(el=>  //put by 3 underbar___e.g.___
        el.props.children instanceof Array?el.props.children.map(e=>e.key):[]
    )).every(key=>key.match('emphasis'));
    const level = is_3?3:is_2?2:is_1?1:0
    const state = {alt,src,children,level,className,color,style}
    //if (src.match('https://youtube.com'))
    //    return <Embed {...state}/>
    if (alt.slice(0,1).match(':'))
        return <MDBIcon icon={alt.slice(1)}/>
    return <Image {...state}/>
}
Mdmd.propTypes = {
    className: PropTypes.string,
    color    : PropTypes.string,
    style    : PropTypes.object,
};

Mdmd.defaultProps = {
    className:'',
    color    :'dafault',
};
export default Mdmd;
