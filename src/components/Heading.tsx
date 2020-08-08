import React, {FC,ReactNode,useMemo} from 'react';
import {VarTypes,TagTypes,HeadingProps} from '../types';
import {MDBTypography} from 'mdbreact'

export const Heading:FC<HeadingProps> = ({
        level=1, variant='responsive', //error if none
        children, className='', color='', style={},
    }) => {
    const tag = useMemo(()=>`h${level}`                         as TagTypes,[level])
    const vari =useMemo(()=>`h${level}${variant?'-'+variant:''}`as VarTypes,[level,variant])
    return (
        <MDBTypography
        {...{tag, variant:vari,abbr:"false",
            children:children||null,
            className, color, style}}/>
    )
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
