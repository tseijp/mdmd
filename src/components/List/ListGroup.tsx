import React, {FC,useMemo} from 'react';
import {BaseProps} from '../../types';
import {MDBListGroup} from 'mdbreact';

export const ListGroup:FC<BaseProps> = ({
        children, className='', color='', style={}
    }) => {;
    return useMemo(()=>
        <MDBListGroup {...{children, className, style:{margin:"auto auto",...style}}} />
    , [children, className, style])

};

/*
List.propTypes = {
    active: PropTypes.bool,
};

List.defaultProps = {
  active: false,
  className: '',
};
export default List;
*/
