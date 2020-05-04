import React, {useState} from 'react';
import {MDBBadge, MDBBtn, MDBTooltip} from 'mdbreact'

const Button = (props) => {
    const [isOpened, setIsOpened] = useState(false);
    const {className, style, social, level, href, is_1,is_2,is_3} = props;
    const color = props.color.replace('-color','')
    const onClick = () => {
        setIsOpened(true);
        props.onClick();
    }
    const buttonStyle= social?{social}:{color}
    const state = { onClick, level, className, style,...(is_3&&{outline:true}), }
    const hoverText = href.length>30? href.slice(0, 30)+"...":href
    return (
        <MDBTooltip domElement tag="span" placement="bottom">
            <span>
                {is_1&&<MDBBadge color={props.color} {...state}>{props.children}</MDBBadge>}
                {(is_2||is_3)&&<MDBBtn {...buttonStyle} {...state}>{props.children}</MDBBtn>}
            </span>
            <span>{isOpened?'Opened':hoverText}</span>
        </MDBTooltip>
    )
}
export default Button;
