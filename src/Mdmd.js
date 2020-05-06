import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';

//import Radium from 'radium';
//import classNames from 'classnames';
import PropTypes from 'prop-types';
/* for math */
import MathJax from 'react-mathjax';
import RemarkMathPlugin from 'remark-math';

import * as Renderers from './components';

const renderersKey   = Object.keys(Renderers);
const Mdmd = (props) => {
    /******************** for props.md ********************/
    const [source, setSource] = useState(props.source);
    useEffect(()=>{
        if (props.md||props.path)
            fetch(props.md||props.path).then(res=>res.text()).then(res=>setSource(res));
    }, [props.md, props.path])
    useEffect(()=>{
        if(props.source && source!==props.source)
            setSource(props.source)
    }, [source, props.source])
    /******************** for render () ********************/
    const renderersMdmd = Object.assign(...renderersKey.map(key=>{
        const lowerKey  = key.charAt(0).toLowerCase() + key.slice(1);
        const Renderer  = Renderers[key];
        const className = [props.className, props[`className${key}`]].filter(c=>c).join(' ')
        const color     = props[`color${key}`] || props.color;
        const style     = {...props.style    ,...props[`style${key}`]}
        const state     = {className, color, style,}
        return {[lowerKey]:props=><Renderer {...state} {...props}/>}
    }));
    const renderers = {
        ...renderersMdmd, ...props.renderers}
    const plugins = [RemarkMathPlugin]
    const state = {source, renderers, plugins}
    const options = [
        'escapeHtml','skipHtml','sourcePos','rawSourcePos','includeNodeIndex',
        'allowedTypes','disallowedTypes','unwrapDisallowed','allowNode','linkTarget',
        'transformLinkUri', 'transformImageUrl',
    ].filter(name=>name in props).map(name=>( {[name]:props[name]} ))
    const optionsState = options.length?Object.assign(...options):{}
    return (
        <MathJax.Provider input="tex">
            <ReactMarkdown {...optionsState} {...state} />
        </MathJax.Provider>
    )
};

Mdmd.propTypes = {
    /*----------main----------*/
    source   :PropTypes.string,
    renderers:PropTypes.object,
    /*----------sub----------*/
    className :PropTypes.string,
    color     :PropTypes.string,
    style     :PropTypes.object,
};

Mdmd.defaultProps = {
    /*----------main----------*/
    md       :null, /*===*/path     :null,
    source   :''  ,
    renderers:{},
    /*----------sub----------*/
    className: '',
    color:"default-color",
    style:{},
 ...Object.assign(...renderersKey.map( k=>({[`className${k}`]:null}) )),
 ...Object.assign(...renderersKey.map( k=>({[`color${k}`]:null}) )),
 ...Object.assign(...renderersKey.map( k=>({[`style${k}`]:null}) )),
    /*----------Md----------*/

};

export default Mdmd;
