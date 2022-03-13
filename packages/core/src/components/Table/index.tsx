import React, {FC, useMemo} from 'react';
import {TableProps} from '../../types';
import {getarr,gettrs,getths,getcol,getrow,getkey,getIsX} from '../../utils'
import {Cards} from './Cards';
import {Tables} from './Tables';
import {Pills} from './Pills';
import {Modal} from './Modal';

export const Table:FC<TableProps> = ({
        columnAlignment=undefined,
        children, className='', color='', style={}, ...props
    }) => {
    const {columns, rows, keys} = useMemo(()=>{
        const heads   = getarr(children).filter(v=>v.key.match("tableHead"));
        const bodys   = getarr(children).filter(v=>v.key.match("tableBody"));
        const columns = gettrs(heads).map(h=>getths(h)).map(th=>getcol(th))[0];
        const rows    = gettrs(bodys).map(b=>getths(b)).map(th=>getrow(th));
        const keys    = gettrs(heads).map(v=>getths(v)).map(th=>getkey(th))[0];
        return {columns, rows, keys}
    }, [children])
    if ( keys.every(key=>key.match('image')) )
        return <Cards {...{columns,rows,keys,className,color,style}} argments={columnAlignment}/>
    if ( keys.every(key=>key.match('link')) )
        return (getIsX(columns, 'delete'))
            ? <Modal {...{columns, rows, keys, className, color, style}} argments={columnAlignment}/>
            : <Pills {...{columns, rows, keys, className, color, style}} isPill={getIsX(columns, 'emphasis')?true:false}/>
    return <Tables indexProps={props} data={ {columns,rows} }/>
};
