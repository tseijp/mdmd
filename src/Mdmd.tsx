import React, {FC, useState, useEffect, useMemo, useRef} from 'react';
import ReactMarkdown from 'react-markdown';
import {MdmdProps} from './types'
import * as Renderers from './components';
//const MathJax = require('react-mathjax');
const RemarkMathPlugin = require('remark-math');


const renderersKey  = Object.keys(Renderers)
export const Mdmd:FC<MdmdProps> = ({
        md=null, path=null, source='',
        children, className='', color='',style={},...props
    }) => {
    /******************** for props.source ********************/
    const [nowSource, setSource] = useState(source);
    useEffect(()=>{(path||md)&&fetch(path||md).then(r=>r.text()).then(r=>setSource(r)) }, [md,path])
    useEffect(()=>{(source||children)&&setSource(source||String(children))}, [source,children])
    /******************** for options ********************/
    const options = useRef([
        'escapeHtml','skipHtml','sourcePos','rawSourcePos','includeNodeIndex',
        'allowedTypes','disallowedTypes','unwrapDisallowed','allowNode','linkTarget',
        'transformLinkUri', 'transformImageUrl',
    ].filter(name=>name in props).map(name=>( {[name]:props[name]} )));
    const renderersMdmd = useRef(Object.assign({},...renderersKey.map((key)=>{
        const lowerKey  = key.charAt(0).toLowerCase() + key.slice(1);
        const Renderer  = (Renderers as any)[key];
        const className = [props.className, props[`className${key}`]].filter(c=>c).join(' ')
        const color     = props[`color${key}`] || props.color;
        const style     = {...props.style    ,...props[`style${key}`]}
        return {[lowerKey]:(props:any)=><Renderer {...{className,color,style,...props}} />}
    })));
    /******************** performance ********************/
    const plugins = useMemo(()=>[props.plugin, RemarkMathPlugin]                  , [props.plugin])
    const renderers = useMemo(()=>({...renderersMdmd.current,...props.renderers}) , [props.renderers])
    const optionState = useMemo(()=>({...options.current, ...props.options})      , [props.options])
    const markdownRef = useMemo(()=>props.markdownRef?{ref:props.markdownRef}:{}  , [props.markdownRef])
    //const state = useMemo(()=>({plugins, renderers,...optionState, markdownRef})  , [plugins, renderers, optionState, markdownRef])
    return <ReactMarkdown {...{plugins, renderers, ...optionState, markdownRef, source:nowSource}}/>
    /*
    return (
        <MathJax.Provider input="tex">
            <ReactMarkdown {...{plugins, renderers, ...optionState, markdownRef, source:nowSource}}/>
        </MathJax.Provider>
    )*/
};
/*
Mdmd.defaultProps = {
    md       :null, path     :null,
    source   :''  ,
    renderers:{},
    className: '',
    color:"default-color",
    style:{},
};
*/
