import React, {FC,Children} from 'react';
import {getLevel} from '../../utils';
import {MDBIcon} from 'mdbreact';
import {ImageView, ImageProps} from './Image';

export const Image:FC<ImageProps> = ({children,alt='',...props}) => {
    const level = getLevel(children)//is_3?3:is_2?2:is_1?1:0
    if (alt.slice(0,1).match(':'))
        return <MDBIcon icon={alt.slice(1)}/>
    //if (src.match('https://youtube.com')) //TODO
    //    return <Embed {...state}/>
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
