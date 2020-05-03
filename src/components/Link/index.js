import React from 'react';
//import Radium from 'radium';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
import Button from './Button'

const Mdmd = (props) => {
    const {color, social, className, style} = props;
    const keys = props.children.map(el=>el.key);
    const is_1 = keys.every(key=>key.match('emphasis'))      //   _e.g._
    const is_2 = keys.every(key=>key.match('strong'))        //  __e.g.__
    const is_3 = is_2 && [].concat(...props.children.map(el=>// ___e.g.___
        el.props.children instanceof Array?el.props.children.map(e=>e.key):[]
    )).every(key=>key.match('emphasis'));
    const onClick = () =>{window.location.href = props.href}
    const state = {onClick, className, style};
    const ButtonState= {color, social, is_1,is_2,is_3};
    if (is_1||is_2||is_3)
        return <Button {...state} {...ButtonState} href={props.href}>{props.children}</Button>
    return <span {...state}><u>{props.children}</u></span>;
};

Mdmd.propTypes = {
    className: PropTypes.string,
    color    : PropTypes.string,
    style    : PropTypes.object,
};

Mdmd.defaultProps = {
  className: '',
  color    :'dafault',
  social   : null, //such as fb, tw, gplus, li, ins, pin, yt, vk, so, slack, git...
};

export default Mdmd;


/* props
  - children
  - href "/docs"
  -
*/
