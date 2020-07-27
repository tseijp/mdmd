import React, {FC} from 'react';
import {BaseProps} from '../types';
import { MDBTypography } from 'mdbreact'

export interface HeadingProps extends BaseProps {
    abbr   ?:boolean,
    active ?:boolean,
    variant?:''|'responsive',
    level  ?:number
}
type TagTypes = 'h1'|'h2'|'h3'|'h4'|'h5'
type VarTypes = TagTypes|'h1-responsive'|'h2-responsive'|'h3-responsive'|'h4-responsive'|'h5-responsive'
export const Heading:FC<HeadingProps> = ({
        level=1, variant='', abbr=false, active=true,
        children, className='', color='', style={},
    }) => {
    const state = {abbr, active, className, color, style}
    return <MDBTypography {...state}
                tag={`h${level}` as TagTypes}
                variant={`h${level}${variant?'-'+variant:''}` as VarTypes}>
                {children}</MDBTypography>;
};


/*
Heading.propTypes = {
    className: PropTypes.string,
    color    : PropTypes.string,
    style    : PropTypes.object,
};

Heading.defaultProps = {
  //active: false,
  abbr:'false', //error if not here
  variant:'display'
  className: '',
  color:'',
  style:{},
};
*/
/*props
props.children
props.level
*/
