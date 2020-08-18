import React, {FC,useCallback,useMemo} from "react";
import {CodeProps} from "../../types";
//import {MDBTooltip} from 'mdbreact';
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
    return (
        <Light PreTag={inline?"span":"pre"}
            useInlineStyles={true} showLineNumbers={!inline}
            {...{style, customStyle, onDoubleClick, language}}>{value}</Light>
    );
}
