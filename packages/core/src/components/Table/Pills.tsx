import React, {FC,Fragment,useState} from 'react';
import {TablesProps} from '../../types';
import {MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

export const Pills:FC<TablesProps> =({
        isPill=true, /*color, style,*/ columns=[], rows=[],
        className='', //children, color='', style={}
    }) => {
    const [tab, setTab] = useState(0)
    //const getarr =arr=>arr?arr instanceof Array?arr:[arr]:[]
    //const isPill = columns.every( col=>col.label.every(c=>getAnyChild(c.props,'emphasis').length) )
    const cards = columns.map((column,i)=>(
        {column, rows:rows.map(row=>row[''+i])}
    ))
    const togglePills =(e:any, num:number) => {
        e.preventDefault(); //?
        if (tab!==num)
            setTab(num);
    };
    return (
        <Fragment>
            <MDBNav style={{border:"none"}}
                className={className+` mt-5 nav-${isPill?'pills':'tabs'}`}>
                {cards && cards.map((card,i)=>
                <Fragment key={i}>
                    <MDBNavItem>
                       <MDBNavLink link to="#" active={tab===(i)}
                          onClick={(e:any)=>togglePills(e,i)} >
                          {card.column.label.map((l:any)=>l.props.children)}
                        </MDBNavLink>
                    </MDBNavItem>
                </Fragment>
                )}
            </MDBNav>
            <MDBTabContent activeItem={""+tab}>
                {cards && cards.map((card,i)=>
                <Fragment key={i}>
                    <MDBTabPane tabId={i+""}>
                        <p> {card.rows} </p>
                    </MDBTabPane>
                </Fragment>
                )}
          </MDBTabContent>
        </Fragment>
    );
}
