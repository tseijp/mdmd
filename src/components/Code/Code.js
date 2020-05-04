import React from "react";
//import {MDBTooltip} from 'mdbreact';
import PropTypes from 'prop-types';
import { atomOneLight as style } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";

const Code = (props) => {
    //const [isCopied, setIsCopied] = useState(false);
    const {value, language, inline} = props;
    const display = inline?"inline-block":"fixed"
    const inlineStyle =inline?{verticalAlign:"top",padding:"0 0"}:{}
    const styles = {
        pre :{position:'relative',display,...inlineStyle},
    }
    const handleCopy = (e,v)=> {
        //setIsCopied(true);
        navigator.clipboard.writeText(v)
    }
    return (
        <SyntaxHighlighter PreTag={inline?"span":"pre"} style={style}
            customStyle = {styles.pre}
            onDoubleClick={(e)=>handleCopy(e, value)} useInlineStyles={true}
            showLineNumbers={!inline} language={language}>
            {value}</SyntaxHighlighter>
    );
}

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

export default Code;
