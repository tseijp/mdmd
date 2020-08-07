import React, {FC, Fragment, useState} from 'react';
import {buttonColor} from '../../types';
import {TablesProps} from './index';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

export const Modal:FC<TablesProps> = ({
        columns=[], rows=[], argments=[],
        children, className='', color='dark', style={}
    }) => {
    const [modalNum, setModalNum] = useState<number>(0)
    const cards = columns.map((column,i)=>(
        {column, rows:rows.map(row=>row[''+i]), argment:argments[i]}
    ))
    color = color.replace('-color','')
    return (
        <Fragment>
        {cards.map((card,i)=>
            <Fragment key={i}>
                <MDBBtn {...{className, color:color as buttonColor, style}}
                    onClick={()=>setModalNum((modalNum===i)?0:i)}>
                    {card.column.label[0].props.children[0].props.children}</MDBBtn>
                <MDBModal
                    inline noClickableBodyWithoutBackdrop overflowScroll //?? TODO error if no
                    fullHeight position="right"
                    isOpen={modalNum===i}
                    toggle={()=>setModalNum(0)}>
                    <MDBModalHeader toggle={()=>setModalNum(0)}>
                        {card.column.label[0].props.children}
                    </MDBModalHeader>
                    <MDBModalBody> {card.rows} </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn {...{className, color:color as buttonColor, style}}
                            onClick={()=>setModalNum(0)}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </Fragment>
        )}
    </Fragment>
    )
}
