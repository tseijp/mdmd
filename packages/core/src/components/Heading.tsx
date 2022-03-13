import React, {FC,useMemo,Children} from 'react';
import {HeadingProps} from '../types';
//import {MDBTypography} from 'mdbreact'
import {TagTypes} from '../types'
export const Heading:FC<HeadingProps> = ({
        level=1, /*responsive=true, */
        children, className='', color="", style={},
    }) => {
    const Tag = useMemo(()=>`h${level}` as TagTypes,[level])
    return (
        <div {...{color,style}}>
        {Children.map(children,(c,key)=>{
            return !(c as any)?.props?.children ? null :
            <Tag {...{className,key}}>{(c as any)?.props?.children}</Tag>
        })}
        </div>
    )
    // ***
    // *MDBTypegraphy Error
    // *    DOC1: https://mdbootstrap.com/docs/jquery/content/typography/
    // *    DOC2: https://mdbootstrap.com/docs/react/content/typography/
    // *    Code: https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design/blob/25ae803b9121efe64a02c5d9e4466cf6ea908a3f/src/components/Typography/Typography.js
    // *Warning: Failed prop type:
    // *   Invalid prop `children` of type `array` supplied to `a`,
    // *   expected `boolean`.
    // *Warning: Received `false` for a non-boolean attribute `abbr`.
    // *   If you want to write it to the DOM,
    // *   pass a string instead: abbr="false" or abbr={value.toString()}.
    // *   If you used to conditionally omit it with abbr={condition && value},
    // *   pass abbr={condition ? value : undefined} instead.
    // ***
    /*
    const tag = useMemo(()=>`h${level}` as TagTypes,[level])
    const variant = useMemo(()=>"responsive" as VarTypes,[])
    return <MDBTypography {...{
        tag, variant, abbr:"true", //error if none
        children, // warning
        className, color, style}}/>
    */
};
