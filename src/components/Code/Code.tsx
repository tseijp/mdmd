import React, {FC} from "react";
import {BaseProps} from "../../types";
//import {MDBTooltip} from 'mdbreact';
//import PropTypes from 'prop-types';
//import { atomOneLight as style } from 'react-syntax-highlighter/dist/esm/styles/hljs';
//import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
const atomOneLight = require('react-syntax-highlighter/dist/esm/styles/hljs')
const atomOneDark = require('react-syntax-highlighter/dist/esm/styles/hljs')
const Light = require('react-syntax-highlighter')

export interface CodeProps extends BaseProps {
    value   ?:string,
    language?:string,
    inline  ?:boolean,
}

export const Code:FC<CodeProps> = ({value, language, inline=false}) => {
    //const [isCopied, setIsCopied] = useState(false);
    const display = inline?"inline-block":"fixed"
    const inlineStyle =inline?{verticalAlign:"top",padding:"0 0"}:{}
    const styles = {
        pre :{position:'relative',display,...inlineStyle},
    }
    const handleCopy = (e:any,v:any)=> {
        //setIsCopied(true);
        navigator.clipboard.writeText(v)
    }
    return (
        <Light PreTag={inline?"span":"pre"} style={atomOneDark}
            customStyle = {styles.pre}
            onDoubleClick={(e:any)=>handleCopy(e, value)} useInlineStyles={true}
            showLineNumbers={!inline} language={language}>
            {value}</Light>
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
