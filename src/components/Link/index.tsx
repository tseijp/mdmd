import React, {ReactChild as RC, FC, useCallback} from 'react';
import {LinkProps} from '../../types';
import {getLevel} from '../../utils'
import {Button} from './Button'

export const Link:FC<LinkProps> = ({
        social='', href='',
        children, className='', color='', style={},
    }) => {
    const level = getLevel(children as RC)
    const onClick=useCallback(()=>window.open(href, '_blank', 'noopener noreferrer'),[href])
    return level > 0
    ? <Button {...{level,social,href,onClick,children,className,color,style}} />
    : <span {...{onClick,className,style}}><u>{children}</u></span>;
};
