import React, {FC} from 'react';
import {ImageProps} from '../../types';
import {MDBView, MDBMask} from 'mdbreact';

export const ImageView:FC<ImageProps> = ({
    src='',alt='_',/*active=false,color='',*/className='',style={position:"absolute"}
}) => {
    className = `img-fluid${' '+className||''}`
    //color = `${color}-text` //TODO
    return (
        <MDBView hover>
            <img {...{src,alt,className,style}}/>
            <MDBMask className="flex-center" overlay="white-light">
                <p className="black-text" style={{fontSize:"1em"}}>{alt}</p>
            </MDBMask>
        </MDBView>
    )
};
/* props
  - alt:""
  - children
  - className: ""
  - src: ""
*/
