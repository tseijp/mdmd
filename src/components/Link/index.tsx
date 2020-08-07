import React, {ReactChild as RC, FC} from 'react';
import {BaseProps} from '../../types';
import {getLevel} from '../../utils'
//import Radium from 'radium';
//import PropTypes from 'prop-types';
//import classNames from 'classnames';
import {Button} from './Button'

export interface LinkProps extends BaseProps {
    social?:string,
    href?:string,
}

export const Link:FC<LinkProps> = ({
        social='', href='',
        children, className='', color='', style={},
    }) => {
    const level = getLevel(children as RC)
    const onClick = ()=>{window.location.href = href}
    return (level>0)
    ? <Button {...{level,social,href,onClick,children,className,color,style}} />
    : <span {...{onClick,className,style}}><u>{children}</u></span>;
};

/*
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
*/

/* props
  - children
  - href "/docs"
  -
*/
