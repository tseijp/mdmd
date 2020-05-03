import React from 'react';
import {MDBRow,MDBCol,MDBCard,MDBCardBody,MDBCardImage,MDBCardTitle,MDBCardText,MDBAnimation} from 'mdbreact';
const Cards = (props) => {
    const {columns,rows, argments} = props;//keys
    const cards = columns.map((column,i)=>(
        {column, rows:rows.map(row=>row[''+i]), argment:argments[i]}
    ))
    const toHead =(row)=>{
        const text = row && row.map(r=>r.props.children).join('')
        return (text&&text[0]==="#")?text.slice(1):null
    }
    const styles = {
        col:{textAlign:"center", margin:"25px auto"},
        card:{borderRadius:"5px"},
        cardImage:{margin:"0 auto", borderRadius:"5px", boxShadow:"0 10 25 rgba(0,0,0,0.25)"},
    }
    const getUpper=(chart)=>chart.charAt(0).toUpperCase()+chart.slice(1)
    const getType=(argment)=>argment?`fadeIn${getUpper(argment==='center'?'up':argment)}`:null
    const Animation =(props)=>props.argment?<MDBAnimation reveal type={getType(props.argment)}>{props.children}</MDBAnimation>:props.children
    return (
        <MDBRow>
            {cards&&cards.map((card,i)=>
                <MDBCol key={i} style={styles.col}>
                    <Animation argment={card.argment}>
                        <MDBCard style={styles.card}>
                            <MDBCardImage style={styles.cardImage} className="img-fluid"
                                src={card.column.label[0].props.src} waves />
                            <MDBCardBody>
                                <MDBCardTitle>{card.column.label[0].props.alt}</MDBCardTitle>
                                {card.rows && card.rows.map((row,j)=>
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
export default Cards;
