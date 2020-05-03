import React from 'react';
//import PropTypes from 'prop-types';
import { MDBDataTable} from 'mdbreact';
const Table = (props) => {
    const {indexProps, data, className, color, style} = props;
    const {bordered,maxHeight,paging,searching,scrollX,scrollY,small,sorting,striped} = indexProps;
    const tableState = {bordered,maxHeight,paging,searching,scrollX,scrollY,small,sorting,striped};
    const state = {data,className,color,style,...tableState}
    return <MDBDataTable {...state} />
}
export default Table;
