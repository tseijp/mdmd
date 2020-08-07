import React, {FC,CSSProperties,useMemo} from 'react';
import {BaseProps} from '../../types';
import {MDBRow,MDBCol,MDBCard,MDBCardBody,MDBCardImage,
        MDBCardTitle,MDBCardText,MDBAnimation} from 'mdbreact';

export interface CardsProps extends BaseProps {
    columns?:any,
    rows   ?:any,
    argments?:any,
}
export const Cards :FC<CardsProps> = ({columns, rows, argments}) => {
    const cards = columns.map((column:any,i:number)=>(
        {column, rows:rows.map((row:any)=>row[''+i]), argment:argments[i]}
    ))
    const toHead =(row:any)=>{
        const text = row && row.map((r:any)=>r.props.children).join('')
        return (text&&text[0]==="#")?text.slice(1):null
    }
    const styles = useMemo<CSSProperties[]>(()=>[
        {textAlign:"center", margin:"25px auto"},
        {borderRadius:"5px"},
        {margin:"0 auto", borderRadius:"5px", boxShadow:"0 10 25 rgba(0,0,0,0.25)"},
    ], [])
    const getUpper=(chart:string)=>chart.charAt(0).toUpperCase()+chart.slice(1)
    const getType=(argment:string)=>argment?`fadeIn${getUpper(argment==='center'?'up':argment)}`:"swing"
    type TypeProp = 'fadeInUp' | "swing" //TODO
    const Animation =(props:any)=>props.argment
        ? <MDBAnimation reveal type={getType(props.argment) as TypeProp}>{props.children}</MDBAnimation>
        : props.children
    return (
        <MDBRow>
            {cards&&cards.map((card:any,i:number)=>
                <MDBCol key={i} style={styles[0]}>
                    <Animation argment={card.argment}>
                        <MDBCard style={styles[1]}>
                            <MDBCardImage style={styles[2]} className="img-fluid"
                                src={card.column.label[0].props.src} waves />
                            <MDBCardBody>
                                <MDBCardTitle>{card.column.label[0].props.alt}</MDBCardTitle>
                                {card.rows && card.rows.map((row:any,j:number)=>
                                    <MDBCardText key={j}>{toHead(row)||row}</MDBCardText>
                                )}
                            </MDBCardBody>
                        </MDBCard>
                    </Animation>
                </MDBCol>
            )}
        </MDBRow>
    )
}
