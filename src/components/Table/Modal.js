//https://mdbootstrap.com/docs/react/modals/basic/
import React, {useState} from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
const Modal = (props) => {
    const {columns,rows, argments, className, style} = props;//keys
    const [modalNum, setModalNum] = useState(null)
    const cards = columns.map((column,i)=>(
        {column, rows:rows.map(row=>row[''+i]), argment:argments[i]}
    ))
    const color = props.color.replace('-color','')
    const state = {className, color, style}
    const Aux =props=>props.children
    return (
        <Aux>
        {cards.map((card,i)=>
            <Aux key={i}>
                <MDBBtn {...state} onClick={()=>setModalNum((modalNum===i)?null:i)}>
                    {card.column.label[0].props.children[0].props.children}</MDBBtn>
                <MDBModal
                    fullHeight position="right"
                    isOpen={modalNum===i}
                    toggle={()=>setModalNum(null)} >
                    {console.log(card.column.label[0].props)}
                    <MDBModalHeader toggle={()=>setModalNum(null)}>
                        {card.column.label[0].props.children}</MDBModalHeader>
                    <MDBModalBody>
                        {card.rows}
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn {...state} onClick={()=>setModalNum(null)}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </Aux>
        )}
    </Aux>
    )
}
export default Modal;
