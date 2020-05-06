import React, {Fragment, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-github";
import {
    MDBContainer, MDBFreeBird, MDBEdgeHeader, MDBIcon, MDBBtn,
    MDBModal, MDBModalBody, MDBModalHeader, /*MDBModalFooter*/} from "mdbreact";

import Mdmd from "../src"; //develop&test
import About     from './pages/About.md';
import Basic     from './pages/Basic.md';
import Component from './pages/Component.md';
import Container from './pages/Container.md';
import Content   from './pages/Content.md';
import Grid      from './pages/Grid.md';
import Help      from './pages/Help.md';
import How       from './pages/How.md';

const DOCSPAGES = {About,Basic,Component,Container,Content,Grid,Help,How}
const SEPARATORWIDTH = 15;

/*---------- context ----------*/

const Root = (props) => { //customize node for Mdmd.props.renderers
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
const Modal = (props) => {
    const {setColor,filename,setFilename,isModalOpen,setIsModalOpen,} = props;
    const colors = ["danger","warning","success","info","default","primary","secondary",
                    "elegant","stylish","unique","special",];
    const pages  = Object.keys(DOCSPAGES);//["About", "Basic", "Component"];
    return (
        <MDBModal isOpen={isModalOpen} toggle={()=>setIsModalOpen(false)} fullHeight position="right">
            <MDBModalHeader toggle={()=>setIsModalOpen(false)}>MDMD Setting</MDBModalHeader>
            <MDBModalBody>
                    <h3>Color</h3>
                    <Fragment>
                        {colors.map((color,i)=>
                            <MDBBtn key={i} color={color} onClick={()=>setColor(color+"-color")}>{color}</MDBBtn>)}
                    </Fragment>
                    <h3>Pages</h3>
                    <Fragment>
                        {pages.map((page,i)=>
                            <MDBBtn key={i} color={filename===page?props.color.replace("-color",""):null}
                                onClick={()=>setFilename(page)}>{page}</MDBBtn>)}
                    </Fragment>
            </MDBModalBody>
        </MDBModal>
    )
}
const Demo = (props) => {
    /******************** for props.md ********************/
    const [color, setColor] = useState(props.color);
    const [source, setSource] = useState(props.source);//for Mdmd props.source
    const [filename, setFilename] = useState('About');
    const [leftWidth, setLeftWidth] = useState(SEPARATORWIDTH);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const leftRef = React.createRef();
    const aceEditorRef = React.useRef(null);
    const separatorXRef = React.useRef(null);
    /******************** for pages ********************/
    useEffect(()=>{
        fetch(DOCSPAGES[filename]).then(res=>res.text()).then(res=>setSource(res));
    }, [filename])
    /******************** for split ********************/
    useEffect(() => {
        if (!leftWidth)
            return setLeftWidth(leftRef.current.clientWidth);
        leftRef.current.style.width = `${leftWidth}px`;
    }, [leftWidth,leftRef]);
    useEffect(()=>{
        setTimeout(()=>aceEditorRef.current && aceEditorRef.current.editor.resize(),1000)
    }, [leftWidth])
    const separatorMouseMove =e=> {
        if (!separatorXRef.current)
            return;
        const newleftWidth = leftWidth+e.clientX-separatorXRef.current;
        separatorXRef.current = e.clientX;
        setLeftWidth(newleftWidth);
    }
    /******************** render ********************/
    const styles = {
        SplitPane :{display:"table",flexDirection:"column", width:"100%"},
        Separator :{display:"table-cell", backgroundColor:"#E8E8E8",
                    width:SEPARATORWIDTH+"px",transition:"0.75s"},
        SplitLeft :{overflow:"hidden",display:"table-cell",transition:"0.5s"},
        SplitRight:{overflow:"hidden",display:"table-cell",transition:"0.5s",width:"auto",},
        Container :{position:"fixed", padding:"0 0 0 0",transition:"0.75s",
                    width:leftWidth+"px",height:"100%",},
        btn  : {fontSize:"50px", borderRadius:"100px",
                position:"fixed",transition:"0.75s", bottom:"50px",},
        btnWidth:{padding:"15px 40px",left:leftWidth+(leftWidth<SEPARATORWIDTH*2?50:-150)+"px"},
        btnModal:{padding:"15px 43px",right:"50px"},
        btnClose:{padding:"15px 40px",right:(isModalOpen?50:-50)+"px"},
    };
    return (
        <div style={styles.SplitPane}
            onMouseMove={e=>separatorMouseMove(e)}
            onMouseUp  ={e=>separatorXRef.current = null}>
            <div ref={leftRef} style={styles.SplitLeft}>
                <MDBContainer style={styles.Container}>
                    <AceEditor ref={aceEditorRef} value={source}
                        name="UNIQUE_ID_OF_DIV" mode="markdown" theme="github"
                        width="100%" height="100%"
                        onChange={(value)=>setSource(value)}                    {/*TODO determine to run setSource by time*/}
                        editorProps={{ $blockScrolling: false }}/>
                </MDBContainer>
            </div>
            <div style={styles.Separator}  onMouseDown={e=>{separatorXRef.current=e.clientX}}/>
            <div style={styles.SplitRight} onMouseDown={e=>{separatorXRef.current=e.clientX}}>
                <Mdmd source={source} color={color} renderers={{root:Root}} />
            </div>
            <MDBBtn style={{...styles.btn,...styles.btnWidth}} color={color.replace('-color','')}
                onClick={()=>{setLeftWidth(leftWidth<SEPARATORWIDTH*2?500:SEPARATORWIDTH)}}>
                <MDBIcon icon={`angle-${leftWidth<SEPARATORWIDTH*2?"right":"left"}`} /></MDBBtn>
            <MDBBtn style={{...styles.btn,...styles.btnModal}} color={color.replace('-color','')}
                onClick={()=>setIsModalOpen(!isModalOpen)}><MDBIcon icon="ellipsis-v" /></MDBBtn>
            <Modal {...{color,setColor,filename,setFilename,isModalOpen,setIsModalOpen,}}/>
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
    color    :'default-color',
    source   :''  ,
};

export default Demo;
