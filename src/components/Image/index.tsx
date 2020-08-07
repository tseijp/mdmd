import React, {ReactChild as RC, FC} from 'react';
import {getLevel} from '../../utils';
import {MDBIcon} from 'mdbreact';
import {ImageView, ImageProps} from './Image';

export const Image:FC<ImageProps> = ({children,alt='',...props}) => {
    if (!children || alt.slice(0,1).match(':'))
        return <MDBIcon icon={alt.slice(1)}/>
    //if (src.match('https://youtube.com')) //TODO
    //    return <Embed {...state}/>
    console.log(children);
    const level = getLevel(children as RC)//is_3?3:is_2?2:is_1?1:0
    return <ImageView {...props} {...{alt,level,children}}/>
}
/*
Mdmd.propTypes = {
    className: PropTypes.string,
    color    : PropTypes.string,
    style    : PropTypes.object,
};

Mdmd.defaultProps = {
    className:'',
    color    :'dafault',
};
*/
