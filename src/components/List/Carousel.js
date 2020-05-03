//https://mdbootstrap.com/docs/react/navigation/footer/
import React from 'react';
import PropTypes from 'prop-types';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
"mdbreact";
const Mdmd = (props) => {
    const {children,activeItem,showControls,showIndicators,getArray} = props;
    const className = "z-depth-1 "+props.className;
    const getSrc=(props)=>getArray(props.children).map(c=>c.key&&c.key.match('image')?c.props.src:'')[0]||''
    const getAlt=(props)=>getArray(props.children).map(c=>c.key&&c.key.match('image')?c.props.alt:'')[0]||''
    const style ={position:"relative", overflow:"hidden",}
    const length = getArray(props.children).length
    const state ={className,style,activeItem,showControls,showIndicators,length}
    console.log(getSrc(children[0].props));
    return (
        <MDBCarousel {...state}>
            <MDBCarouselInner>
            {getArray(children).map((c,i)=>
                <MDBCarouselItem key={i} itemId={i+1+""}>
                    <MDBView>
                        <img className="d-block w-100" alt={getAlt(props)} src={getSrc(props)}/>
                        <MDBMask overlay="black-light" />
                    </MDBView>
                    <MDBCarouselCaption>
                        <h3 className="h3-responsive">{getAlt(c.props)}</h3>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
            )}
            </MDBCarouselInner>
        </MDBCarousel>
    )
};

Mdmd.propTypes = {
    active: PropTypes.bool,
};

Mdmd.defaultProps = {
    activeItem:1,
    showControls:true,
    showIndicators:true,
};
export default Mdmd;
