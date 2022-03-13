import React, {FC,useMemo} from 'react';
import {BaseProps} from '../../types';
import {MDBListGroup} from 'mdbreact';

export const ListGroup:FC<BaseProps> = ({
        children, className='', color='elegant', style={}
    }) => {
    return useMemo(()=>
        <MDBListGroup {...{children, className, color, style:{margin:"auto auto",...style}}} color="light"/>
    , [children, className, color, style])

};
