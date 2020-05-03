//https://mdbootstrap.com/docs/react/components/pills/
import React, {useState} from 'react';
//import PropTypes from 'prop-types';
import {MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

const Pills =(props)=> {
    const [tab, setTab] = useState(0)
    const {className, /*color, style,*/ columns, rows, /*keys*/} = props;
    const Aux = props => props.children
    const getarr =arr=>arr?arr instanceof Array?arr:[arr]:[]
    const getAnyChild =(props,key)=>getarr(props.children).filter(c=>c.key&&c.key.match(key))//[g0,..]or[]
    const isPill = columns.every( col=>col.label.every(c=>getAnyChild(c.props,'emphasis').length) )
    const cards = columns.map((column,i)=>(
        {column, rows:rows.map(row=>row[''+i])}
    ))
    const togglePills =(num,event)=> {
        event.preventDefault(); //?
        if (tab!==num)
            setTab(num);
    };
    return (
        <Aux>
            <MDBNav style={{border:"none"}}
                className={className+` mt-5 nav-${isPill?'pills':'tabs'}`}>
                {cards && cards.map((card,i)=>
                <MDBNavItem key={i}>
                   <MDBNavLink link to="#" active={tab===(i)}
                      onClick={(e)=>togglePills(i,e)} >
                      {card.column.label.map(l=>l.props.children)}
                    </MDBNavLink>
                </MDBNavItem>
                )}
            </MDBNav>
            <MDBTabContent activeItem={""+tab}>
                {cards && cards.map((card,i)=>
                <MDBTabPane key={i} tabId={i+""}>
                    <p> {card.rows} </p>
                </MDBTabPane>
                )}
          </MDBTabContent>
        </Aux>
    );
}

export default Pills;
