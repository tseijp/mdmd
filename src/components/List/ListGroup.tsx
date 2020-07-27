import React, {FC} from 'react';
import {BaseProps} from '../../types';
import {MDBListGroup} from 'mdbreact';

export const ListGroup:FC<BaseProps> = ({
        children, className='', color='', style={}
    }) => {
    style = {margin:"auto auto",...style};
    return <MDBListGroup {...{children, className, style}} />

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
