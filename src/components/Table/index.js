import React from 'react';
import PropTypes from 'prop-types';

import Cards from './Cards';
import Table from './Table';
import Pills from './Pills';
import Modal from './Modal';

const Mdmd = (props) => {
    const {className, color, style} = props;
    const getarr=arr=>arr?arr instanceof Array?arr:[arr]:[]
    const heads = getarr(props.children).filter(v=>v.key.match("tableHead"));
    const bodys = getarr(props.children).filter(v=>v.key.match("tableBody"));
    const gettrs=els=>[].concat(...els.map(el=>getarr(el.props.children)));
    const getths=row=>getarr(row.props.children).map(el=>getarr(el.props.children));
    const getcol=els=>els.map((c,i)=>( {label:c, field:""+i, sort:"asc", width:10} ));
    const getrow=els=>els.length?Object.assign( ...els.map((c,i)=>({[""+i]:c})) ):{};
    const getkey=els=>[].concat(...els.map(el=>el)).map(v=>v.key);
    const columns = gettrs(heads).map(v=>getths(v)).map(th=>getcol(th))[0];
    const rows    = gettrs(bodys).map(v=>getths(v)).map(th=>getrow(th));
    const keys    = gettrs(heads).map(v=>getths(v)).map(th=>getkey(th))[0];
    const state = {className, color, style, columns, rows, keys};
    const getAnyChild =(props,key)=>getarr(props.children).filter(c=>c.key&&c.key.match(key))//[g0,..]or[]
    //const getAnyGrand =(props,k1,k2)=>getAnyChild(props,k1).map(c=>getAnyChild(c.props,k2)).filter(g=>g.length)
    const getIsX=(els,key)=>els.every(el=>el.label.every(c=>getAnyChild(c.props,key).length) )
    if ( keys.every(key=>key.match('image')) )
        return <Cards {...state} argments={props.columnAlignment}/>
    if ( keys.every(key=>key.match('link')) ){
        if (getIsX(columns, 'delete'))
            return <Modal {...state} argments={props.columnAlignment}/>
        return <Pills {...state} isPill={getIsX(columns, 'emphasis')}/>
    }
    return <Table indexProps={props} data={ {columns,rows} }/>
};


Mdmd.propTypes = {
    className:PropTypes.string,
    color    :PropTypes.string,
    style    :PropTypes.object,
    bordered :PropTypes.bool,
    maxHeight:PropTypes.string,
    paging   :PropTypes.bool,
    searching:PropTypes.bool,
    scrollX  :PropTypes.bool,
    scrollY  :PropTypes.bool,
    small    :PropTypes.bool,
    sorting  :PropTypes.bool,
    striped  :PropTypes.bool,
};

Mdmd.defaultProps = {
    className:"",
    color:"",
    style:{},
    /*----------table----------*/
    maxHeight:"300px",
    bordered :false ,
    paging   :true , //pagination of Table and select data num
    searching:true , //able to search for table
    scrollX  :false, //able to scroll if overflow-x
    scrollY  :false, //able to scroll if overflow-y
    //sorting  :true ,//error
    striped  :true ,
    small    :true ,
};

export default Mdmd;
