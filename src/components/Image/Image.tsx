import React, {FC} from 'react';
import {ImageProps} from '../../types';
//import Radium from 'radium';
//import PropTypes from 'prop-types';
//import classNames from 'classnames';
import {MDBView, MDBMask} from 'mdbreact';

export const ImageView:FC<ImageProps> = ({
    src='',alt='',active=false, color='',className='',style={position:"absolute"}
}) => {
    className = `img-fluid ${className||''}`
    color = `${color}-text` //TODO
    return (
        <MDBView hover>
            <img alt="" {...{src,alt,active,className,style}}/>
            <MDBMask className="flex-center" overlay="white-light">
                <p className="black-text" style={{fontSize:"1em"}}>{alt}</p>
            </MDBMask>
        </MDBView>
    )
};
/*
Image.propTypes = {
    active: PropTypes.bool,
};

Image.defaultProps = {
  active: false,
  className: '',
};
export default Image;
*/
/* props
  - alt:""
  - children
  - className: ""
  - src: ""
*/
