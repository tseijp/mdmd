import React from 'react';
//import Radium from 'radium';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
import {MDBView, MDBMask} from 'mdbreact';
const Image = (props) => {
    const {src, alt} = props;
    const styles = {
        alt:{fontSize:"25px"},
    }
    const className = 'img-fluid '+props.className;
    const state = {className,src,alt}
    return (
        <MDBView hover>
            <img alt="" {...state}/>
            <MDBMask className="flex-center" overlay="white-light">
                <p className="black-text" style={styles.alt}>{alt}</p>
            </MDBMask>
        </MDBView>
    )
};

Image.propTypes = {
    active: PropTypes.bool,
};

Image.defaultProps = {
  active: false,
  className: '',
};
export default Image;

/* props
  - alt:""
  - children
  - className: ""
  - src: ""
*/
