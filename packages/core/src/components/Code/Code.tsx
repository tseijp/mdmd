import React, {FC,useCallback,useMemo} from "react";
import {atomOneLight, atomOneDark} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import {Light} from 'react-syntax-highlighter'
import {CodeProps} from "../../types";

export const Code:FC<CodeProps> = ({value="", language="javascript", inline=false,dark=false}) => {
    const onDoubleClick = useCallback((_:any)=>navigator.clipboard.writeText(value),[value])
    const customStyle = useMemo(()=>{
        return {
            ...(inline? {verticalAlign:"top"}: {}),
            display:inline? "inline-block": "fixed", 
            position:'relative',
            padding:0,
            margin:0
        }
    }, [inline])
    const style = useMemo(()=>dark? atomOneDark: atomOneLight, [dark])
    return (
        <Light
            PreTag={inline?"span":"pre"}
            useInlineStyles={true}
            showLineNumbers={!inline}
            {...{style, customStyle, onDoubleClick, language}}>{value}</Light>
    );
}
