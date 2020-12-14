import React, {FC} from 'react';
import {TableProps} from '../../types'
import { MDBDataTable} from 'mdbreact';
export const Tables:FC<TableProps> = ({
        maxHeight="300px",
        bordered =false ,
        paging   =true , //pagination of Table and select data num
        searching=true , //able to search for table
        scrollX  =false, //able to scroll if overflow-x
        scrollY  =false, //able to scroll if overflow-y
        //sorting  :true ,//error TODO
        striped  =true ,
        small    =true ,
        data={},
        className='', color='', style={}
    }) => {
    const tableState = {bordered,maxHeight,paging,searching,scrollX,scrollY,small,striped}; //sorting TODO
    const state = {data,className,color,style,...tableState}
    return <MDBDataTable {...state} />
}
