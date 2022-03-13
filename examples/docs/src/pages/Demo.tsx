import React, {Fragment,useRef,useState,useEffect,useCallback,useMemo} from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import {
    MDBContainer, MDBFreeBird, MDBEdgeHeader, MDBIcon, MDBBtn,
    MDBModal, MDBModalBody, MDBModalHeader, /*MDBModalFooter*/} from "mdbreact";
import {useGrid} from 'use-grid'
import {Mdmd, buttonColor} from "../src"; //develop&test
import * as Pages from './pages';
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-github";
const INITIALDOCSPAGE = "Grid";
const pagesKey  = Object.keys(Pages);
const WIDTH = 15;
/*---------- context ----------*/

const Root = (props:any) => { //customize node for Mdmd.props.renderers
    const style = {
        backgroundImage:"url('https://mdbootstrap.com/wp-content/uploads/2016/12/big-bundle1.jpg')",
        backgroundColor:"#123456", backgroundPosition:"center center", backgroundSize:"cover",
        filter:"blur(3px) opacity(.3) drop-shadow(5px -25px 50px black) hue-rotate(-90deg) ",}
    return (
        <main>
            <MDBEdgeHeader style={style} />
            <MDBFreeBird>
                <MDBContainer {...props}>
                    {props.children}
                </MDBContainer>
            </MDBFreeBird>
        </main>
    )
}
const Modal = (props:any) => {
    const {setColor,page,setPage,isOpen,setIsOpen,} = props;
    const colors = ["danger","warning","success","info","default","primary",
                    "secondary","elegant","stylish","unique","special",];
    return (
        <MDBModal isOpen={isOpen} toggle={()=>setIsOpen(false)} fullHeight position="right">
            <MDBModalHeader toggle={()=>setIsOpen(false)}>MDMD Setting</MDBModalHeader>
            <MDBModalBody>
                    <h3>Color</h3>
                    <Fragment>
                        {colors.map((color,i)=>
                            <MDBBtn key={i} color={color as buttonColor}
                            onClick={()=>setColor(color+"-color")}>{color}</MDBBtn>)}
                    </Fragment>
                    <h3>Pages</h3>
                    <Fragment>
                        {pagesKey.map((p,i)=>
                            <MDBBtn key={i} color={page===p?props.color.replace("-color",""):null}
                                onClick={()=>setPage(p)}>{p}</MDBBtn>)}
                    </Fragment>
            </MDBModalBody>
        </MDBModal>
    )
}
export const Demo = (props:any) => {
    /******************** for mdmd props ********************/
    const leftRef = useRef<React.LegacyRef<HTMLDivElement>>();//createRef
    const aceEditorRef = useRef(null);
    const separatorXRef = useRef(null);
    const [fontSize] = useGrid({md:50, lg:75})
    const [page, setPage] = useState(INITIALDOCSPAGE);
    const [color, setColor] = useState(props.color);
    const [isOpen, setIsOpen] = useState(false);
    /******************** for docs pages ********************/
    useEffect(()=>{
        fetch(Pages[page]).then(res=>res.text()).then(res=>{
            setAceValue(res);
            setSource(res);
        });
    }, [page])
    /******************** for should update ********************/
    const [source, setSource] = useState(props.source);//for Mdmd props.source
    const [aceValue, setAceValue] = useState(props.source);
    const [isChanged, setIsChanged] = useState(false);
    useEffect(()=>{
        const interval = setInterval(()=>{
            if (isChanged) {
                setIsChanged(false)
                setSource(aceValue)
            }
        },1000);
        return ()=>clearInterval(interval);
    })
    /******************** for split window ********************/
    const [width, setWidth] = useState(WIDTH);
    useEffect(() => {
        if (!width)
            return setWidth(leftRef.current.clientWidth);
        leftRef.current.style.width = `${width}px`;
        setTimeout(()=>
            aceEditorRef.current && aceEditorRef.current.editor.resize()
        ,1000)
    }, [width, leftRef]);
    const separatorMouseMove =useCallback(e=>{
        if (!separatorXRef.current)
            return;
        const newwidth = width+e.clientX-separatorXRef.current;
        separatorXRef.current = e.clientX;
        setWidth(newwidth);
    }, [width] )
    /******************** styles ********************/
    const styles = useMemo<React.CSSProperties[]>(() => ([
      { width:fontSize,height:fontSize,bottom:fontSize/4,borderRadius:fontSize,
        transition:"0.75s",position:"fixed",padding:0,fontSize },
      { transform:`rotate(${width<WIDTH*2?"-18":""}0deg)`,left:width+fontSize*(width<WIDTH*2?1/4:-2) },
      { transform:`rotate(${isOpen?"90":"0"}deg)`,right:fontSize/4 },
    ]),[isOpen, width, fontSize])
    const iconStyle = useMemo(()=>({
        position:"absolute",textAlign:"center",top:0,bottom:0,left:0,right:0
    }), [])
    const sepaStyle = useMemo(()=>({
        transition:"0.75s",display:"table-cell",backgroundColor:"#E8E8E8",width:WIDTH+"px"
    }), [])
    /******************** peformance tuning ********************/
    const stateMdmd = useMemo(()=>({color, renderers:{root:Root}}), [color]);
    const stateAce = useMemo(()=>({
        value:aceValue,onChange:(value:any)=>{setAceValue(value);setIsChanged(true)},
        width:"100%",ref:aceEditorRef,editorProps:{$blockScrolling:false},
        height:"100%",name:"UNIQUE_ID_OF_DIV",mode:"markdown",theme:"github",
    }),[aceValue]);
    const onMouseDown = useCallback(e=>{separatorXRef.current=e.clientX},[])
    const onMouseMove = useCallback(e=>separatorMouseMove(e), [separatorMouseMove])
    const onMouseUp   = useCallback(()=>{separatorXRef.current=null}, [])
    /******************** render ********************/
    return (
        <div {...{onMouseMove,onMouseUp}} style={{display:"table",width:"100%",flexDirection:"column"}}>
            <div ref={leftRef} style={{transition:".5s",display:"table-cell",overflow:"hidden"}}>
                <MDBContainer  style={{transition:".75s",position:"fixed",padding:0,width,height:"100%"}}>
                    {useMemo(()=><AceEditor {...stateAce}/>,[stateAce])}
                </MDBContainer>
            </div>
            { useMemo(()=><>
            <div {...{onMouseDown}} style={sepaStyle}/>
            <div {...{onMouseDown}} style={{width:"auto",overflow:"hidden"}}>
                <Mdmd source={source} {...stateMdmd}/>
            </div>
            </>,[onMouseDown,sepaStyle,source,stateMdmd]) }
            <MDBBtn style={{...styles[0],...styles[1]}}
                color={color.replace('-color','')}
                onClick={()=>setWidth(width<WIDTH*2?window.innerWidth/3:WIDTH)}>
                { useMemo(()=><MDBIcon icon="angle-left" style={iconStyle}/>,[iconStyle]) }
            </MDBBtn>
            <MDBBtn style={{...styles[0],...styles[2]}}
                color={color.replace('-color','')}
                onClick={()=>setIsOpen(!isOpen)}>
                { useMemo(()=><MDBIcon icon="ellipsis-v" style={iconStyle}/>,[iconStyle]) }
            </MDBBtn>
            { useMemo(()=>
                <Modal {...{color,setColor,page,setPage,isOpen,setIsOpen}}/>
            ,[color,setColor,page,setPage,isOpen,setIsOpen]) }
        </div>
    )
}

Demo.propTypes = {
    /*----------main----------*/
    source   :PropTypes.string,
    renderers:PropTypes.object,
    /*----------sub----------*/
    className :PropTypes.string,
    color     :PropTypes.string,
    style     :PropTypes.object,
};

Demo.defaultProps = {
    /*----------main----------*/
    path     :null,
    color    :'elegant',
    source   :''  ,
};

export default Demo;
