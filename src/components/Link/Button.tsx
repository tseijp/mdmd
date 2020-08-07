import React, {FC,useState} from 'react';
import {ButtonProps, buttonColor} from '../../types';
import {MDBBadge, MDBBtn, MDBTooltip} from 'mdbreact'

export const Button:FC<ButtonProps> = ({
        level=1,social='',href='',onClick=()=>{console.log('Clicked')},
        children, className='', color='black',style={}
    }) => {
    const [isOpened, setIsOpened] = useState(false);
    color = color.replace('-color','')
    onClick = () => {
        setIsOpened(true);
        onClick();
    }
    const state = { onClick, level, className, style,...(level===3&&{outline:true}), }
    const hoverText = href.length>30? href.slice(0, 30)+"...":href
    return (
        <MDBTooltip domElement tag="span" placement="bottom">
            <span>
                {level===1
                    ? <MDBBadge {...{...state,children,color:color as string}}/>
                    : <MDBBtn   {...{...state,children,color:color as buttonColor}}/>}
                //TODO (social?{social}:{color}
            </span>
            <span>{isOpened?'Opened':hoverText}</span>
        </MDBTooltip>
    )
}
