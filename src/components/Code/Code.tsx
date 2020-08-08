import React, {FC,useCallback,useMemo} from "react";
import {CodeProps} from "../../types";
//import {MDBTooltip} from 'mdbreact';
//import PropTypes from 'prop-types';
//import { atomOneLight as style } from 'react-syntax-highlighter/dist/esm/styles/hljs';
//import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
const {atomOneLight, atomOneDark} = require('react-syntax-highlighter/dist/esm/styles/hljs');
const {Light}        = require('react-syntax-highlighter')

export const Code:FC<CodeProps> = ({value="", language="javascript", inline=false,dark=false}) => {
    //const [isCopied, setIsCopied] = useState(false);
    const onDoubleClick = useCallback((_:any)=>navigator.clipboard.writeText(value),[value])
    const customStyle = useMemo<React.CSSProperties>(() => ({
        position:'relative', display:inline?"inline-block":"fixed",
        ...(inline?{verticalAlign:"top",padding:"0 0"}:{})
    }) ,  [ inline ] )
    const style = useMemo(()=>dark?atomOneDark:atomOneLight, [dark])
    console.log(value);
    return (
        <Light PreTag={inline?"span":"pre"}
            useInlineStyles={true} showLineNumbers={!inline}
            {...{style, customStyle, onDoubleClick, language}}>{value}</Light>
    );
}
/*
Code.propTypes = {
    className: PropTypes.string,
    color    : PropTypes.string,
    style    : PropTypes.object,
    value    : PropTypes.string,
    inline   : PropTypes.bool,
};
Code.defaultProps = {
    className: '',
    coor :'',
    style:{},
    value:'',
    inline:false,
};
*/
export default Code;
