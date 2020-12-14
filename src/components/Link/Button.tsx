import React, {FC,useState,useCallback} from 'react';
import {ButtonProps, buttonColor} from '../../types';
import {MDBBadge, MDBBtn, MDBTooltip} from 'mdbreact'
const colors = ["default","primary","success","info","warning","danger","light","dark"]
export const Button:FC<ButtonProps> = ({
        level=1,/*social='',*/href='',onClick=null,
        children, className='', color='black',style={}
    }) => {
    const [isOpened, setIsOpened] = useState(false);
    const toggle = useCallback(() => {
        setIsOpened(true);
        onClick && onClick();
    }, [onClick])
    const state = { onClick:toggle, level, className, style,...(level===3&&{outline:true}), }
    const hoverText = href.length>30? href.slice(0, 30)+"...":href
    return (
        <MDBTooltip domElement tag="span" placement="bottom">
            <span>
                {level===1
                    ? <MDBBadge {...{...state,children,color: color in colors? color: "dark"}}/>
                    : <MDBBtn   {...{...state,children,color: color as buttonColor}}/>}
            </span>
            <span>{isOpened?'Opened':hoverText}</span>
        </MDBTooltip>
    ) //TODO (social?{social}:{color}
}
